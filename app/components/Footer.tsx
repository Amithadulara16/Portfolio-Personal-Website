import Link from "next/link";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";
import { LuFolderGit2, LuCpu, LuUser } from "react-icons/lu";

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid #e1e8f0", padding: "40px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Navigation Links */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "28px", marginBottom: "28px" }}>
          <Link href="/about" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", textDecoration: "none", fontSize: "0.88rem", fontWeight: "500" }}>
            <LuUser style={{ color: "#1976d2" }} /> About
          </Link>
          <Link href="/skills" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", textDecoration: "none", fontSize: "0.88rem", fontWeight: "500" }}>
            <LuCpu style={{ color: "#1976d2" }} /> Skills
          </Link>
          <Link href="/projects" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", textDecoration: "none", fontSize: "0.88rem", fontWeight: "500" }}>
            <LuFolderGit2 style={{ color: "#1976d2" }} /> Projects
          </Link>
          <Link href="/cv" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", textDecoration: "none", fontSize: "0.88rem", fontWeight: "500" }}>
            <FaFileAlt style={{ color: "#1976d2" }} /> CV
          </Link>
          <Link href="/contact" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#475569", textDecoration: "none", fontSize: "0.88rem", fontWeight: "500" }}>
            <FaEnvelope style={{ color: "#1976d2" }} /> Contact
          </Link>
        </div>

        {/* Copyright & Tech Stack */}
        <div style={{ textAlign: "center", borderTop: "1px solid #e1e8f0", paddingTop: "20px" }}>
          <p style={{ color: "#475569", fontSize: "0.82rem", marginBottom: "4px" }}>
            Built with <span style={{ color: "#1976d2", fontWeight: "600" }}>Next.js</span>, <span style={{ color: "#1976d2", fontWeight: "600" }}>TypeScript</span> &amp; <span style={{ color: "#1976d2", fontWeight: "600" }}>Tailwind CSS</span>
          </p>
          <p style={{ color: "#94a3b8", fontSize: "0.78rem" }}>
            Amitha Dulara © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}