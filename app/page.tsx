import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* 500vh sticky scroll section */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      <div className="relative z-20">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
      </div>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm font-medium text-gray-500 bg-[#121212]">
        © {new Date().getFullYear()} Aman Mishra. Built by Aman Mishra.
      </footer>
    </main>
  );
}
