import { Code, Database, Wrench, Laptop } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      "JavaScript",
      "Python",
      "C++",
      "C",
      "HTML/CSS",
      "SQL",
      "Rust",
    ],
  },
  {
    title: "Cybersecurity Tools",
    icon: Laptop,
    skills: ["Wireshark", "Ghidra", "Metasploit", "KaliLinux"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git",
      "VS Code",
      "Microsoft Products",
      "Linux",
      "Virtual Machines",
      "mySQL",
    ],
  },
  {
    title: "Soft Skills",
    icon: Database,
    skills: [
      "Communication",
      "Adaptability",
      "Problem Solving",
      "Leadership",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="text-2xl">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-pink-50 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}