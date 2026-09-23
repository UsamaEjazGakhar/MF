"use client";

import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const allProjects = [
  {
    id: "1",
    title: "Lab Management System",
    slug: "serve-institute-of-health-sciences",
    description: "Software for managing labs covering all important aspects.",
    icon: "🎓",
    iconColor: "icon-blue",
    categoryLabel: "Education",
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
    categoryLabel: "IT Services",
    sortOrder: 4,
    targetUrl: "https://lightcoral-chimpanzee-457948.hostingersite.com/frontend/login.php",
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #0B1220 0%, #0F2D4F 100%)",
        padding: "120px 64px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            fontSize: "13px", fontWeight: 700, letterSpacing: "3px",
            color: "#14B8A6", textTransform: "uppercase", marginBottom: "16px"
          }}>Our Portfolio</p>
          <h1 style={{
            fontSize: "clamp(32px, 5vw, 54px)", fontWeight: 900, color: "#fff",
            letterSpacing: "-1.5px", lineHeight: 1.15, marginBottom: "20px"
          }}>
            All Projects & Divisions
          </h1>
          <p style={{
            fontSize: "18px", color: "rgba(255,255,255,0.7)", lineHeight: 1.7,
            maxWidth: "680px", margin: "0 auto 36px"
          }}>
            Explore our comprehensive suite of digital solutions, from cutting-edge healthcare management systems to educational and consultancy platforms.
          </p>
          
          <button 
            onClick={() => router.back()}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"}
            onMouseOut={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"}
          >
            ← Go Back
          </button>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="divisions" className="divisions-section" style={{ background: "#F8FAFC", paddingTop: "80px", paddingBottom: "100px" }}>
        <div className="divisions-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          {allProjects.map((project) => {
            const Wrapper = project.targetUrl ? "a" : Link;
            const href = project.targetUrl ? project.targetUrl : `/api/redirect-division/${project.id}`;
            const extraProps = project.targetUrl ? { target: "_blank", rel: "noopener noreferrer" } : {};

            return (
              <Wrapper key={project.id} href={href}
                className={`divisions-card card-hover-border ${project.iconColor}`}
                {...extraProps}
              >
                <div className="divisions-card-icon">{project.icon}</div>
                <p className="divisions-card-category">{project.categoryLabel}</p>
                <h3 className="divisions-card-title">{project.title}</h3>
                <p className="divisions-card-desc">{project.description}</p>
                <span className="divisions-card-link">Learn More →</span>
              </Wrapper>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}
