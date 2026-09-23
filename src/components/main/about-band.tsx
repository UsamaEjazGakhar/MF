const ABOUT_STATS = [
  { num: "24/7", label: "Daily Life Usage" },
  { num: "∞", label: "Growth Potential" },
];

const ABOUT_CARDS = [
  { icon: "🏆", title: "Our Mission", desc: "To develop accessible and practical software products that simplify and enhance daily life." },
  { icon: "🔭", title: "Our Vision", desc: "To become a leading technology group delivering seamless everyday digital solutions globally." },
  { icon: "💡", title: "Innovation", desc: "Creating intuitive, scalable, and user-friendly software applications for everyone." },
  { icon: "🌱", title: "Growth", desc: "Driven by infinite growth potential and a clear roadmap for continuous expansion." },
];

export default function AboutBand() {
  return (
    <section id="about" className="about-section">
      {/* Decorative Orb */}
      <div className="about-orb" />

      <div className="about-grid">
        {/* Left: Text */}
        <div>
          <p className="about-subtitle">Who We Are</p>
          <h2 className="about-title">Software Built for<br />Everyday Life</h2>
          <p className="about-text">
            Morrow Foundry is a technology and innovation venture dedicated to building software products that seamlessly integrate into your daily life. We create scalable, user-centric solutions with infinite growth potential.
          </p>

          {/* Mini Stats */}
          <div className="about-stats-grid">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <span className="about-stat-number">{stat.num}</span>
                <div className="about-stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cards Grid */}
        <div>
          <div className="about-cards-grid">
            {ABOUT_CARDS.map((card) => (
              <div key={card.title} className="about-card">
                <div className="about-card-icon">{card.icon}</div>
                <h4 className="about-card-title">{card.title}</h4>
                <p className="about-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
