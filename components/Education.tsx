export default function Education() {
  const educations = [
    {
      degree: "B.Tech CSE Software Engineering",
      institution: "SRM Institute Of Science and Technology - KTR",
      duration: "2020 – 2024",
      location: "Chennai",
      score: "CGPA - 8.53",
    },
    {
      degree: "Science",
      institution: "Trident Public School",
      duration: "2019 – 2020",
      location: "Muzaffarpur",
      score: "Percentage - 70.8%",
    },
  ];

  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
          Education.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-xl text-gray-400 mb-6">{edu.institution}</h4>
              <div className="flex flex-col sm:flex-row sm:justify-between text-gray-500 font-mono text-sm mb-4">
                <span>{edu.duration}</span>
                <span>{edu.location}</span>
              </div>
              <p className="text-gray-300 font-medium inline-block bg-white/10 px-3 py-1 rounded-full">
                {edu.score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
