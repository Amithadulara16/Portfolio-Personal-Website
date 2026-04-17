"use client";

import Link from "next/link";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2024 – Present",
    type: "Freelance",
    bullets: [
      "Delivered 10+ web projects for international clients using React & Spring Boot",
      "Designed and implemented scalable REST APIs consumed by mobile clients",
      "Reduced page load time by 40% through code splitting and caching strategies",
    ],
  },
  {
    role: "React Developer",
    company: "Personal Projects",
    period: "2023 – 2024",
    type: "Self-directed",
    bullets: [
      "Built multiple full-stack applications with Next.js, TypeScript, and Node.js",
      "Published open-source component libraries on GitHub",
      "Practiced CI/CD pipelines using GitHub Actions and Docker",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science – Computer Science",
    school: "University of Technology",
    period: "2021 – 2025",
    emoji: "🎓",
    note: "Focus: Software Engineering & Web Technologies",
  },
  {
    degree: "Full-Stack Web Development",
    school: "Udemy / Self-Study",
    period: "2022 – 2023",
    emoji: "📚",
    note: "React, Node.js, Java, Spring Boot",
  },
];

const coreSkills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Java / Php", level: 82 },
  { name: "Node.js / REST APIs", level: 78 },
  { name: "HTML & CSS / Tailwind", level: 95 },
  { name: "Git & DevOps", level: 85 },
];

export default function CVPage() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#0F172A" }}>
      {/* Ambient orb */}
      <div style={{ position: "fixed", top: "15%", right: "5%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px 100px", position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(56,189,248,0.1)",
            border: "1px solid rgba(56,189,248,0.25)",
            color: "#22D3EE",
            padding: "6px 18px",
            borderRadius: "999px",
            fontSize: "0.78rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "24px",
          }}>
            Curriculum Vitae
          </span>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #E2E8F0 30%, #38BDF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "20px",
          }}>
            Amith
          </h1>
          <p style={{ color: "#64748B", fontSize: "1rem", maxWidth: "480px", margin: "0 auto 28px", lineHeight: "1.8" }}>
            Full-Stack Developer · React · Next.js · Java · Open to opportunities
          </p>
          <a
            href="/UAD BARNAD_INTERNSHIP_CV (2).pdf"
            download="UAD BARNAD_INTERNSHIP_CV (2).pdf"
            className="neon-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            ⬇ Download PDF CV
          </a>
        </div>

        {/* ── PROFILE SUMMARY ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#38BDF8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>👤</span> Profile
          </h2>
          <div style={{ height: "2px", background: "linear-gradient(90deg, #38BDF8, transparent)", marginBottom: "20px", borderRadius: "999px" }} />
          <div className="glass-card" style={{ padding: "28px 32px" }}>
            <p style={{ color: "#94A3B8", lineHeight: "1.9", fontSize: "0.97rem" }}>
              Motivated full-stack developer with hands-on experience building production-ready web applications using <span style={{ color: "#38BDF8" }}>React</span>, <span style={{ color: "#38BDF8" }}>Next.js</span>, and <span style={{ color: "#38BDF8" }}>Java Spring Boot</span>. Passionate about clean architecture, performance optimization, and delivering exceptional user experiences. Quick learner with a strong foundation in computer science principles.
            </p>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#38BDF8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>💼</span> Experience
          </h2>
          <div style={{ height: "2px", background: "linear-gradient(90deg, #38BDF8, transparent)", marginBottom: "24px", borderRadius: "999px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {experiences.map((exp) => (
              <div key={exp.role} className="glass-card" style={{ padding: "28px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                  <div>
                    <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1.05rem" }}>{exp.role}</h3>
                    <div style={{ color: "#38BDF8", fontSize: "0.9rem", fontWeight: "600", marginTop: "4px" }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      background: "rgba(56,189,248,0.1)",
                      color: "#22D3EE",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      fontSize: "0.78rem",
                      fontWeight: "700",
                      marginBottom: "4px",
                    }}>
                      {exp.period}
                    </div>
                    <div style={{ color: "#475569", fontSize: "0.78rem" }}>{exp.type}</div>
                  </div>
                </div>
                <ul style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: "10px", color: "#64748B", fontSize: "0.9rem", lineHeight: "1.65" }}>
                      <span style={{ color: "#38BDF8", marginTop: "2px", flexShrink: 0 }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#38BDF8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>🎓</span> Education
          </h2>
          <div style={{ height: "2px", background: "linear-gradient(90deg, #38BDF8, transparent)", marginBottom: "24px", borderRadius: "999px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {education.map((edu) => (
              <div key={edu.degree} className="glass-card" style={{ padding: "24px 32px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{
                  fontSize: "2rem",
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.15)",
                  borderRadius: "14px",
                  padding: "12px",
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  {edu.emoji}
                </div>
                <div>
                  <h3 style={{ color: "#E2E8F0", fontWeight: "700", fontSize: "1rem", marginBottom: "4px" }}>{edu.degree}</h3>
                  <div style={{ color: "#38BDF8", fontSize: "0.88rem", fontWeight: "600", marginBottom: "4px" }}>{edu.school}</div>
                  <div style={{ color: "#475569", fontSize: "0.8rem", marginBottom: "8px" }}>{edu.period}</div>
                  <div style={{ color: "#64748B", fontSize: "0.85rem" }}>{edu.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#38BDF8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>⚡</span> Core Skills
          </h2>
          <div style={{ height: "2px", background: "linear-gradient(90deg, #38BDF8, transparent)", marginBottom: "24px", borderRadius: "999px" }} />
          <div className="glass-card" style={{ padding: "32px" }}>
            {coreSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#E2E8F0", fontSize: "0.9rem", fontWeight: "600" }}>{skill.name}</span>
                  <span style={{ color: "#38BDF8", fontSize: "0.82rem", fontWeight: "700" }}>{skill.level}%</span>
                </div>
                <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    background: "linear-gradient(90deg, #38BDF8, #22D3EE)",
                    borderRadius: "999px",
                    boxShadow: "0 0 10px rgba(56,189,248,0.5)",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT INFO ── */}
        <section className="glass-card" style={{ padding: "36px 40px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#38BDF8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>📬</span> Contact Info
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {[
              { icon: "✉️", label: "Email", value: "barnadamithadulara@gmail.com", href: "mailto:barnadamithadulara@gmail.com" },
              { icon: "🌐", label: "Portfolio", value: "devbyamith.com", href: "/" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/amith", href: "https://www.linkedin.com/in/amitha-dulara-barnad-bb82032ab/" },
              { icon: "🐙", label: "GitHub", value: "github.com/devbyamith", href: "https://github.com/Amithadulara16/" },
            ].map((item) => (
              <a key={item.label} href={item.href} style={{ textDecoration: "none", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                <div>
                  <div style={{ color: "#475569", fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</div>
                  <div style={{ color: "#38BDF8", fontSize: "0.9rem", fontWeight: "500" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div style={{ textAlign: "center", marginTop: "56px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/amith-cv.pdf" download className="neon-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            ⬇ Download PDF CV
          </a>
          <Link href="/contact" className="outline-btn">Hire Me 🚀</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
