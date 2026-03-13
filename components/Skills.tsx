export default function Skills() {
  const technicalSkills = {
    "Programming Languages": ["Python", "HTML", "CSS", "SQL"],
    "Libraries and Tools": ["Excel", "Tableau", "Power BI", "Pandas", "NumPy", "Jupyter Notebook"],
  };

  const softSkills = [
    "Analytical Thinking",
    "Communication Skills",
    "Problem Solving",
    "Research",
    "Analytical Skills",
  ];

  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Title Area */}
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Tech <span className="text-gray-500">Skills.</span>
          </h2>
          <div className="h-1 w-24 bg-white/20 rounded-full" />
        </div>

        {/* Skills Content Area */}
        <div className="w-full md:w-2/3 space-y-16">
          
          {/* Technical Categories */}
          {Object.entries(technicalSkills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-white mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-sm font-mono tracking-wide hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Core Competencies</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-transparent border border-gray-600 text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:border-gray-400 hover:text-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
