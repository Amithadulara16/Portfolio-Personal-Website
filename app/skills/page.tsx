"use client";

import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "#38BDF8",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#22D3EE",
    skills: [
      { name: "Java", level: 85 },
      { name: "Php", level: 60 },
      { name: "Node.js", level: 90 },
      { name: "REST APIs", level: 60 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "#818CF8",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Linux CLI", level: 72 },
    ],
  },
  {
    category: "Design & Other",
    icon: "✨",
    color: "#F472B6",
    skills: [
      { name: "Figma", level: 70 },
      { name: "UI/UX Principles", level: 78 },
      { name: "Problem Solving", level: 92 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Communication", level: 88 },
    ],
  },
];

const techIcons = [
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "TypeScript", emoji: "TS" },
  { name: "Java", emoji: "☕" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Spring", emoji: "🌱" },
  { name: "Docker", emoji: "🐳" },
  { name: "Git", emoji: "🌿" },
  { name: "SQL", emoji: "🗄️" },
  { name: "Tailwind", emoji: "💨" },
  { name: "Figma", emoji: "🎨" },
  { name: "Linux", emoji: "🐧" },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ color: "#E2E8F0", fontSize: "0.9rem", fontWeight: "600" }}>{name}</span>
        <span style={{ color, fontSize: "0.82rem", fontWeight: "700" }}>{level}%</span>
      </div>
      <div style={{
        height: "6px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "999px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          borderRadius: "999px",
          boxShadow: `0 0 10px ${color}66`,
          transition: "width 1s ease",
        }} />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const active = skillCategories[activeTab];

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#0F172A" }}>
      {/* Ambient orbs */}
      <div style={{ position: "fixed", top: "20%", left: "0", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "15%", right: "0", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px 100px", position: "relative", zIndex: 1 }}>

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
            Skills &amp; Technologies
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
            My Technical Arsenal
          </h1>
          <p style={{ color: "#64748B", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: "1.8" }}>
            A curated set of technologies I use to build fast, scalable, and beautiful products.
          </p>
        </div>

        {/* ── TECH BADGE CLOUD ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "72px",
        }}>
          {techIcons.map((t) => (
            <div key={t.name} style={{
              background: "rgba(30,41,59,0.7)",
              border: "1px solid rgba(56,189,248,0.15)",
              borderRadius: "14px",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "default",
              transition: "all 0.25s ease",
              backdropFilter: "blur(10px)",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(56,189,248,0.15)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(56,189,248,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{t.emoji}</span>
              <span style={{ color: "#E2E8F0", fontSize: "0.88rem", fontWeight: "600" }}>{t.name}</span>
            </div>
          ))}
        </div>

        {/* ── SKILL BARS ── */}
        <div className="glass-card" style={{ padding: "0", overflow: "hidden", marginBottom: "60px" }}>
          {/* Tab bar */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid rgba(56,189,248,0.1)",
            overflowX: "auto",
          }}>
            {skillCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1,
                  minWidth: "120px",
                  padding: "18px 16px",
                  background: activeTab === i ? "rgba(56,189,248,0.08)" : "transparent",
                  border: "none",
                  borderBottom: activeTab === i ? `2px solid ${cat.color}` : "2px solid transparent",
                  color: activeTab === i ? cat.color : "#64748B",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "0.88rem",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Skill bars content */}
          <div style={{ padding: "36px 40px" }}>
            {active.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} color={active.color} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM STATS ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}>
          {[
            { label: "Frontend Proficiency", value: "90%", icon: "⚡" },
            { label: "Backend Proficiency", value: "82%", icon: "🛡️" },
            { label: "Learning Velocity", value: "∞", icon: "🚀" },
          ].map((s) => (
            <div key={s.label} className="glass-card" style={{ padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{s.icon}</div>
              <div style={{
                fontSize: "2.2rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "8px",
              }}>
                {s.value}
              </div>
              <div style={{ color: "#64748B", fontSize: "0.83rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
