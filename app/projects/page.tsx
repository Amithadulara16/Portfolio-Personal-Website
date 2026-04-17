"use client";

import { useState } from "react";
import Link from "next/link";

const allProjects = [
  {
    title: "EventGo - Event Management System",
    category: "Web App",
    desc: "A modern event management web application that allows users to browse, register, and manage events with a seamless and responsive user experience.",
    tech: ["React", "Node.js", "MongoDB"],
    emoji: "🎟️",
    color: "#6366F1",
    github: "https://github.com/Isuruzenith/EventGo",
    live: "#",
    featured: true,
  },
  {
     title: "VirtuBid - Online Auction Platform",
    category: "Web App",
    desc: "An online auction platform where users can place bids on items with dynamic listings, secure transactions, and real-time bidding features.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    emoji: "🖼️",
    color: "#EC4899",
    github: "https://github.com/dulanga1000/VirtuBid_Project",
    live: "#",
    featured: true,
  },
  {
    title: "Amiz - Personal Portfolio",
    category: "Web App",
    desc: "A modern personal portfolio website showcasing projects, skills, and contact details with smooth animations and responsive UI design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    emoji: "🧑‍💻",
    color: "#22D3EE",
    github: "https://github.com/Amithadulara16/Amiz",
    live: "#",
    featured: false,
  },
  {
   title: "Point of Sale System",
    category: "Full Stack",
    desc: "A full-stack POS system for managing sales, inventory, and transactions with a structured backend and user-friendly dashboard.",
    tech: ["Java", "MySQL", "Servlets"],
    emoji: "🧾",
    color: "#F59E0B",
    github: "https://github.com/dulanga1000/Point-of-Sale-System",
    live: "#",
    featured: true,
  },
  {
    title: "Modern To-Do App",
    category: "Mobile App",
    desc: "A modern task management application with clean UI, efficient task tracking, and user-friendly interactions to improve productivity.",
    tech: ["React", "Node.js", "MongoDB"],
    emoji: "📝",
    color: "#38BDF8",
    github: "https://github.com/Amithadulara16/Modern-To-Do-Web-App",
    live: "#",
    featured: true,
  },
  {
    title: "AgriSense - Smart Farming App",
    category: "Mobile App",
    desc: "A smart agriculture mobile application that detects plant diseases, tracks farm data, and provides real-time insights using location services.",
    tech: ["Flutter", "Firebase", "Machine Learning"],
    emoji: "🌱",
    color: "#22C55E",
    github: "https://github.com/dulanga1000/AgriSense",
    live: "#",
    featured: true,
  },
 
];

const categories = ["All", "Web App", "Full Stack", "Mobile App"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const featured = allProjects.filter((p) => p.featured);

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#0F172A" }}>
      {/* Ambient orbs */}
      <div style={{ position: "fixed", top: "30%", right: "0", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 100px", position: "relative", zIndex: 1 }}>

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
            Portfolio
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
            Things I&apos;ve Built
          </h1>
          <p style={{ color: "#64748B", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: "1.8" }}>
            A selection of projects I&apos;ve crafted with passion, purpose, and a lot of ☕
          </p>
        </div>

        {/* ── FEATURED PROJECTS ── */}
        <div style={{ marginBottom: "72px" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#94A3B8", marginBottom: "28px", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#38BDF8" }}>★</span> Featured Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {featured.map((project) => (
              <div key={project.title} className="glass-card" style={{
                padding: "36px",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Color accent */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div style={{
                    fontSize: "2.4rem",
                    background: "rgba(30,41,59,0.8)",
                    border: `1px solid ${project.color}33`,
                    borderRadius: "14px",
                    padding: "12px 16px",
                    lineHeight: 1,
                  }}>
                    {project.emoji}
                  </div>
                  <span style={{
                    background: `${project.color}18`,
                    color: project.color,
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    border: `1px solid ${project.color}33`,
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ color: "#E2E8F0", fontSize: "1.2rem", fontWeight: "800", marginBottom: "12px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#64748B", lineHeight: "1.75", fontSize: "0.9rem", marginBottom: "24px" }}>
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag" style={{ fontSize: "0.75rem" }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={project.github} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#94A3B8",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    padding: "8px 16px",
                    border: "1px solid rgba(148,163,184,0.2)",
                    borderRadius: "10px",
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#E2E8F0"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#94A3B8"; e.currentTarget.style.borderColor = "rgba(148,163,184,0.2)"; }}
                  >
                    ⌥ GitHub
                  </a>
                  <a href={project.live} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: project.color,
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    padding: "8px 16px",
                    border: `1px solid ${project.color}44`,
                    borderRadius: "10px",
                    background: `${project.color}10`,
                    transition: "all 0.2s ease",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${project.color}20`; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${project.color}10`; }}
                  >
                    ↗ Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FILTER TABS ── */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                border: activeFilter === cat ? "1px solid #38BDF8" : "1px solid rgba(56,189,248,0.15)",
                background: activeFilter === cat ? "rgba(56,189,248,0.15)" : "transparent",
                color: activeFilter === cat ? "#38BDF8" : "#64748B",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "0.85rem",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── ALL PROJECTS GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          {filtered.map((project) => (
            <div key={project.title} className="glass-card" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }} />
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{project.emoji}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <h3 style={{ color: "#E2E8F0", fontSize: "1rem", fontWeight: "700" }}>{project.title}</h3>
                <span style={{
                  background: `${project.color}18`,
                  color: project.color,
                  padding: "2px 10px",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                  marginLeft: "8px",
                }}>
                  {project.category}
                </span>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: "1.7", marginBottom: "20px" }}>{project.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {project.tech.map((t) => (
                  <span key={t} style={{
                    background: "rgba(56,189,248,0.07)",
                    border: "1px solid rgba(56,189,248,0.15)",
                    color: "#94A3B8",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: "500",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a href={project.github} style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.8rem", fontWeight: "600" }}>⌥ GitHub</a>
                <span style={{ color: "#334155" }}>|</span>
                <a href={project.live} style={{ color: project.color, textDecoration: "none", fontSize: "0.8rem", fontWeight: "600" }}>↗ Live</a>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "72px" }}>
          <p style={{ color: "#64748B", marginBottom: "20px", fontSize: "0.95rem" }}>
            Have a project in mind? Let&apos;s build something awesome together.
          </p>
          <Link href="/contact" className="neon-btn">Start a Project 🚀</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="repeat(3,1fr)"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          div[style*="repeat(3,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
