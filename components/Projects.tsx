import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Campus Xplorer",
    description: "Developed a navigation solution to help users easily locate buildings and facilities within the university campus.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
  },
  {
    title: "Face Detection Using OpenCV & Python",
    description: "A system using Haar cascade classifier for face detection, performing preprocessing operations such as face alignment and normalization.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
  },
  {
    title: "E-Commerce Dashboard Using Power BI",
    description: "Created an interactive dashboard to track and analyze online sales data of a store using Microsoft Power BI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-6 md:py-10 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-10">
          Selected <span className="text-gray-500">Works.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "p-2 transition-all duration-500 hover:bg-white/10 hover:border-white/20"
              )}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
