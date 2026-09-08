"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "CV", path: "/cv" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 100,
                transition: "all 0.25s ease",
                background: scrolled
                    ? "rgba(255, 255, 255, 0.95)"
                    : "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(12px)",
                borderBottom: scrolled
                    ? "1px solid #e1e8f0"
                    : "1px solid transparent",
                boxShadow: scrolled ? "0 2px 10px rgba(15, 23, 42, 0.03)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "0 24px",
                    height: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link href="/" style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div
                            style={{
                                width: "34px",
                                height: "34px",
                                borderRadius: "8px",
                                background: "#1976d2",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.95rem",
                                fontWeight: "800",
                                color: "#ffffff",
                                boxShadow: "0 2px 8px rgba(25, 118, 210, 0.3)",
                            }}
                        >
                            A
                        </div>
                        <span
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: "700",
                                fontSize: "1.15rem",
                                color: "#0f172a",
                                letterSpacing: "0.01em",
                            }}
                        >
                            devbyamith
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul
                    style={{
                        display: "flex",
                        listStyle: "none",
                        gap: "32px",
                        alignItems: "center",
                    }}
                    className="hidden-mobile"
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.path} className="nav-link">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#0f172a",
                        fontSize: "1.4rem",
                        cursor: "pointer",
                        display: "none",
                        padding: "4px",
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        background: "#ffffff",
                        borderTop: "1px solid #e1e8f0",
                        padding: "16px 24px 24px",
                        boxShadow: "0 10px 20px rgba(15, 23, 42, 0.05)",
                    }}
                >
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        display: "block",
                                        padding: "12px 16px",
                                        color: "#334155",
                                        textDecoration: "none",
                                        borderRadius: "8px",
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLAnchorElement).style.color = "#1976d2";
                                        (e.target as HTMLAnchorElement).style.background = "#f5f7fa";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLAnchorElement).style.color = "#334155";
                                        (e.target as HTMLAnchorElement).style.background = "transparent";
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </nav>
    );
}