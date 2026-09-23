import Link from "next/link";

// Hardcoded divisions data to ensure all 4 are present
const divisionsData = [
  {
    id: "1",
    title: "Lab Management System",
    slug: "serve-institute-of-health-sciences",
    description: "Software for managing labs covering all important aspects.",
    icon: "🎓",
    iconColor: "icon-blue",
    sortOrder: 1,
    targetUrl: null,
  },

  {
    id: "4",
    title: "Hospital Management System",
    slug: "hospital-management-system-phc",
    description: "Enterprise Level SAAS-based hospital management system designed specifically for PHC (Primary Health Center) format, streamlining operations for healthcare facilities.",
    icon: "💻",
    iconColor: "icon-purple",
    sortOrder: 4,
    targetUrl: "https://lightcoral-chimpanzee-457948.hostingersite.com/frontend/login.php",
  },
];

export default function Divisions() {
  const categoryLabels: Record<string, string> = {
    "icon-blue": "Education",
    "icon-teal": "Healthcare",
    "icon-amber": "Consultancy",
    "icon-purple": "IT Services",
  };

  return (
    <section id="divisions" className="divisions-section">
      {/* Header */}
      <div className="divisions-header">
        <div>
          <p className="divisions-subtitle">Our Projects</p>
          <h2 className="divisions-title">Our Portfolio</h2>
          <p className="divisions-text">
            Building digital solutions to streamline operations and enhance management for educational and healthcare facilities.
          </p>
        </div>
        <Link href="/projects" className="view-all-link">View All Projects →</Link>
      </div>

      {/* Cards Grid */}
      <div className="divisions-grid">
        {divisionsData.map((division) => (
          <DivisionCard key={division.id} division={division} categoryLabel={categoryLabels[division.iconColor] || ""} />
        ))}
      </div>
    </section>
  );
}

function DivisionCard({ division, categoryLabel }: {
  division: { id: string; title: string; description: string; icon: string; iconColor: string; slug: string; targetUrl: string | null };
  categoryLabel: string;
}) {
  const Wrapper = division.targetUrl ? "a" : Link;
  const href = division.targetUrl ? division.targetUrl : `/api/redirect-division/${division.id}`;
  const extraProps = division.targetUrl ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper href={href}
      className={`divisions-card card-hover-border ${division.iconColor}`}
      {...extraProps}
    >
      <div className="divisions-card-icon">{division.icon}</div>
      <p className="divisions-card-category">{categoryLabel}</p>
      <h3 className="divisions-card-title">{division.title}</h3>
      <p className="divisions-card-desc">{division.description}</p>
      <span className="divisions-card-link">Learn More →</span>
    </Wrapper>
  );
}
