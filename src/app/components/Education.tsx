import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Cybersecurity & Operations",
    school: "Mississippi State University",
    period: "Expected May 2028",
    gpa: "3.8",
    details: [
      "President's List: Fall 2024, Spring 2025, Fall 2025",
      "Relevant Coursework: Data Structures, Database Systems, Web Development, Machine Learning",
      "Member of VICEROY scholars, Women in Cybersecurity, Cybersecurity Club and Society of Women Engineers",
    ],
  },
  {
    degree: "Master of Science in Cybersecurity & Operations",
    school: "Mississippi State University",
    period: "Expected May 2029",
    gpa: "4.0",
    details: [
      "Part of Mississippi State's advanced masters degree program called Thrive-in-Five",
      "Relevant Coursework: Cyber Operations",
    ],
  },
];

const achievements = [
  {
    title: "2025 Special Distinction in Cybersecurity",
    organization: "MSU VICEROY Scholars Cohort",
    description:
      "Recognized for outstanding performance and excellence in cybersecurity within the VICEROY program.",
  },
  {
    title: "2025 Distinction in Experimental Involvement",
    organization: "MSU VICEROY Scholars Cohort",
    description:
      "Awarded for active participation and leadership in cybersecurity-focused experiential learning initiatives.",
  },
  {
    title: "Women in Cybersecurity Scholarship",
    organization: "Women in Cybersecurity",
    description:
      "I was awarded a student scholarship to attend the 2026 National Women in Cybersecurity Conference in Washington DC.",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          Education
        </h2>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg 
                         transform transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-lg text-pink-600 dark:text-pink-400 mb-2">
                    {edu.school}
                  </p>

                  <div className="flex flex-wrap gap-3 text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>

                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <BookOpen className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl mb-6 text-center">
            Achievements & Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h4 className="text-xl mb-2">
                  {achievement.title}
                </h4>
                <p className="text-pink-600 dark:text-pink-400 mb-2">
                  {achievement.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
