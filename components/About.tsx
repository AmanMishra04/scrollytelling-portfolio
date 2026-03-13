export default function About() {
  return (
    <section className="relative w-full bg-[#121212] py-6 md:py-10 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-gray-500">Me.</span>
          </h2>
          <div className="h-1 w-24 bg-white/20 rounded-full" />
        </div>
        
        <div className="w-full md:w-2/3 text-lg md:text-2xl text-gray-400 font-light leading-relaxed flex flex-col gap-8">
          <p>
            Analytical and data-driven professional with a Bachelor’s degree in Computer Science Engineering and experience in technology and problem solving.
          </p>
          <p>
            Skilled in Python, SQL, data analysis, and statistical techniques to extract insights from structured and unstructured datasets.
          </p>
          <p>
            Experienced in analyzing data, building analytical solutions, and communicating insights to support decision-making.
          </p>
        </div>
      </div>
    </section>
  );
}
