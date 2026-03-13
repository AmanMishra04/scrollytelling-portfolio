export default function Achievements() {
  const achievements = [
    {
      title: "Best Team Award",
      issuer: "Tata Consultancy Services",
      description: "Awarded for excellent teamwork, collaboration, and contribution toward successful project outcomes.",
      type: "award",
    },
    {
      title: "TCS AI Hackathon",
      issuer: "Tata Consultancy Services",
      description: "Collaborated with a team to brainstorm and develop AI-based solutions during a company hackathon.",
      type: "award",
    },
    {
      title: "Hacktoberfest Open Source Contributor (2020–2025)",
      issuer: "GitHub & Intel",
      description: "Completed Hacktoberfest open-source contribution challenge for six consecutive years. Recognized with official contributor awards and gifts.",
      type: "award",
    },
  ];

  const certificates = [
    "Alteryx Designer Core",
    "Database Foundations",
    "SQL",
    "DevOps (CI/CD)",
  ];

  const workshops = [
    {
      title: "Agile Software Process Workshop",
      description: "Attended training on Agile development methodologies including Scrum and sprint planning.",
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-6 md:py-10 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-10">
          Achievements & <span className="text-gray-500">More.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column: Awards / Hackathons */}
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white mb-8">Awards</h3>
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-gray-500 font-mono text-sm mb-4">{item.issuer}</p>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Certificates & Workshops */}
          <div className="space-y-8 md:space-y-12">
            
            {/* Certificates */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">Certificates</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workshops */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">Workshops</h3>
              {workshops.map((workshop, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{workshop.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{workshop.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
