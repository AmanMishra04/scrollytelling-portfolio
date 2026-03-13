export default function Experience() {
  const experiences = [
    {
      role: "Associate System Engineer",
      company: "Tata Consultancy Services",
      duration: "05/2025 – Present",
      location: "Pune",
      responsibilities: [
        "Worked in a production and operations environment to ensure system performance and service stability.",
        "Collaborated with cross-functional teams to troubleshoot and resolve technical incidents.",
        "Prepared reports and documentation to support operational monitoring and decision making.",
        "Assisted in improving workflows through data analysis and process optimization.",
      ],
    },
    {
      role: "Internship - Business Developer Associate",
      company: "Edu-versity",
      duration: "07/2024 – 01/2025",
      location: "Bangalore",
      responsibilities: [
        "Conducted market research and competitor analysis to identify growth opportunities.",
        "Assisted in preparing business reports and presentations for strategic decision-making.",
        "Supported client communication and maintained records of business development activities.",
      ],
    },
    {
      role: "Internship - Alteryx Data Analyst Intern",
      company: "AICTE - Alteryx",
      duration: "12/2023 – 02/2024",
      location: "Remote",
      responsibilities: [
        "Used Alteryx to clean and prepare data for analysis.",
        "Built simple workflows to automate data processing tasks.",
        "Analyzed datasets to identify trends and patterns.",
      ],
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
          Work <span className="text-gray-500">Experience.</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="mb-4 md:mb-0 col-span-1 text-gray-500 font-mono text-sm">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
                <div className="col-span-3">
                  <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                  <h4 className="text-xl text-gray-400 mb-6">{exp.company}</h4>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
