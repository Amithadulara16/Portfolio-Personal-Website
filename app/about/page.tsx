"use client";

import Link from "next/link";

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
  { icon: "⚡", title: "Frontend Dev", desc: "Pixel-perfect responsive UIs with React and Next.js." },
  { icon: "🛡️", title: "Backend Dev", desc: "Robust APIs and server-side logic using Java and Spring." },
  { icon: "🗄️", title: "Database Design", desc: "Efficient data structuring with MySQL and MongoDB." },
  { icon: "📱", title: "Mobile Apps", desc: "Exploring modern mobile development alongside web tech." },
];

const hobbies = [
  { icon: "💻", label: "Coding" },
  { icon: "🎨", label: "Website Designs" },
  { icon: "🤖", label: "AI" },
  { icon: "🌐", label: "Web Development" },
  { icon: "🚀", label: "Startups" },
];

const goalTags = ["Full-Stack Mastery", "UI/UX Design", "Industry Internship", "Open Source"];

// ── Shared style helpers ─────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: "rgba(30,41,59,0.7)",
  border: "1px solid rgba(56,189,248,0.12)",
  borderRadius: "16px",
  backdropFilter: "blur(8px)",
};

const sectionLabel: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(56,189,248,0.1)",
  border: "1px solid rgba(56,189,248,0.25)",
  color: "#22D3EE",
  padding: "5px 16px",
  borderRadius: "999px",
  fontSize: "0.75rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  marginBottom: "12px",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "1.65rem",
  fontWeight: "900",
  background: "linear-gradient(135deg, #E2E8F0 40%, #38BDF8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: "6px",
  letterSpacing: "-0.02em",
};

const divider: React.CSSProperties = {
  height: "2px",
  width: "56px",
  background: "linear-gradient(90deg, #38BDF8, #22D3EE)",
  borderRadius: "999px",
  marginBottom: "28px",
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
    <div style={{ minHeight: "100vh", width: "100%", background: "#0F172A", color: "#E2E8F0" }}>

      {/* Ambient orbs */}
      <div style={{ position: "fixed", top: "10%", right: "5%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "10%", left: "5%", width: "280px", height: "280px", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "72px 24px 100px", position: "relative", zIndex: 1 }}>

        {/* ══ HERO ══ */}
        <section style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "72px" }}>

          {/* Avatar */}
          <div style={{ position: "relative", marginBottom: "28px" }}>
            <div style={{
              width: "120px", height: "120px", borderRadius: "50%",
              background: "linear-gradient(135deg, #0c3050, #083040)",
              border: "2px solid rgba(56,189,248,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "3rem", margin: "0 auto",
            }}>
              👨‍💻
            </div>
            {/* Status badge */}
            <div style={{
              position: "absolute", bottom: "-10px", left: "50%", transform: "translateX(-50%)",
              display: "flex", alignItems: "center", gap: "6px",
              padding: "4px 14px", borderRadius: "999px",
              background: "#1E293B", border: "1px solid rgba(56,189,248,0.3)",
              whiteSpace: "nowrap", fontSize: "0.72rem", fontWeight: "700", color: "#7DD3FC",
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#34D399", display: "inline-block" }} />
              Open to Internships
            </div>
          </div>

          <span style={{ ...sectionLabel, marginTop: "16px" }}>About Me</span>

          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #E2E8F0 30%, #38BDF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "10px",
          }}>
            Amitha Dulara
          </h1>

          <p style={{ color: "#64748B", fontSize: "0.95rem", marginBottom: "18px", fontWeight: "500" }}>
            Undergraduate CS Student · Full-Stack Developer
          </p>

          <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.85", maxWidth: "540px", marginBottom: "28px" }}>
            I&apos;m Amitha Dulara, an undergraduate Computer Science student passionate about building modern{" "}
            <span style={{ color: "#7DD3FC", fontWeight: "600" }}>web and mobile applications</span>. I enjoy
            solving real-world problems through technology and continuously improving my skills in software development.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{
              background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
              color: "#0F172A", fontWeight: "800", fontSize: "0.85rem",
              padding: "10px 24px", borderRadius: "12px", textDecoration: "none",
              display: "inline-block",
            }}>
              💬 Get In Touch
            </Link>
            <Link href="/cv" style={{
              border: "1px solid rgba(56,189,248,0.4)", color: "#7DD3FC",
              fontWeight: "700", fontSize: "0.85rem", padding: "10px 24px",
              borderRadius: "12px", background: "transparent", textDecoration: "none",
              display: "inline-block",
            }}>
              📄 View CV
            </Link>
          </div>
        </section>

        {/* ══ PROFILE SUMMARY ══ */}
        <section style={{ marginBottom: "56px" }}>
          <SectionHeader label="Profile" title="Who I Am" />
          <div style={{ ...glassCard, padding: "28px 32px" }}>
            <p style={{ color: "#94A3B8", lineHeight: "1.9", fontSize: "0.97rem" }}>
              Motivated full-stack developer with hands-on experience building modern web applications using{" "}
              <span style={{ color: "#38BDF8" }}>React</span>,{" "}
              <span style={{ color: "#38BDF8" }}>Next.js</span>, and{" "}
              <span style={{ color: "#38BDF8" }}>Java Spring Boot</span>. Passionate about clean architecture,
              performance optimization, and delivering exceptional user experiences. Currently a 3rd year student
              at <span style={{ color: "#38BDF8" }}>NSBM Green University</span>, with a strong foundation in
              computer science principles.
            </p>
          </div>
        </section>

        {/* ══ WHAT I DO ══ */}
        <section style={{ marginBottom: "56px" }}>
          <SectionHeader label="What I Do" title="My Focus Areas" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {whatIDo.map((item) => (
              <div key={item.title} style={{ ...glassCard, padding: "24px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", marginBottom: "14px",
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "0.9rem", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: "1.65" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ SKILLS ══ */}
        <section style={{ marginBottom: "56px" }}>
          <SectionHeader label="Skills" title="Technical Skills" />
          <div style={{ ...glassCard, padding: "32px" }}>
            {coreSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: "#E2E8F0", fontSize: "0.88rem", fontWeight: "600" }}>{skill.name}</span>
                  <span style={{ color: "#38BDF8", fontSize: "0.8rem", fontWeight: "700" }}>{skill.level}%</span>
                </div>
                <div style={{ height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
                  <div style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    background: "linear-gradient(90deg, #38BDF8, #22D3EE)",
                    borderRadius: "999px",
                    boxShadow: "0 0 10px rgba(56,189,248,0.4)",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ EDUCATION ══ */}
        <section style={{ marginBottom: "56px" }}>
          <SectionHeader label="Education" title="Academic Background" />
          <div style={{ position: "relative", paddingLeft: "28px" }}>
            {/* Timeline rail */}
            <div style={{
              position: "absolute", left: "6px", top: 0, bottom: 0, width: "2px",
              background: "linear-gradient(to bottom, #38BDF8, rgba(56,189,248,0.1))",
              borderRadius: "999px",
            }} />

            <div style={{ position: "relative" }}>
              {/* Timeline dot */}
              <div style={{
                position: "absolute", left: "-23px", top: "24px",
                width: "14px", height: "14px", borderRadius: "50%",
                background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                boxShadow: "0 0 14px rgba(56,189,248,0.6)",
                border: "3px solid #0F172A",
              }} />

              <div style={{ ...glassCard, padding: "24px 28px", display: "flex", gap: "18px", alignItems: "flex-start" }}>
                {/* Icon */}
                <div style={{
                  fontSize: "1.8rem",
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.15)",
                  borderRadius: "12px",
                  padding: "10px",
                  lineHeight: 1,
                  flexShrink: 0,
                }}>
                  🎓
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
                    <div>
                      <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1rem", marginBottom: "4px" }}>
                        BSc in Computer Science
                      </h3>
                      <div style={{ color: "#38BDF8", fontSize: "0.88rem", fontWeight: "600", marginBottom: "6px" }}>
                        NSBM Green University
                      </div>
                      <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: "1.65" }}>
                        Currently in{" "}
                        <span style={{ color: "#22D3EE", fontWeight: "600" }}>3rd Year</span>, focusing on
                        software engineering, web technologies, and modern development practices.
                      </p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <span style={{
                        background: "rgba(56,189,248,0.1)",
                        color: "#22D3EE",
                        border: "1px solid rgba(56,189,248,0.2)",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                        fontWeight: "700",
                        display: "inline-block",
                      }}>
                        In Progress
                      </span>
                      <div style={{ color: "#475569", fontSize: "0.75rem", marginTop: "6px" }}>3rd Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ GOALS ══ */}
        <section style={{ marginBottom: "56px" }}>
          <SectionHeader label="Goals" title="What I'm Working Towards" />
          <div style={{ ...glassCard, padding: "32px 36px", display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              width: "56px", height: "56px", flexShrink: 0, borderRadius: "16px",
              background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.8rem", boxShadow: "0 0 24px rgba(56,189,248,0.3)",
            }}>
              🎯
            </div>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1.05rem", marginBottom: "10px" }}>
                Become a Modern Full-Stack Developer
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: "1.85", marginBottom: "16px" }}>
                My goal is to become a modern full-stack developer with strong{" "}
                <span style={{ color: "#7DD3FC", fontWeight: "600" }}>UI/UX design skills</span>. I am
                currently looking for{" "}
                <span style={{ color: "#22D3EE", fontWeight: "600" }}>internship opportunities</span> to gain
                industry experience and work on real-world projects that make an impact.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {goalTags.map((tag) => (
                  <span key={tag} style={{
                    background: "rgba(56,189,248,0.1)",
                    color: "#7DD3FC",
                    border: "1px solid rgba(56,189,248,0.18)",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: "600",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ HOBBIES ══ */}
        <section style={{ marginBottom: "56px" }}>
          <SectionHeader label="Hobbies & Interests" title="Beyond the Code" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {hobbies.map((h) => (
              <div key={h.label} style={{
                ...glassCard,
                display: "flex", alignItems: "center", gap: "10px",
                padding: "12px 20px", cursor: "default",
              }}>
                <span style={{ fontSize: "1.2rem" }}>{h.icon}</span>
                <span style={{ color: "#E2E8F0", fontSize: "0.88rem", fontWeight: "600" }}>{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section style={{
          ...glassCard,
          padding: "36px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}>
          <div>
            <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1.2rem", marginBottom: "8px" }}>
              Let&apos;s build something together 🚀
            </h3>
            <p style={{ color: "#64748B", fontSize: "0.88rem" }}>
              Open to internships, collaborations, and exciting projects.
            </p>
          </div>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{
              background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
              color: "#0F172A", fontWeight: "800", fontSize: "0.85rem",
              padding: "10px 24px", borderRadius: "12px", textDecoration: "none",
            }}>
              Contact Me
            </Link>
            <Link href="/projects" style={{
              border: "1px solid rgba(56,189,248,0.4)", color: "#7DD3FC",
              fontWeight: "700", fontSize: "0.85rem", padding: "10px 24px",
              borderRadius: "12px", background: "transparent", textDecoration: "none",
            }}>
              See Projects
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}