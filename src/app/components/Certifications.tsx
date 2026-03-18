import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "CompTIA Security+ ce Certification",
    issuer: "CompTIA",
    date: "November 2024",
    link: "https://www.credly.com/badges/7a763acf-9200-4a87-95a5-8e376f45f4d7/public_url",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ICS2",
    date: "November 2025 ",
    link: "https://www.credly.com/badges/deaf03ff-bc26-4c92-b0e3-469dbac35115/public_url",
  },
  {
    title:
      "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
    issuer: "Microsoft",
    date: "April 2025",
    link: "https://www.credly.com/badges/3813c911-7e84-4cf4-87a4-2256f677c29c/public_url",
  },
  {
    title:
      "Microsoft Office Specialist: Word Associate (Microsoft 365 Apps)",
    issuer: "Microsoft",
    date: "April 2025",
    link: "https://www.credly.com/badges/f119c5e7-840d-45e8-9d3f-d2cd85f25865/public_url",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{cert.title}</h3>
                  <p className="text-pink-600 dark:text-pink-400 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span>Issued: {cert.date}</span>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:underline"
                  >
                    View Credential
                    <ExternalLink className="w-4 h-4" />
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