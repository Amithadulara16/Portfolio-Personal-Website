"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiSpringboot, SiMysql, SiMongodb } from "react-icons/si";
import { LuHandshake } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { LuFolderGit2, LuCpu, LuUser } from "react-icons/lu";

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
// Section — fade + slide up
// ─────────────────────────────────────────────────────────────────────────────
function Section({ children, style = {}, delay = 0 }: { children: React.ReactNode; style?: React.CSSProperties; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
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
    title: "Portfolio Website",
    desc: "Modern developer portfolio built with Next.js, Tailwind CSS, and scroll-triggered animations.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    emoji: "🪐",
    accentColor: "#38BDF8",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce app with cart, auth, and payment integration using Spring Boot and React.",
    tech: ["React", "Java", "Spring Boot", "MySQL"],
    emoji: "🛒",
    accentColor: "#A78BFA",
  },
  {
    title: "Task Manager",
    desc: "Drag-and-drop productivity board with real-time updates and team collaboration features.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    emoji: "✅",
    accentColor: "#34D399",
  },
];

const stats = [
  { value: 20, suffix: "+", label: "Projects Built" },
  { value: 3, suffix: "+", label: "Years Learning" },
  { value: 8, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Passion" },
];

const techPills = ["React", "Next.js", "TypeScript", "Java", "Spring Boot", "MySQL"];

const floatingTags = [
  { label: "React", top: "5%", left: "-20%" },
  { label: "Java", top: "70%", left: "-16%" },
  { label: "Next.js", top: "10%", right: "-18%" },
  { label: "Spring", top: "72%", right: "-14%" },
];

const socialChips = [
  { label: "GitHub", href: "https://github.com/Amithadulara16" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amitha-dulara-barnad-bb82032ab/" },
  { label: "Email", href: "mailto:amithadulara2002@gmail.com" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Shared styles
// ─────────────────────────────────────────────────────────────────────────────
const sectionLabel: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(56,189,248,0.1)",
  border: "1px solid rgba(56,189,248,0.2)",
  color: "#22D3EE",
  padding: "4px 14px",
  borderRadius: "999px",
  fontSize: "0.72rem",
  fontWeight: "700",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  marginBottom: "12px",
};

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #E2E8F0 40%, #38BDF8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const glassCard: React.CSSProperties = {
  background: "rgba(30,41,59,0.7)",
  border: "1px solid rgba(56,189,248,0.1)",
  borderRadius: "16px",
  backdropFilter: "blur(12px)",
};

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const typed = useTypewriter([
    "Full-Stack Developer",
    "React Enthusiast",
    "Java Developer",
    "UI/UX Passionate",
    "Problem Solver",
  ]);

  const statsSection = useInView(0.3);
  const skillsSection = useInView(0.1);
  const projectsSection = useInView(0.1);

  // Star field
  const starsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const c = starsRef.current;
    if (!c) return;
    c.innerHTML = "";
    for (let i = 0; i < 100; i++) {
      const s = document.createElement("div");
      const size = Math.random() * 2.5 + 0.5;
      s.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;border-radius:50%;
        background:white;top:${Math.random() * 100}%;left:${Math.random() * 100}%;
        opacity:${Math.random() * 0.6 + 0.1};
        animation:twinkle ${Math.random() * 4 + 2}s ease-in-out infinite;
        animation-delay:${Math.random() * 4}s;
      `;
      c.appendChild(s);
    }
  }, []);

  return (
    <div style={{ background: "#0F172A", color: "#E2E8F0", minHeight: "100vh", width: "100%" }}>

      {/* Star field */}
      <div ref={starsRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} />

      {/* ══ 1. HERO ══ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "80px", zIndex: 10 }}>
        {/* Radial glow */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <div style={{ width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)" }} />
        </div>

        <div style={{ maxWidth: "1100px", width: "100%", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

            {/* Left — text */}
            <div>
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "999px",
                border: "1px solid rgba(56,189,248,0.25)",
                background: "rgba(56,189,248,0.08)",
                color: "#22D3EE", fontSize: "0.72rem", fontWeight: "700",
                textTransform: "uppercase", letterSpacing: "0.12em",
                marginBottom: "32px",
                animation: "fadeInDown .7s ease both",
              }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34D399", boxShadow: "0 0 8px rgba(52,211,153,0.8)" }} />
                Available for Internships
              </div>

              {/* Name */}
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: "900", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "16px", animation: "fadeInDown .7s ease .1s both" }}>
                Hi, I&apos;m{" "}
                <span style={{ background: "linear-gradient(90deg, #38BDF8, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Amitha
                </span>
              </h1>

              {/* Typewriter */}
              <div style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)", fontWeight: "700", color: "#94A3B8", marginBottom: "24px", height: "40px", display: "flex", alignItems: "center", gap: "4px", animation: "fadeInDown .7s ease .2s both" }}>
                <span>{typed}</span>
                <span style={{ width: "2px", height: "28px", background: "#38BDF8", borderRadius: "999px", animation: "blink 1s ease-in-out infinite" }} />
              </div>

              {/* Description */}
              <p style={{ color: "#64748B", lineHeight: "1.8", fontSize: "0.97rem", maxWidth: "480px", marginBottom: "40px", animation: "fadeInDown .7s ease .3s both" }}>
                Undergraduate Computer Science student at NSBM Green University. I build fast, scalable, and beautiful web applications using{" "}
                <span style={{ color: "#7DD3FC", fontWeight: "600" }}>React</span>,{" "}
                <span style={{ color: "#7DD3FC", fontWeight: "600" }}>Next.js</span>, and{" "}
                <span style={{ color: "#7DD3FC", fontWeight: "600" }}>Java</span>.
              </p>

              {/* CTA */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px", animation: "fadeInDown .7s ease .4s both" }}>
                <Link href="/projects" style={{
                  padding: "12px 28px", borderRadius: "12px", fontWeight: "800", fontSize: "0.88rem",
                  color: "#0F172A", background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                  textDecoration: "none", display: "inline-block",
                  boxShadow: "0 0 0 rgba(56,189,248,0)",
                }}>
                  🚀 View Projects
                </Link>
                <Link href="/contact" style={{
                  padding: "12px 28px", borderRadius: "12px", fontWeight: "700", fontSize: "0.88rem",
                  color: "#7DD3FC", border: "1px solid rgba(56,189,248,0.4)",
                  background: "transparent", textDecoration: "none", display: "inline-block",
                }}>
                  Contact Me
                </Link>
              </div>

              {/* Tech pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", animation: "fadeInDown .7s ease .5s both" }}>
                {techPills.map((t) => (
                  <span key={t} style={{
                    padding: "4px 12px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: "600",
                    background: "rgba(56,189,248,0.08)", color: "#7DD3FC",
                    border: "1px solid rgba(56,189,248,0.15)",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — planet */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", animation: "fadeInRight .8s ease .3s both" }}>
              <div style={{ position: "relative" }}>
                {/* Outer glow */}
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(34,211,238,0.08)", filter: "blur(40px)", transform: "scale(1.3)", animation: "pulse 3s ease-in-out infinite" }} />

                {/* Planet */}
                <div style={{
                  position: "relative", width: "224px", height: "224px", borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #38BDF8, #0e7490, #0c4a6e, #0F172A)",
                  boxShadow: "0 0 60px rgba(34,211,238,0.35), 0 0 120px rgba(34,211,238,0.15)",
                  animation: "float 6s ease-in-out infinite",
                }}>
                  <div style={{ position: "absolute", top: "20%", left: "10%", width: "55%", height: "14%", borderRadius: "999px", background: "rgba(186,230,255,0.15)", filter: "blur(8px)" }} />
                  <div style={{ position: "absolute", bottom: "25%", right: "15%", width: "35%", height: "10%", borderRadius: "999px", background: "rgba(165,243,252,0.1)", filter: "blur(6px)" }} />
                </div>

                {/* Ring */}
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  width: "320px", height: "80px", borderRadius: "50%",
                  border: "2px solid rgba(34,211,238,0.4)",
                  boxShadow: "0 0 20px rgba(34,211,238,0.2)",
                  transform: "translate(-50%,-50%) rotateX(75deg)",
                  animation: "ringRotate 8s linear infinite",
                }} />

                {/* Orbiting dots */}
                <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-8px", marginLeft: "-8px", width: "16px", height: "16px", borderRadius: "50%", background: "#22D3EE", boxShadow: "0 0 12px rgba(34,211,238,1)", animation: "orbit1 4s linear infinite" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: "-6px", marginLeft: "-6px", width: "12px", height: "12px", borderRadius: "50%", background: "#7DD3FC", boxShadow: "0 0 10px rgba(56,189,248,1)", animation: "orbit2 6s linear infinite" }} />

                {/* Floating skill tags */}
                {floatingTags.map((tag, i) => (
                  <div key={tag.label} style={{
                    position: "absolute",
                    top: tag.top,
                    left: "left" in tag ? tag.left : undefined,
                    right: "right" in tag ? (tag as { right: string }).right : undefined,
                    padding: "6px 12px", borderRadius: "10px",
                    background: "rgba(30,41,59,0.92)", backdropFilter: "blur(8px)",
                    border: "1px solid rgba(56,189,248,0.2)",
                    color: "#7DD3FC", fontSize: "0.75rem", fontWeight: "700",
                    animation: `float ${5 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}>
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", opacity: 0.4, animation: "bounce 2s ease-in-out infinite" }}>
          <span style={{ color: "#475569", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
          <svg width="16" height="16" fill="none" stroke="#38BDF8" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ══ 2. STATS ══ */}
      <div ref={statsSection.ref} style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(56,189,248,0.08)", borderBottom: "1px solid rgba(56,189,248,0.08)", background: "rgba(30,41,59,0.3)", backdropFilter: "blur(4px)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              opacity: statsSection.inView ? 1 : 0,
              transform: statsSection.inView ? "translateY(0)" : "translateY(30px)",
              transition: `opacity .6s ease ${i * 120}ms, transform .6s cubic-bezier(.22,1,.36,1) ${i * 120}ms`,
            }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", background: "linear-gradient(90deg, #38BDF8, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "4px" }}>
                <CountUp target={s.value} inView={statsSection.inView} />{s.suffix}
              </div>
              <div style={{ color: "#475569", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ 3. ABOUT PREVIEW ══ */}
      <section style={{ position: "relative", zIndex: 10, padding: "112px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>

          {/* Image side */}
          <Section>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                position: "relative", width: "288px", height: "288px", borderRadius: "24px",
                background: "linear-gradient(135deg, #0c3050, #1E293B)",
                border: "1px solid rgba(56,189,248,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 60px rgba(56,189,248,0.08)",
                overflow: "hidden",
              }}>
               <Image
                  src="/IMG_3738.png"
                  alt="Amitha"
                  width={288}
                  height={288}
              style={{
                  objectFit: "cover",
                  borderRadius: "20px", }}
/>
                {/* Corner accents */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "24px", height: "24px", borderTop: "2px solid rgba(56,189,248,0.6)", borderLeft: "2px solid rgba(56,189,248,0.6)", borderRadius: "12px 0 0 0" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: "24px", height: "24px", borderTop: "2px solid rgba(56,189,248,0.6)", borderRight: "2px solid rgba(56,189,248,0.6)", borderRadius: "0 12px 0 0" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "24px", height: "24px", borderBottom: "2px solid rgba(56,189,248,0.6)", borderLeft: "2px solid rgba(56,189,248,0.6)", borderRadius: "0 0 0 12px" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "24px", height: "24px", borderBottom: "2px solid rgba(56,189,248,0.6)", borderRight: "2px solid rgba(56,189,248,0.6)", borderRadius: "0 0 12px 0" }} />
              </div>
            </div>
          </Section>

          {/* Text side */}
          <div>
            <Section delay={100}>
              <span style={sectionLabel}>About Me</span>
            </Section>
            <Section delay={180}>
              <h2 style={{ ...gradientText, fontSize: "2.5rem", fontWeight: "900", letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Amitha Dulara
              </h2>
            </Section>
            <Section delay={260}>
              <p style={{ color: "#94A3B8", lineHeight: "1.85", marginBottom: "24px", fontSize: "0.97rem" }}>
                I&apos;m an undergraduate Computer Science student at{" "}
                <span style={{ color: "#7DD3FC", fontWeight: "600" }}>NSBM Green University</span>, passionate about
                building modern web and mobile applications. I love solving real-world problems through clean,
                scalable code.
              </p>
            </Section>
            <Section delay={320}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                {["🎓 3rd Year CS", "🇱🇰 Sri Lanka", "💼 Open to Internship"].map((b) => (
                  <span key={b} style={{
                    padding: "6px 14px", borderRadius: "10px",
                    background: "rgba(30,41,59,0.8)", border: "1px solid rgba(56,189,248,0.15)",
                    color: "#94A3B8", fontSize: "0.85rem", fontWeight: "500",
                  }}>
                    {b}
                  </span>
                ))}
              </div>
            </Section>
            <Section delay={380}>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#38BDF8", fontWeight: "600", fontSize: "0.88rem", textDecoration: "none" }}>
                Read Full Story
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Section>
          </div>
        </div>
      </section>

      {/* ══ 4. SKILLS ══ */}
      <section ref={skillsSection.ref} style={{ position: "relative", zIndex: 10, padding: "112px 0", background: "rgba(30,41,59,0.2)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={sectionLabel}>Skills</span>
              <h2 style={{ ...gradientText, fontSize: "2.5rem", fontWeight: "900", letterSpacing: "-0.02em", marginBottom: "12px" }}>My Tech Stack</h2>
              <p style={{ color: "#64748B", maxWidth: "400px", margin: "0 auto", fontSize: "0.88rem" }}>Technologies I work with to bring ideas to life.</p>
            </div>
          </Section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {skills.map((s, i) => (
              <div key={s.name} style={{
                ...glassCard,
                padding: "20px",
                textAlign: "center",
                cursor: "default",
                opacity: skillsSection.inView ? 1 : 0,
                transform: skillsSection.inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.92)",
                transition: `opacity .55s ease ${i * 80}ms, transform .55s cubic-bezier(.22,1,.36,1) ${i * 80}ms`,
              }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "12px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ color: "#E2E8F0", fontWeight: "700", fontSize: "0.88rem" }}>{s.name}</div>
                <div style={{ color: "#475569", fontSize: "0.75rem", marginTop: "4px" }}>{s.category}</div>
              </div>
            ))}
          </div>

          <Section delay={400}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/skills" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#38BDF8", fontWeight: "600", fontSize: "0.88rem", textDecoration: "none" }}>
                View All Skills
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* ══ 5. PROJECTS ══ */}
      <section ref={projectsSection.ref} style={{ position: "relative", zIndex: 10, padding: "112px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <Section>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span style={sectionLabel}>Projects</span>
              <h2 style={{ ...gradientText, fontSize: "2.5rem", fontWeight: "900", letterSpacing: "-0.02em", marginBottom: "12px" }}>Things I&apos;ve Built</h2>
              <p style={{ color: "#64748B", maxWidth: "400px", margin: "0 auto", fontSize: "0.88rem" }}>A selection of projects crafted with passion and precision.</p>
            </div>
          </Section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
            {projects.map((p, i) => (
              <div key={p.title} style={{
                ...glassCard,
                padding: "28px",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                opacity: projectsSection.inView ? 1 : 0,
                transform: projectsSection.inView ? "translateY(0)" : "translateY(50px)",
                transition: `opacity .6s ease ${i * 130}ms, transform .6s cubic-bezier(.22,1,.36,1) ${i * 130}ms`,
              }}>
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${p.accentColor}, transparent)` }} />
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{p.emoji}</div>
                <h3 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1rem", marginBottom: "8px" }}>{p.title}</h3>
                <p style={{ color: "#64748B", fontSize: "0.82rem", lineHeight: "1.7", marginBottom: "20px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      padding: "2px 10px", borderRadius: "6px",
                      background: "rgba(56,189,248,0.08)", color: "rgba(125,211,252,0.8)",
                      fontSize: "0.75rem", fontWeight: "600",
                      border: "1px solid rgba(56,189,248,0.1)",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Section delay={400}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/projects" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 28px", borderRadius: "12px",
                background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                color: "#0F172A", fontWeight: "800", fontSize: "0.88rem",
                textDecoration: "none",
              }}>
                See All Projects →
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* ══ 6. CONTACT CTA ══ */}
      <section style={{ position: "relative", zIndex: 10, padding: "112px 0" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <Section>
            <div style={{
              position: "relative", borderRadius: "24px", overflow: "hidden",
              background: "linear-gradient(135deg, rgba(56,189,248,0.06), rgba(34,211,238,0.03))",
              border: "1px solid rgba(56,189,248,0.15)",
              padding: "64px 48px",
              textAlign: "center",
            }}>
              {/* Blobs */}
              <div style={{ position: "absolute", top: "-48px", right: "-48px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(34,211,238,0.08)", filter: "blur(32px)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: "-48px", left: "-48px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(56,189,248,0.06)", filter: "blur(32px)", pointerEvents: "none" }} />

              <div style={{ position: "relative" }}>
               <div style={{ fontSize: "3rem", marginBottom: "24px", color: "#38BDF8" }}>
  <LuHandshake />
</div>
                <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "900", letterSpacing: "-0.02em", color: "#E2E8F0", marginBottom: "16px", lineHeight: 1.2 }}>
                  Let&apos;s Build Something{" "}
                  <span style={{ background: "linear-gradient(90deg, #38BDF8, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Amazing
                  </span>
                </h2>
                <p style={{ color: "#64748B", maxWidth: "380px", margin: "0 auto 40px", lineHeight: "1.8", fontSize: "0.97rem" }}>
                  I&apos;m open to internships, freelance projects, and exciting collaborations. Let&apos;s turn your idea into reality.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", marginBottom: "40px" }}>
                  <Link href="/contact" style={{
                    padding: "14px 32px", borderRadius: "12px", fontWeight: "800", fontSize: "0.88rem",
                    color: "#0F172A", background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                    textDecoration: "none",
                  }}>
                    ✉ Get In Touch
                  </Link>
                  <a href="https://github.com/Amithadulara16" target="_blank" rel="noopener noreferrer" style={{
                    padding: "14px 32px", borderRadius: "12px", fontWeight: "700", fontSize: "0.88rem",
                    color: "#7DD3FC", border: "1px solid rgba(56,189,248,0.4)",
                    background: "transparent", textDecoration: "none",
                  }}>
                    GitHub Profile
                  </a>
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
                  {socialChips.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      color: "#475569", fontSize: "0.72rem", fontWeight: "700",
                      textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none",
                    }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(56,189,248,0.08)", padding: "40px 24px", background: "#0F172A" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    
    {/* Navigation Links */}
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginBottom: "32px" }}>
      <Link href="/about" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem" }}>
        <LuUser /> About
      </Link>
      <Link href="/skills" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem" }}>
        <LuCpu /> Skills
      </Link>
      <Link href="/projects" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem" }}>
        <LuFolderGit2 /> Projects
      </Link>
      <Link href="/cv" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem" }}>
        <FaFileAlt /> CV
      </Link>
      <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem" }}>
        <FaEnvelope /> Contact
      </Link>
    </div>

    {/* Copyright & Tech Stack */}
    <div style={{ textAlign: "center", borderTop: "1px solid #1E293B", paddingTop: "24px" }}>
      <p style={{ color: "#334155", fontSize: "0.8rem" }}>
        Built with <span style={{ color: "#38BDF8" }}>Next.js</span>, <span style={{ color: "#38BDF8" }}>TypeScript</span> &amp; <span style={{ color: "#38BDF8" }}>Tailwind CSS</span>
      </p>
      <p>
  Amitha Dulara © {new Date().getFullYear()}
</p>
    </div>
  </div>
</footer>

      {/* Global keyframes */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-18px); }
        }
        @keyframes ringRotate {
          from { transform: translate(-50%,-50%) rotateX(75deg) rotateZ(0deg); }
          to   { transform: translate(-50%,-50%) rotateX(75deg) rotateZ(360deg); }
        }
        @keyframes orbit1 {
          from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(60deg) translateX(75px) rotate(-60deg); }
          to   { transform: rotate(420deg) translateX(75px) rotate(-420deg); }
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50%      { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes twinkle {
          0%,100% { opacity: 0.15; }
          50%      { opacity: 0.9; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes pulse {
          0%,100% { opacity: 0.6; }
          50%      { opacity: 1; }
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