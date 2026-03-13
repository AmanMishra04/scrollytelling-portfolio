"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Fades in from 0%, fades out by 15%
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: Fades in at 25%, fully visible at 30%, fades out by 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, -50]);

  // Section 3: Fades in at 55%, fully visible at 60%, fades out by 75%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">

        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Aman Mishra
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light">
            -Software Engineer-
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 top-1/2 -translate-y-1/2 max-w-lg"
        >
            Building modern <br />
            <span className="text-gray-400">digital experiences.</span>
          </h2>
          <div className="h-1 w-24 bg-white/20 mt-8 rounded-full" />
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 top-1/2 -translate-y-1/2 max-w-lg text-right"
        >
          <h2 className="text-3xl md:text-6xl font-semibold leading-tight text-white mb-4">
            with code, creativity <br />
            <span className="text-gray-400">and engineering.</span>
          </h2>
          <div className="h-1 w-24 bg-white/20 mt-8 rounded-full ml-auto" />
        </motion.div>

      </div>
    </div>
  );
}
