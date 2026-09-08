"use client";

import { useState } from "react";
import { FaReact, FaJava, FaDocker, FaGitAlt, FaFigma, FaLinux, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import { LuLayoutGrid, LuServer, LuTerminal, LuSparkles, LuZap, LuShield, LuTrendingUp } from "react-icons/lu";

const skillCategories = [
  {
    category: "Frontend",
    icon: <LuLayoutGrid />,
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
    icon: <LuServer />,
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
    icon: <LuTerminal />,
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
    icon: <LuSparkles />,
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
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Spring", icon: <SiSpringboot /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "Linux", icon: <FaLinux /> },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <span style={{ color: "#0f172a", fontSize: "0.88rem", fontWeight: "600" }}>{name}</span>
        <span style={{ color: "#1976d2", fontSize: "0.82rem", fontWeight: "700" }}>{level}%</span>
      </div>
      <div style={{
        height: "7px",
        background: "#f5f7fa",
        border: "1px solid #e1e8f0",
        borderRadius: "999px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${level}%`,
          background: "#1976d2",
          borderRadius: "999px",
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
    <div style={{ minHeight: "100vh", width: "100%", background: "#f5f7fa", color: "#0f172a" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px 96px" }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{
            display: "inline-block",
            color: "#1976d2",
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "8px",
          }}>
            Skills &amp; Tech
          </span>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "16px",
          }}>
            Technical Skills
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7" }}>
            Technologies and tools used to build modern applications.
          </p>
        </div>

        {/* ── TECH BADGE CLOUD ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "56px",
        }}>
          {techIcons.map((t) => (
            <div key={t.name} className="glass-card" style={{
              padding: "10px 18px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "default",
            }}>
              <span style={{ color: "#1976d2" }}>{t.icon}</span>
              <span style={{ color: "#0f172a", fontSize: "0.85rem", fontWeight: "600" }}>{t.name}</span>
            </div>
          ))}
        </div>

        {/* ── SKILL BARS ── */}
        <div className="glass-card" style={{ padding: "0", overflow: "hidden", marginBottom: "48px" }}>
          {/* Tab bar */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid #e1e8f0",
            overflowX: "auto",
            background: "#f5f7fa"
          }}>
            {skillCategories.map((cat, i) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1,
                  minWidth: "120px",
                  padding: "16px 14px",
                  background: activeTab === i ? "#ffffff" : "transparent",
                  border: "none",
                  borderBottom: activeTab === i ? "3px solid #1976d2" : "3px solid transparent",
                  color: activeTab === i ? "#1976d2" : "#64748b",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "0.85rem",
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
          <div style={{ padding: "32px 36px" }}>
            {active.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM STATS ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "16px",
        }}>
          {[
            { label: "Frontend Proficiency", value: "90%", icon: <LuZap /> },
            { label: "Backend Proficiency", value: "82%", icon: <LuShield /> },
            { label: "Learning Velocity", value: "∞", icon: <LuTrendingUp /> },
          ].map((s) => (
            <div key={s.label} className="glass-card" style={{ padding: "28px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: "8px", color: "#1976d2", display: "flex", justifyContent: "center" }}>{s.icon}</div>
              <div style={{
                fontSize: "2.2rem",
                fontWeight: "900",
                color: "#0f172a",
                marginBottom: "4px",
              }}>
                {s.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.78rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em" }}>
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
