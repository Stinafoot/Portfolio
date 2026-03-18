export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5622AQF6sXI9WmE2dg/feedshare-shrink_2048_1536/B56ZneDbv1KUAw-/0/1760367079775?e=1775692800&v=beta&t=uqcD7-x-X-ICNucMq_WTPg5LqK9sYWwUKV0Ai6WvMl4"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a second-year Cybersecurity student at
              Mississippi State University with a passion for
              protecting systems and solving complex security
              challenges. My journey in tech began in high
              school when I programmed my first game in advanced
              placement computer science principles, and I've
              been hooked ever since.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              When I'm not studying or coding, you'll find me
              participating in hackathons, running around
              cybersecurity conferences, or mentoring younger
              students in programming. I'm actively seeking
              internship opportunities for Summer 2027 and am
              excited to apply my skills in a real-world
              setting.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                Python
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                C++
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                C
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                Rust
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">
                SQL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
