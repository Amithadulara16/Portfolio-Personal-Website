"use client";

import { useState } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
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
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────

type FormState = { name: string; email: string; message: string };
type Errors = Partial<FormState>;
type Status = "idle" | "sending" | "sent";

// ── Shared styles ─────────────────────────────────────────────────────────────

const glassCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e1e8f0",
  borderRadius: "14px",
  boxShadow: "0 4px 16px -2px rgba(15, 23, 42, 0.04)",
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
    await new Promise((r) => setTimeout(r, 1500));
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
    <div style={{ minHeight: "100vh", width: "100%", background: "#f5f7fa", color: "#0f172a" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px 96px" }}>

        {/* ══ HEADER ══ */}
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
            Contact
          </span>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            color: "#0f172a",
            marginBottom: "14px",
          }}>
            Get In Touch
          </h1>
          <p style={{ color: "#64748b", fontSize: "0.95rem", maxWidth: "440px", margin: "0 auto", lineHeight: "1.7" }}>
            Feel free to reach out for collaborations or opportunities.
          </p>
        </div>

        {/* ══ MAIN GRID ══ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", alignItems: "start" }}>

          {/* ── LEFT PANEL ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

            {/* Contact Info */}
            <div style={{ ...glassCard, padding: "24px" }}>
              <h2 style={{ color: "#0f172a", fontWeight: "800", fontSize: "0.95rem", marginBottom: "20px" }}>
                Contact Details
              </h2>

              <InfoRow icon={<IconLocation />} label="Location" value="Colombo, Sri Lanka" href={undefined} />
              <div style={{ marginTop: "16px" }}>
                <InfoRow icon={<IconMail />} label="Email" value="amithadulara2002@gmail.com" href="mailto:amithadulara2002@gmail.com" />
              </div>

              <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #e1e8f0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1976d2" }} />
                  <span style={{ color: "#64748b", fontSize: "0.85rem" }}>Response time: within 24h</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ ...glassCard, padding: "24px" }}>
              <h2 style={{ color: "#0f172a", fontWeight: "800", fontSize: "0.95rem", marginBottom: "16px" }}>
                Profiles
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <SocialLink
                  href="https://github.com/Amithadulara16"
                  icon={<IconGitHub />}
                  label="GitHub"
                  handle="Amithadulara16"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/amitha-dulara-barnad-bb82032ab/"
                  icon={<IconLinkedIn />}
                  label="LinkedIn"
                  handle="amitha-dulara-barnad"
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL — Form ── */}
          <div className="glass-card" style={{ padding: "32px 28px" }}>
            {status === "sent" ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "36px 0", gap: "20px" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%",
                  background: "#f5f7fa", border: "1px solid #e1e8f0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#1976d2",
                }}>
                  <IconCheck />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#64748b", maxWidth: "260px", margin: "0 auto", lineHeight: "1.6", fontSize: "0.88rem" }}>
                    Thanks for reaching out, <span style={{ color: "#0f172a" }}>{form.name}</span>! I&apos;ll get back to you soon.
                  </p>
                </div>
                <button onClick={reset} className="outline-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0f172a", marginBottom: "20px" }}>
                  Send a Message
                </h2>

                <FormField label="Name" required error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={inputStyle(!!errors.name)}
                  />
                </FormField>

                <FormField label="Email" required error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle(!!errors.email)}
                  />
                </FormField>

                <FormField label="Message" required error={errors.message}>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    style={{ ...inputStyle(!!errors.message), resize: "none" }}
                  />
                </FormField>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="neon-btn"
                  style={{
                    width: "100%",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    marginTop: "4px",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                >
                  {status === "sending" ? "Sending…" : <> <IconSend /> Send Message </>}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <style>{`
        input:focus, textarea:focus { outline: none; border-color: #1976d2 !important; box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.15); }
      `}</style>
    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: "100%",
    background: "#ffffff",
    color: "#0f172a",
    border: `1px solid ${hasError ? "#EF4444" : "#e1e8f0"}`,
    borderRadius: "8px",
    padding: "11px 14px",
    fontSize: "0.88rem",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "all 0.2s",
  };
}

function FormField({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "#1976d2", marginBottom: "6px" }}>
        {label} {required && "*"}
      </label>
      {children}
      {error && (
        <p style={{ color: "#EF4444", fontSize: "0.75rem", marginTop: "4px" }}>{error}</p>
      )}
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string | undefined }) {
  const inner = (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{
        width: "34px", height: "34px", flexShrink: 0,
        borderRadius: "8px",
        background: "#f5f7fa",
        border: "1px solid #e1e8f0",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#1976d2",
      }}>
        {icon}
      </div>
      <div>
        <p style={{ color: "#64748b", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</p>
        <p style={{ color: "#0f172a", fontSize: "0.88rem", fontWeight: "500" }}>{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href} style={{ textDecoration: "none" }}>{inner}</a> : inner;
}

function SocialLink({ href, icon, label, handle }: { href: string; icon: React.ReactNode; label: string; handle: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", gap: "12px",
        padding: "10px 12px", borderRadius: "8px",
        border: "1px solid #e1e8f0",
        background: "#f5f7fa",
        textDecoration: "none",
      }}
    >
      <div style={{ color: "#1976d2" }}>{icon}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ color: "#0f172a", fontWeight: "600", fontSize: "0.85rem" }}>{label}</p>
        <p style={{ color: "#64748b", fontSize: "0.75rem" }}>{handle}</p>
      </div>
    </a>
  );
}