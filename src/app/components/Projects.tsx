import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Ecommerce Store",
    description:
      "A program using databases and python to create an online bookstore.",
    technologies: ["SQlite", "Python", "VS Code"],
    image: "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?semt=ais_hybrid&w=740&q=80",
    github: "https://github.com/Stinafoot/EcommerceProgram",
    demo: "#",
  },
  {
    title: "Timed Typing Game",
    description:
      "A platform for students to discover, track, and RSVP to campus events, clubs, and activities at Mississippi State University.",
    technologies: ["C", "VS Code"],
    image: "https://img.freepik.com/free-photo/closeup-business-woman-hand-typing-laptop-keyboard_1232-2958.jpg?semt=ais_hybrid&w=740&q=80",
    github: "https://github.com/Stinafoot/Timed-Typing-Game",
    demo: "#",
  },
  {
    title: "Recipe Platform",
    description:
      "A student-friendly recipe sharing platform with budget-conscious meal planning and dorm-friendly cooking instructions.",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop",
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg 
                         transform transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl mb-3 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
