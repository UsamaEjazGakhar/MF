"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const FOOTER_PROJECTS = [
  { label: "Lab Management System", href: "/projects" },
  { label: "Hospital Management", href: "/projects" },
];

const FOOTER_SOLUTIONS = [
  { label: "Enterprise Software", href: "#" },
  { label: "Cloud Applications", href: "#" },
  { label: "Digital Transformations", href: "#" },
];

const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const [socialsData, setSocialsData] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const res = await fetch("/api/settings/socials");
        const json = await res.json();
        if (json.success && json.data) {
          setSocialsData(json.data);
        }
      } catch (error) {
        console.error("Failed to load social settings for footer", error);
      }
    };
    fetchSocials();
  }, []);

  const socialLinks = [
    { key: "SOCIAL_TWITTER", href: socialsData["SOCIAL_TWITTER"], icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg> },
    { key: "SOCIAL_FACEBOOK", href: socialsData["SOCIAL_FACEBOOK"], icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg> },
    { key: "SOCIAL_INSTAGRAM", href: socialsData["SOCIAL_INSTAGRAM"], icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { key: "SOCIAL_LINKEDIN", href: socialsData["SOCIAL_LINKEDIN"], icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
    { key: "SOCIAL_DISCORD", href: socialsData["SOCIAL_DISCORD"], icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg> },
  ];

  return (
    <footer style={{ background: "#0B1220", padding: "64px 64px 36px" }}>
      {/* Top Grid */}
      <div style={{
        display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
        gap: "48px", paddingBottom: "48px",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}>
        {/* Brand Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{
              width: "36px", height: "36px",
              background: "linear-gradient(135deg,#0F4C81,#14B8A6)",
              borderRadius: "9px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 900, fontSize: "16px", fontStyle: "italic",
            }}>M</div>
            <div style={{ fontSize: "18px", fontWeight: 800, color: "#fff" }}>
              Morrow <span style={{ color: "#14B8A6" }}>Foundry</span>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,.4)", lineHeight: 1.7, marginBottom: "24px" }}>
            An innovative software studio building intuitive digital products and everyday applications designed to simplify and enrich your life.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            {socialLinks.map((s) => {
              if (!s.href) return null;
              
              let targetUrl = s.href;
              if (!targetUrl.startsWith("http")) {
                const username = targetUrl.replace(/^@/, "");
                if (s.key === "SOCIAL_TWITTER") targetUrl = `https://x.com/${username}`;
                else if (s.key === "SOCIAL_FACEBOOK") targetUrl = `https://facebook.com/${username}`;
                else if (s.key === "SOCIAL_INSTAGRAM") targetUrl = `https://instagram.com/${username}`;
                else if (s.key === "SOCIAL_LINKEDIN") targetUrl = `https://linkedin.com/in/${username}`;
                else if (s.key === "SOCIAL_DISCORD") targetUrl = `https://discord.gg/${username}`;
                else targetUrl = `https://${username}`;
              }
              
              return (
                <a key={s.key} href={targetUrl} target="_blank" rel="noopener noreferrer" className="social-link" style={{
                  width: "36px", height: "36px",
                  background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,.5)", textDecoration: "none", fontSize: "14px",
                  transition: "all .2s",
                }}>
                  {s.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Links Columns */}
        <FooterCol title="Projects" items={FOOTER_PROJECTS} />
        <FooterCol title="Solutions" items={FOOTER_SOLUTIONS} />
        <FooterCol title="Company" items={FOOTER_COMPANY} />
      </div>

      {/* Bottom Bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        paddingTop: "28px", flexWrap: "wrap", gap: "12px",
      }}>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.3)" }}>
          © 2025 <span style={{ color: "#14B8A6" }}>Medicxus Group</span>. All rights reserved. &nbsp;—&nbsp; medicxus.com
        </p>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Use", "Cookies"].map((item) => (
            <a key={item} href="#" className="legal-link" style={{
              fontSize: "13px", color: "rgba(255,255,255,.3)",
              textDecoration: "none", transition: "color .2s",
            }}>{item}</a>
          ))}
        </div>
      </div>

      <style>{`
        .social-link:hover {
          background: rgba(20,184,166,.15) !important;
          border-color: #14B8A6 !important;
          color: #14B8A6 !important;
        }
        .legal-link:hover {
          color: rgba(255,255,255,.6) !important;
        }
        .footer-col-link:hover {
          color: #14B8A6 !important;
        }
        @media(max-width:900px){
          footer { padding: 48px 24px 24px !important; }
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media(max-width:600px){
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 style={{
        fontSize: "13px", fontWeight: 700, color: "#fff",
        letterSpacing: ".5px", marginBottom: "20px", textTransform: "uppercase",
      }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.label} style={{ marginBottom: "10px" }}>
            <Link href={item.href} className="footer-col-link" style={{
              textDecoration: "none", color: "rgba(255,255,255,.4)",
              fontSize: "14px", transition: "color .2s",
            }}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
