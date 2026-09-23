export default function Hero() {
  return (
    <section style={{
      background: "linear-gradient(135deg,#0B1220 0%,#0F2D4F 55%,#0a2540 100%)",
      padding: "110px 64px 100px",
      position: "relative",
      overflow: "hidden",
      minHeight: "640px",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "760px" }}>
        {/* Badge */}
        <div className="animate-fade-down" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "linear-gradient(90deg, rgba(20,184,166,0.15) 0%, rgba(20,184,166,0.05) 100%)",
          border: "1px solid rgba(20,184,166,0.3)", backdropFilter: "blur(10px)",
          borderRadius: "100px", padding: "8px 20px",
          fontSize: "13px", color: "#2DD4BF", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "8px",
        }}>
          <span className="animate-pulse-dot" style={{
            width: "8px", height: "8px", background: "#2DD4BF",
            borderRadius: "50%", display: "inline-block", boxShadow: "0 0 10px rgba(45,212,191,0.6)"
          }} />
          Independent Technology & Innovation Studio
        </div>

        {/* Heading */}
        <div className="animate-fade-up" style={{
          fontSize: "clamp(16px, 2vw, 24px)", fontWeight: 800, color: "rgba(255,255,255,0.9)", letterSpacing: "10px", marginBottom: "20px", textTransform: "uppercase"
        }}>
          MORROW FOUNDRY
        </div>
        <h1 className="animate-fade-up" style={{
          display: "flex", flexDirection: "column", gap: "6px",
          fontSize: "clamp(42px, 5.5vw, 76px)", fontWeight: 900,
          lineHeight: 1.05, letterSpacing: "-2px", marginBottom: "28px",
        }}>
          <span style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px" }}>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>Imagining</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>Building</span>
            <span style={{ color: "#14B8A6" }}>Ideas</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400, fontStyle: "italic" }}>that</span>
          </span>
          <span style={{ color: "#fff" }}>
            <span style={{ color: "#F59E0B" }}>Shape</span> the Future
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2" style={{
          fontSize: "clamp(18px, 2vw, 22px)", color: "rgba(255,255,255,.75)", lineHeight: 1.6,
          maxWidth: "600px", marginBottom: "48px", fontWeight: 400, letterSpacing: "-0.3px"
        }}>
          Morrow Foundry brings together technology, creativity, and innovation —
          turning ambitious ideas into meaningful digital products and experiences.
        </p>

        {/* Buttons */}
        <div className="animate-fade-up-delay-3" style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginBottom: "40px" }}>
          <a href="#divisions" className="hero-btn-primary" style={{
            background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", color: "#0B1220",
            padding: "16px 36px", borderRadius: "100px", fontWeight: 700, fontSize: "16px",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px",
            transition: "all .3s ease", letterSpacing: "-0.2px", boxShadow: "0 8px 24px -6px rgba(245, 158, 11, 0.4)"
          }}>
            Explore Our Projects ↗
          </a>
          <a href="#about" className="hero-btn-secondary" style={{
            background: "rgba(255,255,255,.03)", color: "#fff", backdropFilter: "blur(12px)",
            padding: "16px 36px", borderRadius: "100px", fontWeight: 600, fontSize: "16px",
            textDecoration: "none", border: "1px solid rgba(255,255,255,.15)", transition: "all .3s ease",
          }}>
            Learn About Us
          </a>
        </div>

        {/* Trust Chips */}
        <div className="animate-fade-up-delay-1" style={{
          display: "flex", alignItems: "center", gap: "28px", marginTop: "32px", flexWrap: "wrap",
        }}>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,.5)", fontWeight: 600, letterSpacing: "0.5px" }}>
            Trusted by:
          </span>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["Businesses", "Creators", "Investors", "Technology Partners"].map((chip) => (
              <span key={chip} style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", backdropFilter: "blur(8px)",
                borderRadius: "100px", padding: "6px 16px",
                fontSize: "13px", color: "rgba(255,255,255,.8)", fontWeight: 500, letterSpacing: "0.2px"
              }}>
                <span style={{ color: "#2DD4BF", fontWeight: 700, fontSize: "12px" }}>✓</span>
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`




        .hero-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(245,158,11,.38);
        }
        .hero-btn-secondary:hover {
          border-color: rgba(255,255,255,.5) !important;
          background: rgba(255,255,255,.1) !important;
        }
        @media(max-width:900px){
          section { padding: 72px 24px 60px !important; }
          h1 { font-size: 38px !important; letter-spacing: -1.5px !important; }
        }
        @media(max-width:600px){
          h1 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
}
