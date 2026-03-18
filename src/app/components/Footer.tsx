import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl mb-2 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Christina Barefoot
            </p>
            <p className="text-gray-400">
              Cybersecurity Student
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Stinafoot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/christina-barefoot-155372279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ceb1003@msstate.edu"
              className="text-gray-400 hover:text-pink-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2026 Christina Barefoot. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}