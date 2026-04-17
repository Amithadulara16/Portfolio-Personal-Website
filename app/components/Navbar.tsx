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
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(15, 23, 42, 0.92)"
                    : "rgba(15, 23, 42, 0.6)",
                backdropFilter: "blur(20px)",
                borderBottom: scrolled
                    ? "1px solid rgba(56, 189, 248, 0.2)"
                    : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
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
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1rem",
                                fontWeight: "800",
                                color: "#0F172A",
                                boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
                            }}
                        >
                            A
                        </div>
                        <span
                            style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontWeight: "700",
                                fontSize: "1.2rem",
                                background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                letterSpacing: "0.02em",
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
                        color: "#38BDF8",
                        fontSize: "1.5rem",
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
                        background: "rgba(15, 23, 42, 0.97)",
                        backdropFilter: "blur(20px)",
                        borderTop: "1px solid rgba(56, 189, 248, 0.15)",
                        padding: "16px 24px 24px",
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
                                        color: "#94A3B8",
                                        textDecoration: "none",
                                        borderRadius: "10px",
                                        fontSize: "0.95rem",
                                        fontWeight: "500",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.target as HTMLAnchorElement).style.color = "#38BDF8";
                                        (e.target as HTMLAnchorElement).style.background = "rgba(56, 189, 248, 0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.target as HTMLAnchorElement).style.color = "#94A3B8";
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