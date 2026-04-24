"use client";

import { useState } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

type FormState = { name: string; email: string; message: string };
type Errors = Partial<FormState>;
type Status = "idle" | "sending" | "sent";

// ── Shared styles ─────────────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: "rgba(30,41,59,0.7)",
  border: "1px solid rgba(56,189,248,0.12)",
  borderRadius: "16px",
  backdropFilter: "blur(12px)",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof Errors]) setErrors((p) => ({ ...p, [name]: undefined }));
  }

  function reset() {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setStatus("idle");
  }

  return (
    <div style={{ minHeight: "100vh", width: "100%", background: "#0F172A", color: "#E2E8F0" }}>

      {/* Ambient orbs */}
      <div style={{ position: "fixed", top: "5%", right: 0, width: "380px", height: "380px", background: "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "320px", height: "320px", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "72px 24px 100px", position: "relative", zIndex: 1 }}>

        {/* ══ HEADER ══ */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(56,189,248,0.1)",
            border: "1px solid rgba(56,189,248,0.25)",
            color: "#22D3EE",
            padding: "5px 18px",
            borderRadius: "999px",
            fontSize: "0.75rem",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "20px",
          }}>
            Contact
          </span>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #E2E8F0 30%, #38BDF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "16px",
          }}>
            Contact Me
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "0.97rem", maxWidth: "440px", margin: "0 auto", lineHeight: "1.8" }}>
            Feel free to reach out for collaborations or opportunities. I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* ══ MAIN GRID ══ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", alignItems: "start" }}>

          {/* ── LEFT PANEL ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Contact Info */}
            <div style={{ ...glassCard, padding: "28px" }}>
              <h2 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "4px", height: "20px", borderRadius: "999px", background: "linear-gradient(to bottom, #38BDF8, #22D3EE)", display: "inline-block", flexShrink: 0 }} />
                Contact Information
              </h2>

              <InfoRow icon={<IconLocation />} label="Location" value="Homagama, Colombo, Sri Lanka 🇱🇰" href={undefined} />
              <div style={{ marginTop: "20px" }}>
                <InfoRow icon={<IconMail />} label="Email" value="amithadulara2002@gmail.com" href="mailto:amithadulara2002@gmail.com" />
              </div>

              <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(56,189,248,0.1)" }}>
                <p style={{ color: "#475569", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                  Response Time
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#34D399", display: "inline-block", boxShadow: "0 0 8px rgba(52,211,153,0.6)" }} />
                  <span style={{ color: "#94A3B8", fontSize: "0.88rem" }}>Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ ...glassCard, padding: "28px" }}>
              <h2 style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "1rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "4px", height: "20px", borderRadius: "999px", background: "linear-gradient(to bottom, #818CF8, #A78BFA)", display: "inline-block", flexShrink: 0 }} />
                Social Links
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <SocialLink
                  href="https://github.com/Amithadulara16"
                  icon={<IconGitHub />}
                  label="GitHub"
                  handle="Amithadulara16"
                  iconColor="#E2E8F0"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/amitha-dulara-barnad-bb82032ab/"
                  icon={<IconLinkedIn />}
                  label="LinkedIn"
                  handle="amitha-dulara-barnad"
                  iconColor="#60A5FA"
                />
              </div>
            </div>

            {/* Availability */}
            <div style={{
              background: "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(34,211,238,0.04))",
              border: "1px solid rgba(56,189,248,0.2)",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}>
              <div style={{
                width: "48px", height: "48px", flexShrink: 0,
                borderRadius: "14px",
                background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem",
                boxShadow: "0 0 20px rgba(56,189,248,0.3)",
              }}>
                💼
              </div>
              <div>
                <p style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "0.9rem", marginBottom: "4px" }}>
                  Open to Opportunities
                </p>
                <p style={{ color: "#64748B", fontSize: "0.8rem", lineHeight: "1.6" }}>
                  Looking for internships and freelance collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL — Form ── */}
          <div style={{ position: "relative", borderRadius: "16px", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
            {/* Top accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)" }} />

            <div style={{ padding: "36px 32px", position: "relative" }}>
              {status === "sent" ? (
                /* Success State */
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "48px 0", gap: "24px" }}>
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#0F172A",
                    boxShadow: "0 0 40px rgba(56,189,248,0.45)",
                  }}>
                    <IconCheck />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#E2E8F0", marginBottom: "10px" }}>
                      Message Sent! 🚀
                    </h3>
                    <p style={{ color: "#94A3B8", maxWidth: "280px", margin: "0 auto", lineHeight: "1.8", fontSize: "0.9rem" }}>
                      Thanks for reaching out,{" "}
                      <span style={{ color: "#7DD3FC", fontWeight: "600" }}>{form.name || "friend"}</span>! I&apos;ll reply to{" "}
                      <span style={{ color: "#22D3EE" }}>{form.email}</span> within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={reset}
                    style={{
                      padding: "10px 24px", borderRadius: "12px",
                      border: "1px solid rgba(56,189,248,0.4)",
                      color: "#7DD3FC", fontWeight: "700", fontSize: "0.85rem",
                      background: "transparent", cursor: "pointer",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: "28px" }}>
                    <h2 style={{ fontSize: "1.15rem", fontWeight: "900", color: "#E2E8F0", marginBottom: "6px" }}>
                      Send a Message
                    </h2>
                    <p style={{ color: "#475569", fontSize: "0.82rem" }}>All fields marked with * are required.</p>
                    <div style={{ marginTop: "16px", height: "1px", background: "linear-gradient(90deg, rgba(56,189,248,0.4), transparent)" }} />
                  </div>

                  <FormField label="Name" required error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Amitha Dulara Barnad"
                      style={inputStyle(!!errors.name)}
                    />
                  </FormField>

                  <FormField label="Email" required error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="amithadulara2002@gmail.com"
                      style={inputStyle(!!errors.email)}
                    />
                  </FormField>

                  <FormField label="Message" required error={errors.message}>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      style={{ ...inputStyle(!!errors.message), resize: "none" }}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      width: "100%",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                      padding: "14px 24px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #38BDF8, #22D3EE)",
                      color: "#0F172A",
                      fontWeight: "800",
                      fontSize: "0.88rem",
                      border: "none",
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      opacity: status === "sending" ? 0.6 : 1,
                      marginTop: "8px",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <span style={{
                          width: "16px", height: "16px",
                          border: "2px solid #0F172A",
                          borderTopColor: "transparent",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin 0.7s linear infinite",
                        }} />
                        Sending…
                      </>
                    ) : (
                      <>
                        <IconSend />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ══ BOTTOM BANNER ══ */}
        <div style={{
          ...glassCard,
          marginTop: "56px",
          padding: "28px 32px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}>
          <div>
            <p style={{ color: "#E2E8F0", fontWeight: "800", fontSize: "0.97rem", marginBottom: "6px" }}>
              Prefer to email directly?
            </p>
            <a href="mailto:amithadulara2002@gmail.com" style={{ color: "#38BDF8", fontSize: "0.88rem", fontWeight: "500", textDecoration: "none" }}>
              amithadulara2002@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <a
              href="https://github.com/Amithadulara16"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "8px 16px", borderRadius: "10px",
                border: "1px solid rgba(56,189,248,0.2)",
                color: "#94A3B8", fontSize: "0.85rem", fontWeight: "600",
                textDecoration: "none", background: "transparent",
              }}
            >
              <IconGitHub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amitha-dulara-barnad-bb82032ab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "8px 16px", borderRadius: "10px",
                border: "1px solid rgba(96,165,250,0.2)",
                color: "#60A5FA", fontSize: "0.85rem", fontWeight: "600",
                textDecoration: "none", background: "transparent",
              }}
            >
              <IconLinkedIn /> LinkedIn
            </a>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, textarea:focus { outline: none; border-color: rgba(56,189,248,0.6) !important; box-shadow: 0 0 0 3px rgba(56,189,248,0.12); }
        @media (max-width: 640px) {
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    background: "rgba(15,23,42,0.8)",
    color: "#E2E8F0",
    border: `1px solid ${hasError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "0.88rem",
    fontWeight: "500",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };
}

function FormField({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8", marginBottom: "8px" }}>
        {label}
        {required && <span style={{ color: "#38BDF8" }}>*</span>}
      </label>
      {children}
      {error && (
        <p style={{ color: "#F87171", fontSize: "0.78rem", fontWeight: "600", marginTop: "6px", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string | undefined }) {
  const inner = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
      <div style={{
        width: "36px", height: "36px", flexShrink: 0,
        borderRadius: "10px",
        background: "rgba(56,189,248,0.1)",
        border: "1px solid rgba(56,189,248,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#38BDF8",
      }}>
        {icon}
      </div>
      <div>
        <p style={{ color: "#475569", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>{label}</p>
        <p style={{ color: "#E2E8F0", fontSize: "0.88rem", fontWeight: "500", lineHeight: "1.5" }}>{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} style={{ display: "block", textDecoration: "none" }}>{inner}</a>
  ) : (
    <div>{inner}</div>
  );
}

function SocialLink({ href, icon, label, handle, iconColor }: { href: string; icon: React.ReactNode; label: string; handle: string; iconColor: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", gap: "14px",
        padding: "14px", borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(15,23,42,0.4)",
        textDecoration: "none",
      }}
    >
      <div style={{
        width: "36px", height: "36px", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: "10px", background: "rgba(255,255,255,0.05)",
        color: iconColor,
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: "#E2E8F0", fontWeight: "700", fontSize: "0.88rem", marginBottom: "2px" }}>{label}</p>
        <p style={{ color: "#475569", fontSize: "0.78rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{handle}</p>
      </div>
      <div style={{ color: "#334155", flexShrink: 0 }}>
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>
    </a>
  );
}