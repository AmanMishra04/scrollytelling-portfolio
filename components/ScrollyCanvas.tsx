"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 120; // 0 to 119

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Framer Motion scroll progress 0 to 1 over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to a frame index (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        // File format: frame_000_delay-0.066s.png
        // Need to pad start with zeros to match standard formatting: e.g. 000, 001, ..., 119
        const indexStr = i.toString().padStart(3, "0");
        const src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
        
        img.src = src;
        await new Promise((resolve) => {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === TOTAL_FRAMES) {
              setIsLoaded(true);
            }
            resolve(null);
          };
          img.onerror = () => {
            console.error(`Failed to load ${src}`);
            // Resolve anyway to not break the loop
            resolve(null);
          };
        });
        loadedImages.push(img);
        
        // Render first frame as soon as it loads
        if (i === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            img.onload = () => {
                loadedCount++;
                if (loadedCount === TOTAL_FRAMES) setIsLoaded(true);
                // initial render to prevent blank screen
                renderFrame(0, [img]); 
            };
          }
        }
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  // Stable render function
  const renderFrame = useCallback((index: number, imgs: HTMLImageElement[] = images) => {
    if (!canvasRef.current || imgs.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgs[index];
    if (!img) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    // ensure size is set
    if (canvasWidth === 0 || canvasHeight === 0) return;

    const imgWidth = img.width;
    const imgHeight = img.height;

    const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const newWidth = imgWidth * ratio;
    const newHeight = imgHeight * ratio;
    const offsetX = (canvasWidth - newWidth) / 2;
    const offsetY = (canvasHeight - newHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  }, [images]);

  // Use Framer Motion event to trigger render only on scroll change
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) {
      renderFrame(Math.floor(latest));
    }
  });

  // Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame after resize
        renderFrame(Math.floor(frameIndex.get()));
      }
    };
    
    handleResize(); // Initial resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full block"
        />
        
        {/* Loading overlay if images are still preloading */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50 text-white font-sans">
            Loading Sequence...
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
