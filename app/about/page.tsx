"use client";

import Link from "next/link";
import Image from "next/image";
import { LuCode, LuShield, LuDatabase, LuSmartphone, LuLaptop, LuPalette, LuCpu, LuGlobe, LuRocket, LuGraduationCap, LuTarget, LuArrowRight } from "react-icons/lu";

// ── Data ────────────────────────────────────────────────────────────────────

const coreSkills = [
  { name: "React / Next.js", level: 90 },
  { name: "Java / Php ", level: 82 },
  { name: "HTML & CSS / Tailwind", level: 95 },
  { name: "MySQL / MongoDB", level: 78 },
  { name: "Node.js / REST APIs", level: 75 },
  { name: "Git & Version Control", level: 85 },
];

const whatIDo = [
  { icon: <LuCode />, title: "Frontend Dev", desc: "Pixel-perfect responsive UIs with React and Next.js." },
  { icon: <LuShield />, title: "Backend Dev", desc: "Robust APIs and server-side logic using Java and Spring." },
  { icon: <LuDatabase />, title: "Database Design", desc: "Efficient data structuring with MySQL and MongoDB." },
  { icon: <LuSmartphone />, title: "Mobile Apps", desc: "Exploring modern mobile development alongside web tech." },
];

const hobbies = [
  { icon: <LuLaptop />, label: "Coding" },
  { icon: <LuPalette />, label: "Website Designs" },
  { icon: <LuCpu />, label: "AI" },
  { icon: <LuGlobe />, label: "Web Development" },
  { icon: <LuRocket />, label: "Startups" },
];

// ── Shared style helpers ─────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e1e8f0",
  borderRadius: "14px",
  boxShadow: "0 4px 16px -2px rgba(15, 23, 42, 0.04)",
};

const sectionLabel: React.CSSProperties = {
  display: "inline-block",
  color: "#1976d2",
  fontSize: "0.75rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "8px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "1.6rem",
  fontWeight: "800",
  color: "#0f172a",
  marginBottom: "6px",
  letterSpacing: "-0.02em",
};

const divider: React.CSSProperties = {
  height: "3px",
  width: "48px",
  background: "#1976d2",
  borderRadius: "999px",
  marginBottom: "24px",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <span style={sectionLabel}>{label}</span>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={divider} />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#f5f7fa", color: "#0f172a" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px 96px" }}>

        {/* ══ HERO ══ */}
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "64px" }}>

          {/* Avatar */}
          <div style={{ position: "relative", width: "110px", height: "110px", borderRadius: "16px", overflow: "hidden", border: "2px solid #1976d2", marginBottom: "20px", boxShadow: "0 4px 14px rgba(25, 118, 210, 0.2)" }}>
            <Image
              src="/IMG_3738.png"
              alt="Amitha Dulara"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <span style={sectionLabel}>About Me</span>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "8px",
          }}>
            Amitha Dulara
          </h1>

          <p style={{ color: "#1976d2", fontSize: "0.95rem", marginBottom: "16px", fontWeight: "600" }}>
            Software Engineer Intern @ Star Garments (Pvt) Ltd · CS Student @ NSBM
          </p>

          <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.8", maxWidth: "540px", marginBottom: "24px" }}>
            I&apos;m Amitha Dulara, a Software Engineer Intern at <span style={{ color: "#0f172a", fontWeight: "600" }}>Star Garments (Pvt) Ltd - Katunayake</span> and 3rd-year CS student passionate about building modern{" "}
            <span style={{ color: "#0f172a", fontWeight: "600" }}>web and mobile applications</span>.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" className="neon-btn">
              Get In Touch
            </Link>
            <Link href="/cv" className="outline-btn">
              View CV
            </Link>
          </div>
        </section>

        {/* ══ PROFILE SUMMARY ══ */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeader label="Profile" title="Who I Am" />
          <div style={{ ...glassCard, padding: "28px 32px" }}>
            <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "0.95rem" }}>
              Motivated software engineer intern with hands-on experience building production-grade web applications using{" "}
              <span style={{ color: "#0f172a", fontWeight: "600" }}>React</span>,{" "}
              <span style={{ color: "#0f172a", fontWeight: "600" }}>Next.js</span>, and{" "}
              <span style={{ color: "#0f172a", fontWeight: "600" }}>Java Spring Boot</span>. Currently undergoing a 6-month Software Engineering Internship at <span style={{ color: "#1976d2", fontWeight: "600" }}>Star Garments (Pvt) Ltd - Katunayake</span> (July 2026 – Present), alongside 3rd-year CS studies at <span style={{ color: "#1976d2", fontWeight: "600" }}>NSBM Green University</span>.
            </p>
          </div>
        </section>

        {/* ══ WHAT I DO ══ */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeader label="What I Do" title="My Focus Areas" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {whatIDo.map((item) => (
              <div key={item.title} className="glass-card" style={{ padding: "24px" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: "#f5f7fa", border: "1px solid #e1e8f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem", marginBottom: "14px", color: "#1976d2",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#0f172a", fontWeight: "800", fontSize: "0.9rem", marginBottom: "6px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: "0.82rem", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SKILLS ══ */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeader label="Skills" title="Technical Proficiency" />
          <div style={{ ...glassCard, padding: "28px 32px" }}>
            {coreSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#0f172a", fontSize: "0.88rem", fontWeight: "600" }}>{skill.name}</span>
                  <span style={{ color: "#1976d2", fontSize: "0.8rem", fontWeight: "700" }}>{skill.level}%</span>
                </div>
                <div style={{ height: "7px", background: "#f5f7fa", borderRadius: "999px", overflow: "hidden", border: "1px solid #e1e8f0" }}>
                  <div style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    background: "#1976d2",
                    borderRadius: "999px",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ EDUCATION ══ */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeader label="Education" title="Academic Background" />
          <div className="glass-card" style={{ padding: "24px 28px", display: "flex", gap: "18px", alignItems: "center" }}>
            <div style={{
              fontSize: "1.4rem",
              background: "#f5f7fa",
              border: "1px solid #e1e8f0",
              borderRadius: "10px",
              padding: "10px",
              lineHeight: 1,
              flexShrink: 0,
              color: "#1976d2",
            }}>
              <LuGraduationCap />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: "#0f172a", fontWeight: "800", fontSize: "1rem", marginBottom: "4px" }}>
                BSc in Computer Science
              </h3>
              <div style={{ color: "#1976d2", fontSize: "0.88rem", fontWeight: "600", marginBottom: "4px" }}>
                NSBM Green University
              </div>
              <p style={{ color: "#475569", fontSize: "0.85rem" }}>
                Currently in <span style={{ color: "#0f172a", fontWeight: "600" }}>3rd Year</span>, focusing on software engineering and web technologies.
              </p>
            </div>
          </div>
        </section>

        {/* ══ HOBBIES ══ */}
        <section style={{ marginBottom: "48px" }}>
          <SectionHeader label="Hobbies" title="Interests" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {hobbies.map((h) => (
              <div key={h.label} className="glass-card" style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "10px 18px", cursor: "default",
              }}>
                <span style={{ color: "#1976d2" }}>{h.icon}</span>
                <span style={{ color: "#0f172a", fontSize: "0.85rem", fontWeight: "600" }}>{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{
          ...glassCard,
          padding: "36px 40px",
          textAlign: "center",
        }}>
          <h3 style={{ color: "#0f172a", fontWeight: "800", fontSize: "1.15rem", marginBottom: "8px" }}>
            Let&apos;s build something together
          </h3>
          <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "20px" }}>
            Open to internships, collaborations, and exciting projects.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <Link href="/contact" className="neon-btn">
              Contact Me
            </Link>
            <Link href="/projects" className="outline-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              See Projects <LuArrowRight />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}