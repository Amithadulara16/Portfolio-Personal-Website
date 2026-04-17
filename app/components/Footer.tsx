import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-800/60 bg-[#020617] overflow-hidden font-[family-name:var(--font-dm-sans)]">

      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-amber-500 to-emerald-500 bg-[length:300%_100%] animate-[borderFlow_4s_linear_infinite]" />

      <div className="max-w-5xl mx-auto px-8 pt-12 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">

        {/* Brand */}
        <div>
          <h2 className="font-['Syne'] font-extrabold text-3xl tracking-tight text-white leading-none mb-3">
            devby<span className="text-blue-500 italic">amith</span>
          </h2>
          <p className="text-slate-500 text-sm italic mb-5">
            Building fast, modern & scalable web apps ⚡
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs uppercase text-slate-600 mb-4">Navigate</h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: "/", label: "Home", color: "hover:text-sky-400" },
              { href: "/about", label: "About", color: "hover:text-pink-400" },
              { href: "/projects", label: "Projects", color: "hover:text-green-400" },
              { href: "/contact", label: "Contact", color: "hover:text-orange-400" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm text-slate-400 transition hover:translate-x-1 ${item.color}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-xs uppercase text-slate-600 mb-4">Connect</h3>

          <div className="flex flex-col gap-2">
            {[
              {
                href: "https://github.com/Amithadulara16",
                label: "GitHub",
                color: "hover:text-purple-400",
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                color: "hover:text-blue-400",
              },
              {
                href: "mailto:amith@gmail.com",
                label: "Email",
                color: "hover:text-red-400",
              },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`text-sm text-slate-400 transition hover:translate-x-1 ${item.color}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-slate-600 text-sm py-6 border-t border-slate-900 mt-10">
        © 2026 devbyamith — built with ❤️ using Next.js
      </div>
    </footer>
  );
}