"use client";

import { useState } from "react";
import Link from "next/link";
import { LuCalendar, LuImage, LuCode, LuReceipt, LuCheck, LuLeaf, LuArrowRight, LuExternalLink, LuGithub, LuShoppingBag } from "react-icons/lu";

const allProjects = [
  {
    title: "PaperCraft - Stationery Shop",
    category: "Full Stack",
    desc: "A full-stack e-commerce web application for school and office stationery. Features product catalog, category filters, cart, COD & Card checkout with 3D Secure OTP modal, stock auto-deduction, reviews, order tracking, and a role-gated Admin Control Center.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose"],
    icon: <LuShoppingBag />,
    github: "https://github.com/Amithadulara16/PaperCraft-Stationery-Shop.git",
    live: "https://github.com/Amithadulara16/PaperCraft-Stationery-Shop.git",
    featured: true,
  },
  {
    title: "EventGo - Event Management System",
    category: "Web App",
    desc: "A modern event management web application that allows users to browse, register, and manage events with a seamless and responsive user experience.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <LuCalendar />,
    github: "https://github.com/Isuruzenith/EventGo",
    live: "#",
    featured: true,
  },
  {
     title: "VirtuBid - Online Auction Platform",
    category: "Web App",
    desc: "An online auction platform where users can place bids on items with dynamic listings, secure transactions, and real-time bidding features.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    icon: <LuImage />,
    github: "https://github.com/dulanga1000/VirtuBid_Project",
    live: "#",
    featured: true,
  },
  {
    title: "Amiz - Personal Portfolio",
    category: "Web App",
    desc: "A modern personal portfolio website showcasing projects, skills, and contact details with smooth animations and responsive UI design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: <LuCode />,
    github: "https://github.com/Amithadulara16/Amiz",
    live: "#",
    featured: false,
  },
  {
    title: "Point of Sale System",
    category: "Full Stack",
    desc: "A full-stack POS system for managing sales, inventory, and transactions with a structured backend and user-friendly dashboard.",
    tech: ["Java", "MySQL", "Servlets"],
    icon: <LuReceipt />,
    github: "https://github.com/dulanga1000/Point-of-Sale-System",
    live: "#",
    featured: true,
  },
  {
    title: "Modern To-Do App",
    category: "Mobile App",
    desc: "A modern task management application with clean UI, efficient task tracking, and user-friendly interactions to improve productivity.",
    tech: ["React", "Node.js", "MongoDB"],
    icon: <LuCheck />,
    github: "https://github.com/Amithadulara16/Modern-To-Do-Web-App",
    live: "#",
    featured: true,
  },
  {
    title: "AgriSense - Smart Farming App",
    category: "Mobile App",
    desc: "A smart agriculture mobile application that detects plant diseases, tracks farm data, and provides real-time insights using location services.",
    tech: ["Flutter", "Firebase", "Machine Learning"],
    icon: <LuLeaf />,
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
            Portfolio
          </span>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "16px",
          }}>
            Things I&apos;ve Built
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: "480px", margin: "0 auto", lineHeight: "1.7" }}>
            A selection of projects crafted with purpose and clean code.
          </p>
        </div>

        {/* ── FEATURED PROJECTS ── */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1976d2", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Featured Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {featured.map((project) => (
              <div key={project.title} className="glass-card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ fontSize: "1.8rem", color: "#1976d2" }}>
                    {project.icon}
                  </div>
                  <span style={{
                    background: "#f5f7fa",
                    color: "#1976d2",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.72rem",
                    fontWeight: "600",
                    border: "1px solid #e1e8f0",
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ color: "#0f172a", fontSize: "1.1rem", fontWeight: "800", marginBottom: "10px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#475569", lineHeight: "1.7", fontSize: "0.88rem", marginBottom: "20px" }}>
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag" style={{ fontSize: "0.75rem", padding: "3px 10px" }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#475569",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    padding: "7px 14px",
                    border: "1px solid #e1e8f0",
                    borderRadius: "8px",
                    background: "#f5f7fa",
                  }}>
                    <LuGithub /> GitHub
                  </a>
                  <a href={project.live} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "#ffffff",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                    fontWeight: "600",
                    padding: "7px 14px",
                    border: "1px solid #1976d2",
                    borderRadius: "8px",
                    background: "#1976d2",
                    boxShadow: "0 2px 8px rgba(25, 118, 210, 0.2)"
                  }}>
                    <LuExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FILTER TABS ── */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: activeFilter === cat ? "1px solid #1976d2" : "1px solid #e1e8f0",
                background: activeFilter === cat ? "#1976d2" : "#ffffff",
                color: activeFilter === cat ? "#ffffff" : "#475569",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "0.82rem",
                transition: "all 0.2s ease",
                boxShadow: activeFilter === cat ? "0 4px 12px rgba(25, 118, 210, 0.25)" : "none"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── ALL PROJECTS GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px" }}>
          {filtered.map((project) => (
            <div key={project.title} className="glass-card" style={{ padding: "24px" }}>
              <div style={{ fontSize: "1.6rem", color: "#1976d2", marginBottom: "12px" }}>{project.icon}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <h3 style={{ color: "#0f172a", fontSize: "0.98rem", fontWeight: "700" }}>{project.title}</h3>
              </div>
              <p style={{ color: "#64748b", fontSize: "0.83rem", lineHeight: "1.6", marginBottom: "16px" }}>{project.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: "#475569", textDecoration: "none", fontSize: "0.78rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LuGithub /> GitHub
                </a>
                <span style={{ color: "#e1e8f0" }}>|</span>
                <a href={project.live} style={{ color: "#1976d2", textDecoration: "none", fontSize: "0.78rem", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                  <LuExternalLink /> Live
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: "center", marginTop: "64px" }}>
          <p style={{ color: "#64748b", marginBottom: "16px", fontSize: "0.9rem" }}>
            Have a project in mind? Let&apos;s build something together.
          </p>
          <Link href="/contact" className="neon-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            Start a Project <LuArrowRight />
          </Link>
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
