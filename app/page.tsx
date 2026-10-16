import Image from "next/image";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    name: "[Project 1]",
    outcome: "[Real outcome pending]",
    surface: "parchment" as const,
  },
  {
    name: "[Project 2]",
    outcome: "[Real outcome pending]",
    surface: "white" as const,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-50 bg-[#F2F2F7]/80 text-[#1d1d1f] backdrop-blur-xl">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-11 max-w-5xl items-center justify-between px-5 text-xs"
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Rivoldy Makatita - back to top"
          >
            <Image
              src="/brand/rapm-mark.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5"
            />
            Rivoldy Makatita
          </a>
          <ul className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#1d1d1f]/70 transition-colors hover:text-[#1d1d1f] focus-visible:outline-2 focus-visible:outline-[#1E6EF4]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        <section className="bg-white px-5 py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-[28px] font-semibold leading-[1.07] tracking-[-0.28px] min-[420px]:text-[34px] md:text-[40px] min-[1069px]:text-[56px]">
            Rivoldy Makatita
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[21px] font-semibold leading-[1.19]">
            Software Developer
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.47]">
            Building what's next.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#work"
              className="rounded-full bg-[#1E6EF4] px-[22px] py-[11px] text-[17px] text-white transition-transform focus-visible:outline-2 focus-visible:outline-[#1E6EF4] active:scale-95"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#1E6EF4] px-[22px] py-[11px] text-[17px] text-[#1E6EF4] transition-transform focus-visible:outline-2 focus-visible:outline-[#1E6EF4] active:scale-95"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="work" aria-label="Selected work" className="flex flex-col">
          {PROJECTS.map((project) =>
            project.surface === "parchment" ? (
              <article
                key={project.name}
                className="bg-[#F2F2F7] px-5 py-20 text-center"
              >
                <h2 className="mx-auto max-w-3xl text-[34px] font-semibold leading-[1.1] md:text-[40px]">
                  {project.name}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[17px] leading-[1.47]">
                  {project.outcome}
                </p>
                <p className="mx-auto mt-4 max-w-xl text-[14px] text-[#6C6C70]">
                  Project slot. Fill with a real case study, not made-up
                  numbers.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-[17px] text-[#1E6EF4] focus-visible:outline-2 focus-visible:outline-[#1E6EF4]"
                >
                  Request case study
                </a>
              </article>
            ) : (
              <article
                key={project.name}
                className="bg-white px-5 py-20 text-center"
              >
                <h2 className="mx-auto max-w-3xl text-[34px] font-semibold leading-[1.1] md:text-[40px]">
                  {project.name}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[17px] leading-[1.47]">
                  {project.outcome}
                </p>
                <p className="mx-auto mt-4 max-w-xl text-[14px] text-[#6C6C70]">
                  Project slot. Fill with a real case study, not made-up
                  numbers.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-[17px] text-[#1E6EF4] focus-visible:outline-2 focus-visible:outline-[#1E6EF4]"
                >
                  Request case study
                </a>
              </article>
            ),
          )}
        </section>

        <section id="about" className="bg-[#F2F2F7] px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[34px] font-semibold leading-[1.1] md:text-[40px]">
              About
            </h2>
            <p className="mt-4 text-[17px] leading-[1.47]">
              [Short honest bio: background, skills, and the kind of work
              sought.]
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="bg-white px-5 py-20 text-center"
        >
          <h2 className="mx-auto max-w-3xl text-[34px] font-semibold leading-[1.1] md:text-[40px]">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.47]">
            Email: [EMAIL]
          </p>
          <p className="mx-auto mt-2 max-w-xl text-[14px] text-[#6C6C70]">
            Profiles: [PROFILES] (add real links when available)
          </p>
        </section>
      </main>

      <footer className="bg-[#F2F2F7] px-5 py-16 text-[12px] leading-relaxed text-[#333333]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <Image
              src="/brand/rapm-wordmark-dark.svg"
              alt="RAPM - Rivoldy Adrian Prawira Makatita"
              width={160}
              height={40}
              className="h-8 w-auto"
            />
            <p className="mt-4">
              Rivoldy Makatita - Portfolio. This page uses honest placeholders.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#1E6EF4] focus-visible:outline-2 focus-visible:outline-[#1E6EF4]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
