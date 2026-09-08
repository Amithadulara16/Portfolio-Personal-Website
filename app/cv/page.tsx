"use client";

import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { LuDownload, LuBriefcase } from "react-icons/lu";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Star Garments (Pvt) Ltd - Katunayake",
    period: "July 2026 – Present",
    type: "6-Month Internship",
    bullets: [
      "Contributing to full-stack software development and web solutions for enterprise manufacturing systems",
      "Collaborating with engineering teams to develop, test, and deploy scalable internal tools and REST APIs",
      "Engaging in agile software development processes, database optimization, and code quality enhancements",
    ],
  },
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
    school: "NSBM GREEN UNIVERSITY",
    period: "2023 – 2027",
    icon: <FaGraduationCap />,
    note: "Focus: Software Engineering & Web Technologies",
  },
  {
    degree: "Full-Stack Web Development",
    school: "Udemy / Self-Study",
    period: "2024 – 2026",
    icon: <MdSchool />,
    note: "React, Node.js, Java, Spring Boot",
  },
];

const coreSkills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Java / Php", level: 60 },
  { name: "Node.js / REST APIs", level: 78 },
  { name: "HTML & CSS / Tailwind", level: 95 },
  { name: "Git & DevOps", level: 85 },
];

export default function CVPage() {
  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#f5f7fa", color: "#0f172a" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px 96px" }}>

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
            Curriculum Vitae
          </span>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "16px",
          }}>
            Amitha Dulara
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto 24px", lineHeight: "1.7" }}>
            Full-Stack Developer · React · Next.js · Java
          </p>
          <a
            href="/UAD BARNAD_INTERNSHIP_CV (2).pdf"
            download="UAD BARNAD_INTERNSHIP_CV (2).pdf"
            className="neon-btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <LuDownload /> Download PDF CV
          </a>
        </div>

        {/* ── PROFILE SUMMARY ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#1976d2", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
            Profile
          </h2>
          <div className="glass-card" style={{ padding: "28px 32px" }}>
            <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "0.95rem" }}>
              Motivated full-stack developer with hands-on experience building production-ready web applications using <span style={{ color: "#0f172a", fontWeight: "600" }}>React</span>, <span style={{ color: "#0f172a", fontWeight: "600" }}>Next.js</span>, and <span style={{ color: "#0f172a", fontWeight: "600" }}>Java Spring Boot</span>. Quick learner with a strong foundation in computer science principles.
            </p>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#1976d2", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
            Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {experiences.map((exp) => (
              <div key={exp.role} className="glass-card" style={{ padding: "24px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "8px" }}>
                  <div>
                    <h3 style={{ color: "#0f172a", fontWeight: "800", fontSize: "1rem" }}>{exp.role}</h3>
                    <div style={{ color: "#1976d2", fontSize: "0.88rem", fontWeight: "600", marginTop: "2px" }}>{exp.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      background: "#f5f7fa",
                      color: "#1976d2",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      border: "1px solid #e1e8f0",
                    }}>
                      {exp.period}
                    </div>
                  </div>
                </div>
                <ul style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {exp.bullets.map((b, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px", color: "#475569", fontSize: "0.88rem", lineHeight: "1.6" }}>
                      <span style={{ color: "#1976d2" }}>›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#1976d2", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
            Education
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {education.map((edu) => (
              <div key={edu.degree} className="glass-card" style={{ padding: "20px 24px", display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{
                  fontSize: "1.6rem",
                  background: "#f5f7fa",
                  border: "1px solid #e1e8f0",
                  borderRadius: "8px",
                  padding: "10px",
                  lineHeight: 1,
                  flexShrink: 0,
                  color: "#1976d2",
                }}>
                  {edu.icon}
                </div>
                <div>
                  <h3 style={{ color: "#0f172a", fontWeight: "700", fontSize: "0.95rem", marginBottom: "2px" }}>{edu.degree}</h3>
                  <div style={{ color: "#1976d2", fontSize: "0.85rem", fontWeight: "600" }}>{edu.school} ({edu.period})</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: "700", color: "#1976d2", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
            Core Skills
          </h2>
          <div className="glass-card" style={{ padding: "28px" }}>
            {coreSkills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
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

        <div style={{ textAlign: "center", marginTop: "48px", display: "flex", gap: "12px", justifyContent: "center" }}>
          <a href="/UAD BARNAD_INTERNSHIP_CV (2).pdf" download className="neon-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <LuDownload /> Download PDF CV
          </a>
          <Link href="/contact" className="outline-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            <LuBriefcase /> Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
}
