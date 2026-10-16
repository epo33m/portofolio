const NAV_LINKS = [
  { label: "Karya", href: "#work" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

const PROJECTS = [
  {
    name: "[Proyek 1]",
    outcome: "[Hasil nyata menyusul]",
    surface: "light" as const,
  },
  {
    name: "[Proyek 2]",
    outcome: "[Hasil nyata menyusul]",
    surface: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="sticky top-0 z-50 bg-[#F2F2F7]/80 text-[#1d1d1f] backdrop-blur-xl">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-11 max-w-5xl items-center justify-between px-5 text-xs"
        >
          <a href="#top" className="font-semibold tracking-tight">
            [Nama]
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
            [Nama]
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[21px] font-semibold leading-[1.19]">
            [Peran]
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.47]">
            [Satu kalimat tentang fokus kerja. Tulis setelah konten asli
            tersedia.]
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#work"
              className="rounded-full bg-[#1E6EF4] px-[22px] py-[11px] text-[17px] text-white transition-transform focus-visible:outline-2 focus-visible:outline-[#1E6EF4] active:scale-95"
            >
              Lihat karya
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#1E6EF4] px-[22px] py-[11px] text-[17px] text-[#1E6EF4] transition-transform focus-visible:outline-2 focus-visible:outline-[#1E6EF4] active:scale-95"
            >
              Hubungi saya
            </a>
          </div>
        </section>

        <section id="work" aria-label="Karya pilihan" className="flex flex-col">
          {PROJECTS.map((project) =>
            project.surface === "light" ? (
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
                  Slot proyek. Isi dengan studi kasus nyata, bukan angka
                  buatan.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-[17px] text-[#1E6EF4] focus-visible:outline-2 focus-visible:outline-[#1E6EF4]"
                >
                  Minta studi kasus
                </a>
              </article>
            ) : (
              <article
                key={project.name}
                className="bg-[#1C1C1E] px-5 py-20 text-center text-white"
              >
                <h2 className="mx-auto max-w-3xl text-[34px] font-semibold leading-[1.1] md:text-[40px]">
                  {project.name}
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[17px] leading-[1.47] text-white">
                  {project.outcome}
                </p>
                <p className="mx-auto mt-4 max-w-xl text-[14px] text-[#cccccc]">
                  Slot proyek. Isi dengan studi kasus nyata, bukan angka
                  buatan.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-block text-[17px] text-[#0091FF] focus-visible:outline-2 focus-visible:outline-[#1E6EF4]"
                >
                  Minta studi kasus
                </a>
              </article>
            ),
          )}
        </section>

        <section id="about" className="bg-[#F2F2F7] px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[34px] font-semibold leading-[1.1] md:text-[40px]">
              Tentang
            </h2>
            <p className="mt-4 text-[17px] leading-[1.47]">
              [Bio singkat dan jujur: latar, keahlian, dan jenis kerja yang
              dicari.]
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#1C1C1E] px-5 py-20 text-center text-white"
        >
          <h2 className="mx-auto max-w-3xl text-[34px] font-semibold leading-[1.1] md:text-[40px]">
            Kontak
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.47]">
            Email: [EMAIL]
          </p>
          <p className="mx-auto mt-2 max-w-xl text-[14px] text-[#cccccc]">
            Profil: [PROFIL] (tambah tautan asli saat tersedia)
          </p>
        </section>
      </main>

      <footer className="bg-[#F2F2F7] px-5 py-16 text-[12px] leading-relaxed text-[#333333]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 md:flex-row md:justify-between">
          <p>[Nama] - Portfolio. Halaman ini memakai placeholder jujur.</p>
          <nav aria-label="Navigasi footer">
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
