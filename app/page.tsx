"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
import { LuHandshake, LuLaptop, LuShoppingCart, LuTarget, LuGraduationCap, LuMapPin, LuArrowRight, LuCircleCheck, LuShoppingBag } from "react-icons/lu";

// ─────────────────────────────────────────────────────────────────────────────
// Intersection Observer hook
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─────────────────────────────────────────────────────────────────────────────
// Typewriter hook
// ─────────────────────────────────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= word.length) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, charIdx)); setCharIdx((c) => c + 1); }, speed);
    } else if (!deleting && charIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, charIdx)); setCharIdx((c) => c - 1); }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// ─────────────────────────────────────────────────────────────────────────────
// Animated counter
// ─────────────────────────────────────────────────────────────────────────────
function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      setCount((c) => {
        if (c + step >= target) { clearInterval(timer); return target; }
        return c + step;
      });
    }, 24);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}</>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  { name: "React", icon: <FaReact />, category: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend" },
  { name: "Java", icon: <FaJava />, category: "Backend" },
  { name: "Spring Boot", icon: <SiSpringboot />, category: "Backend" },
  { name: "MySQL", icon: <SiMysql />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
];

const projects = [
  {
    title: "PaperCraft - Stationery Shop",
    desc: "Full-stack e-commerce web app for stationery with cart, COD/Card 3D Secure checkout, stock deduction, & Admin portal.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "MongoDB"],
    icon: <LuShoppingBag />,
  },
  {
    title: "Portfolio Website",
    desc: "Modern developer portfolio built with Next.js, TypeScript, and responsive UI design.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    icon: <LuLaptop />,
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce app with cart, auth, and payment integration using Spring Boot and React.",
    tech: ["React", "Java", "Spring Boot", "MySQL"],
    icon: <LuShoppingCart />,
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Years Learning" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Passion" },
];

const techPills = ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "MySQL"];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const typed = useTypewriter([
    "Full-Stack Developer",
    "React Specialist",
    "Java Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ]);

  const statsSection = useInView(0.3);
  const skillsSection = useInView(0.1);
  const projectsSection = useInView(0.1);

  return (
    <div style={{ background: "#f5f7fa", color: "#0f172a", minHeight: "100vh", width: "100%" }}>

      {/* ══ 1. HERO ══ */}
      <section style={{ minHeight: "calc(100vh - 70px)", display: "flex", alignItems: "center", padding: "60px 0" }}>
        <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

            {/* Left — text */}
            <div>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 14px", borderRadius: "999px",
                border: "1px solid #e1e8f0",
                background: "#ffffff",
                color: "#475569", fontSize: "0.75rem", fontWeight: "600",
                textTransform: "uppercase", letterSpacing: "0.08em",
                marginBottom: "28px",
                boxShadow: "0 2px 6px rgba(15, 23, 42, 0.04)"
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1976d2" }} />
                Software Engineer Intern @ Star Garments
              </div>

              {/* Name */}
              <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: "900", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "16px", color: "#0f172a" }}>
                Hi, I&apos;m{" "}
                <span style={{ color: "#1976d2", borderBottom: "3px solid #1976d2" }}>
                  Amitha
                </span>
              </h1>

              {/* Typewriter */}
              <div style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: "600", color: "#1976d2", marginBottom: "20px", height: "36px", display: "flex", alignItems: "center", gap: "4px" }}>
                <span>{typed}</span>
                <span style={{ width: "2px", height: "24px", background: "#1976d2", borderRadius: "999px", animation: "blink 1s ease-in-out infinite" }} />
              </div>

              {/* Description */}
              <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "0.95rem", maxWidth: "480px", marginBottom: "36px" }}>
                Software Engineer Intern at <span style={{ color: "#0f172a", fontWeight: "600" }}>Star Garments (Pvt) Ltd</span> and 3rd Year Computer Science student at NSBM. I build fast, scalable, and clean web applications using{" "}
                <span style={{ color: "#0f172a", fontWeight: "600" }}>React</span>,{" "}
                <span style={{ color: "#0f172a", fontWeight: "600" }}>Next.js</span>, and{" "}
                <span style={{ color: "#0f172a", fontWeight: "600" }}>Java</span>.
              </p>

              {/* CTA */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "36px" }}>
                <Link href="/projects" className="neon-btn">
                  View Projects
                </Link>
                <Link href="/contact" className="outline-btn">
                  Contact Me
                </Link>
              </div>

              {/* Tech pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {techPills.map((t) => (
                  <span key={t} className="skill-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Clean Minimal Profile Card */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="glass-card" style={{ padding: "28px", width: "100%", maxWidth: "340px", textAlign: "center" }}>
                <div style={{ position: "relative", width: "200px", height: "200px", margin: "0 auto 20px", borderRadius: "16px", overflow: "hidden", border: "1px solid #e1e8f0" }}>
                  <Image
                    src="/IMG_3738.png"
                    alt="Amitha Dulara"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0f172a", marginBottom: "4px" }}>Amitha Dulara</h3>
                <p style={{ color: "#64748b", fontSize: "0.85rem", marginBottom: "16px" }}>SE Intern @ Star Garments · NSBM CS</p>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "6px", background: "#f5f7fa", border: "1px solid #e1e8f0", color: "#475569", fontSize: "0.75rem" }}>
                    <LuMapPin style={{ color: "#1976d2" }} /> Sri Lanka
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "6px", background: "#f5f7fa", border: "1px solid #e1e8f0", color: "#475569", fontSize: "0.75rem" }}>
                    <LuGraduationCap style={{ color: "#1976d2" }} /> 3rd Year CS
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. STATS ══ */}
      <div ref={statsSection.ref} style={{ borderTop: "1px solid #e1e8f0", borderBottom: "1px solid #e1e8f0", background: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", textAlign: "center" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "2.4rem", fontWeight: "900", color: "#1976d2", marginBottom: "4px" }}>
                <CountUp target={s.value} inView={statsSection.inView} />{s.suffix}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ 3. ABOUT PREVIEW ══ */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <span style={{ color: "#1976d2", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>About Me</span>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>Passionate Full-Stack Developer</h2>
            <div className="gradient-line" />
            <p style={{ color: "#475569", lineHeight: "1.8", fontSize: "0.95rem", marginBottom: "24px" }}>
              Software Engineer Intern at Star Garments (Pvt) Ltd - Katunayake and undergraduate Computer Science student at NSBM. I focus on building robust, performant web applications using clean architecture and modern tools like React, Next.js, and Java.
            </p>
            <Link href="/about" className="outline-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Read Full Bio <LuArrowRight />
            </Link>
          </div>
          <div className="glass-card" style={{ padding: "32px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0f172a", marginBottom: "16px" }}>Highlights</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", color: "#475569", fontSize: "0.9rem" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <LuCircleCheck style={{ color: "#1976d2", flexShrink: 0 }} /> Software Engineer Intern at Star Garments (Pvt) Ltd
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <LuCircleCheck style={{ color: "#1976d2", flexShrink: 0 }} /> 3rd Year BSc in Computer Science at NSBM
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <LuCircleCheck style={{ color: "#1976d2", flexShrink: 0 }} /> Experienced in React, Next.js, TypeScript &amp; Java
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <LuCircleCheck style={{ color: "#1976d2", flexShrink: 0 }} /> Hands-on REST API &amp; Database design (MySQL, MongoDB)
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <LuCircleCheck style={{ color: "#1976d2", flexShrink: 0 }} /> Passionate about UI/UX and clean code standards
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 4. SKILLS ══ */}
      <section ref={skillsSection.ref} style={{ padding: "96px 0", background: "#ffffff", borderTop: "1px solid #e1e8f0", borderBottom: "1px solid #e1e8f0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ color: "#1976d2", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>Tech Stack</span>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>Technologies I Use</h2>
            <p style={{ color: "#64748b", fontSize: "0.9rem", maxWidth: "420px", margin: "0 auto" }}>Core technologies used to build web applications.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {skills.map((s) => (
              <div key={s.name} style={{
                background: "#f5f7fa",
                border: "1px solid #e1e8f0",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                transition: "all 0.2s ease"
              }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "10px", color: "#1976d2", display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ color: "#0f172a", fontWeight: "700", fontSize: "0.9rem" }}>{s.name}</div>
                <div style={{ color: "#64748b", fontSize: "0.75rem", marginTop: "4px" }}>{s.category}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/skills" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#1976d2", fontWeight: "600", fontSize: "0.9rem", textDecoration: "none" }}>
              Explore All Skills <LuArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 5. PROJECTS ══ */}
      <section ref={projectsSection.ref} style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ color: "#1976d2", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>Portfolio</span>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>Featured Projects</h2>
            <p style={{ color: "#64748b", fontSize: "0.9rem", maxWidth: "420px", margin: "0 auto" }}>A few recent projects built with clean design and code.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {projects.map((p) => (
              <div key={p.title} className="glass-card" style={{ padding: "28px" }}>
                <div style={{ fontSize: "1.8rem", color: "#1976d2", marginBottom: "16px" }}>{p.icon}</div>
                <h3 style={{ color: "#0f172a", fontWeight: "800", fontSize: "1.05rem", marginBottom: "8px" }}>{p.title}</h3>
                <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: "1.7", marginBottom: "20px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="skill-tag" style={{ fontSize: "0.75rem", padding: "3px 10px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/projects" className="neon-btn" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              View All Projects <LuArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 6. CONTACT CTA ══ */}
      <section style={{ padding: "80px 0 112px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <div className="glass-card" style={{ padding: "48px 40px", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "16px", color: "#1976d2", display: "flex", justifyContent: "center" }}>
              <LuHandshake />
            </div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>
              Let&apos;s Work Together
            </h2>
            <p style={{ color: "#475569", maxWidth: "420px", margin: "0 auto 32px", lineHeight: "1.7", fontSize: "0.92rem" }}>
              I&apos;m available for internships, freelance projects, and collaborations. Reach out and let&apos;s build something great.
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="neon-btn">
                Get In Touch
              </Link>
              <a href="https://github.com/Amithadulara16" target="_blank" rel="noopener noreferrer" className="outline-btn">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global keyframes */}
      <style>{`
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
          div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}