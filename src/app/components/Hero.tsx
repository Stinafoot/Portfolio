import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGWvAg2d57gqw/profile-displayphoto-scale_400_400/B56Z0p9FkQK0Ak-/0/1774525375961?e=1776297600&v=beta&t=h6vYWxXL4N-tj0_HAtRsml-eocorlHOueOGuvs_x71Q"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl ring-4 ring-pink-200 dark:ring-pink-800"
          />
        </div>
        <h1 className="text-5xl md:text-7xl mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Christina Barefoot
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Cybersecurity Student & Aspiring Analyst
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate about creating impactful technology and
          solving real-world problems through code. Currently
          pursuing my BS/MS in Cybersecurity & Operations while
          building projects and learning new skills.
        </p>
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-pink-600 dark:hover:border-pink-500 transition-colors"
          >
            View My Work
          </a>
        </div>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/Stinafoot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/christina-barefoot-155372279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ceb1003@msstate.edu"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
