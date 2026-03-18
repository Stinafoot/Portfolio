import { Download, FileText, ExternalLink } from "lucide-react";

export function Resume() {
  // To use a real resume PDF:
  // 1. Add your resume.pdf file to the /public folder
  // 2. Update the resumePath below to '/resume.pdf'
  const resumePath = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Christina_Barefoot_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(resumePath, "_blank");
  };

  return (
    <section
      id="resume"
      className="py-20 px-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-pink-600 dark:text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Download my resume to learn more about my education,
            experience, skills, and projects.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl max-w-md mx-auto">
          <h3 className="text-2xl mb-2">Christina Barefoot</h3>
          <p className="text-pink-600 dark:text-pink-400 mb-6">
            Cybersecurity Student
          </p>

          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </button>

            <button
              onClick={handleView}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-pink-600 dark:border-pink-500 text-pink-600 dark:text-pink-400 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-950/30 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View Resume
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
