"use client";
import Image from "next/image";
import { useState } from "react";

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Usama Ejaz",
      role: "Founder and CEO - Morrow Foundry",
      bio: "Founder of Morrow Foundry, a technology portfolio built around innovation, experimentation, and real-world problem solving. Developing solutions across healthcare, AI, software, and emerging technologies.",
      projects: ["Lab Management System", "Hospital Management System", "Neuro Disorder Detection", "Sign Language Detection", "Be Fit AI"],
      showProjects: true,
      image: "/teamphotos/usamapic.jpeg",
      color: "#14B8A6",
      objectPosition: "top",
    },
    // {
    //   name: "Mr. Maqsood Awan",
    //   role: "CEO - Medicxus Diagnostics",
    //   bio: "As the Chief Executive Officer of Medicxus Diagnostic Lab, a part of Medicxus Group, he oversees the laboratory's management, strategic planning, and overall operations, ensuring its continued growth and excellence in diagnostic healthcare services.",
    //   projects: [],
    //   showProjects: false,
    //   image: "/teamphotos/image9.png",
    //   color: "#0F4C81",
    //   objectPosition: "center 15%",
    // },
  ];

  // Single row containing all active members
  const rows: (typeof teamMembers)[] = [teamMembers];

  const renderCard = (member: (typeof teamMembers)[number], index: number) => (
    <div
      key={member.name}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(15,76,129,.06)",
        transition: "box-shadow .4s cubic-bezier(.4,0,.2,1)",
        cursor: "default",
        position: "relative",
        width: "220px",
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Image Container - fixed aspect ratio, never changes size */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "100%",
          overflow: "hidden",
          background: "#F8FAFC",
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          loading="eager"
          style={{
            objectFit: "cover",
            objectPosition: member.objectPosition,
            transition: "transform .5s cubic-bezier(.4,0,.2,1)",
            transform: hoveredIndex === index ? "scale(1.06)" : "scale(1)",
            transformOrigin: member.objectPosition,
          }}
        />
        {/* Color Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            background: `linear-gradient(180deg,transparent 0%,${member.color}90 100%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "12px 14px",
          overflow: "hidden",
          maxHeight: hoveredIndex === index ? "500px" : "52px",
          transition: "max-height .4s cubic-bezier(.4,0,.2,1), padding .4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Name & Role */}
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 800,
            color: "#0F172A",
            marginBottom: "2px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: member.color,
            textTransform: "uppercase",
            letterSpacing: "0.7px",
            marginBottom: "0px",
            transition: "margin-bottom .4s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {member.role}
        </p>

        {/* Bio - Shows on Hover */}
        <div
          style={{
            opacity: hoveredIndex === index ? 1 : 0,
            maxHeight: hoveredIndex === index ? "500px" : "0",
            marginTop: hoveredIndex === index ? "12px" : "0",
            transition: "all .3s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#64748B",
              lineHeight: 1.5,
              marginBottom: member.showProjects ? "12px" : "0px",
            }}
          >
            {member.bio}
          </p>

          {/* Key Projects - only for leadership (Maqsood Gul & Usama Ejaz) */}
          {member.showProjects && (
            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#94A3B8",
                  textTransform: "uppercase",
                  letterSpacing: "1.2px",
                  marginBottom: "8px",
                }}
              >
                Key Projects
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {member.projects.map((project, i) => (
                  <span
                    key={i}
                    style={{
                      background: `${member.color}15`,
                      color: member.color,
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "11px",
                      fontWeight: 600,
                      border: `1px solid ${member.color}30`,
                    }}
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: "60px 32px",
        background: "linear-gradient(180deg,#F8FAFC 0%,#fff 100%)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <p
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
            color: "#14B8A6",
            marginBottom: "10px",
          }}
        >
          Our Team
        </p>
        <h2
          style={{
            fontSize: "clamp(20px,2.5vw,28px)",
            fontWeight: 800,
            color: "#0F172A",
            letterSpacing: "-0.8px",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          Meet Our Leadership
        </h2>
        <p style={{ fontSize: "13px", color: "#64748B", lineHeight: 1.6, maxWidth: "420px" }}>
          Dedicated professionals driving innovation and excellence across all Medicxus Group initiatives.
        </p>
      </div>

      {/* Team Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {rows.map((row, rowIndex) => {
          const startIndex = 0;
          return (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {row.map((member, i) => renderCard(member, startIndex + i))}
            </div>
          );
        })}
      </div>

      <style>{`
        @media(max-width:768px){
          section { padding: 48px 16px !important; }
        }
        @media(max-width:520px){
          section > div:last-child > div { flex-direction: column !important; align-items: center !important; }
        }
      `}</style>
    </section>
  );
}