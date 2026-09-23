const TRUST_ITEMS = [
  { icon: "✨", title: "User-Centric Design", desc: "Creating intuitive software interfaces that make daily tasks simple and enjoyable.", color: "icon-blue" },
  { icon: "📈", title: "Scalable Architecture", desc: "Building robust platforms that grow effortlessly alongside your expanding needs.", color: "icon-teal" },
  {
    icon: "💡",
    title: "Continuous Innovation",
    desc: "Leveraging the latest technologies to develop next-generation digital solutions.",
    color: "icon-amber"
  },
  { icon: "🌍", title: "Global Accessibility", desc: "Delivering cloud-based software accessible anytime, anywhere, for everyone.", color: "icon-purple" },
  { icon: "🛡️", title: "Security First", desc: "Ensuring top-tier data protection and privacy standards across all our applications.", color: "icon-blue" },
  { icon: "🚀", title: "Infinite Potential", desc: "Continuously evolving our product ecosystem with a clear vision for long-term growth.", color: "icon-teal" },
];

export default function TrustSection() {
  return (
    <section style={{ padding: "64px 48px", background: "#F8FAFC" }}>
      <p style={{
        fontSize: "12px", fontWeight: 700, letterSpacing: "2.5px",
        textTransform: "uppercase", color: "#14B8A6", marginBottom: "8px",
      }}>Innovative Software Studio — Morrow Foundry</p>
      <h2 style={{
        fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800,
        color: "#0F172A", letterSpacing: "-1.5px", lineHeight: 1.2, marginBottom: "8px",
      }}>Building Ideas.<br />Shaping the Future.</h2>
      <p style={{
        fontSize: "14px", color: "#475569", lineHeight: 1.6, marginBottom: "12px",
      }}>Morrow Foundry brings together technology, creativity, and innovation to build impactful software products designed to enhance and simplify everyday life.</p>
      <a href="/projects" style={{ fontSize: "14px", color: "#14B8A6", textDecoration: "none", marginRight: "16px" }}>Explore Our Projects ↗</a>
      <a href="/about" style={{ fontSize: "14px", color: "#14B8A6", textDecoration: "none" }}>Learn About Us</a>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3,1fr)",
        gap: "28px", marginTop: "32px",
      }}>
        {TRUST_ITEMS.map((item) => (
          <div key={item.title} className="trust-card" style={{
            background: "#fff", border: "1px solid #E2E8F0", borderRadius: "16px",
            padding: "28px", transition: "all .2s", cursor: "pointer",
          }}>
            <div className={item.color} style={{
              width: "48px", height: "48px", borderRadius: "12px",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", marginBottom: "16px",
            }}>{item.icon}</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .trust-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(15,76,129,.08);
        }
        @media(max-width:900px){ section { padding: 64px 24px !important; } section > div:last-child { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:600px){ section > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
