import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-950 md:px-12 lg:px-24">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#" className="text-lg font-semibold">
          Abiodun Adeleke
        </a>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="transition hover:text-blue-600">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-blue-600">
            Projects
          </a>

          <a
            href="https://github.com/Abiodun2412"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Computer Science Student
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I&apos;m <span className="text-blue-600">Abiodun Adeleke</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
          I build and test practical software across web development, backend
          systems, and data-focused applications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium transition hover:border-gray-400 hover:bg-gray-50"
          >
            View CV
          </a>

          <a
            href="https://github.com/Abiodun2412"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium transition hover:border-gray-400 hover:bg-gray-50"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl py-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          About Me
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Building practical software and learning by doing.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          I&apos;m a Computer Science student at Manchester Metropolitan
          University, graduating in 2027. I&apos;m interested in software
          development, quality assurance, and data-focused technology roles, and
          I enjoy building, testing, and improving practical software.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl py-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies and areas I&apos;ve worked with.
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Java",
            "Python",
            "C#",
            "TypeScript",
            "JavaScript",
            "Next.js",
            "React",
            "Spring Boot",
            "Flask",
            "SQL",
            "Git",
            "REST APIs",
            "Testing",
            "Data Structures & Algorithms",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl py-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Selected Work
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <Image
              src="/projects/bible-map.png"
              alt="Interactive Bible Map interface"
              width={1200}
              height={700}
              className="mb-6 h-56 w-full rounded-xl border border-gray-200 object-cover"
            />
            <h3 className="text-2xl font-semibold">Interactive Bible Map</h3>

            <p className="mt-3 leading-7 text-gray-600">
              An interactive web application for exploring biblical locations,
              events, people, journeys, and historical periods.
            </p>

            <p className="mt-4 text-sm font-medium">
              Next.js · TypeScript · Tailwind CSS · Leaflet
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://interactive-bible-map-ashen.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Abiodun2412/interactive-bible-map"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                GitHub
              </a>
            </div>
          </article>

          <article className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <Image
              src="/projects/matillion-api.png"
              alt="Matillion technical test API response in Swagger UI"
              width={1200}
              height={700}
              className="mb-6 h-48 w-full rounded-xl border border-gray-200 object-contain bg-gray-50 md:h-56"
            />
            <h3 className="text-2xl font-semibold">Matillion Technical Test</h3>

            <p className="mt-3 leading-7 text-gray-600">
              A Java Spring Boot REST API for CSV ingestion, analysis, data
              profiling, persistence, and automated testing.
            </p>

            <p className="mt-4 text-sm font-medium">
              Java · Spring Boot · Gradle · H2 · JUnit
            </p>

            <div className="mt-6">
              <a
                href="https://github.com/Abiodun2412/matillion-tech-test-2025"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                GitHub
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl py-20">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
          Contact
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s connect.</h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I&apos;m currently preparing for graduate opportunities across
          software development, quality assurance, and data-focused technology
          roles. Feel free to get in touch or take a look at my work.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:abiodunadeleke@hotmail.co.uk"
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Abiodun2412"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium transition hover:border-gray-400 hover:bg-gray-50"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abiodun-adeleke-b29602337/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-gray-300 px-5 py-3 font-medium transition hover:border-gray-400 hover:bg-gray-50"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Or email me directly at{" "}
          <a
            href="mailto:abiodunadeleke@hotmail.co.uk"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            abiodunadeleke@hotmail.co.uk
          </a>
        </p>
      </section>

      <footer className="mx-auto max-w-6xl border-t border-gray-200 py-8 text-sm text-gray-500">
        © 2026 Abiodun Adeleke
      </footer>
    </main>
  );
}
