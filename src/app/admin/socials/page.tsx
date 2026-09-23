"use client";

import { useState, useEffect } from "react";
import { useToast } from "../layout";

export default function SocialLinksAdmin() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [socials, setSocials] = useState({
    SOCIAL_TWITTER: "",
    SOCIAL_FACEBOOK: "",
    SOCIAL_INSTAGRAM: "",
    SOCIAL_LINKEDIN: "",
    SOCIAL_DISCORD: "",
  });

  useEffect(() => {
    const fetchSocials = async () => {
      try {
        const res = await fetch("/api/settings/socials");
        const json = await res.json();
        if (json.success && json.data) {
          setSocials((prev) => ({ ...prev, ...json.data }));
        }
      } catch (error) {
        console.error("Failed to fetch social links", error);
        showToast("Failed to fetch social links", "error");
      } finally {
        setLoading(false);
      }
    };
    fetchSocials();
  }, [showToast]);

  const handleChange = (key: string, value: string) => {
    setSocials((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/settings/socials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(socials),
      });
      const json = await res.json();
      if (json.success) {
        showToast("Social links updated successfully!");
      } else {
        showToast(json.message || "Failed to update social links", "error");
      }
    } catch (error) {
      console.error("Error saving social links", error);
      showToast("An error occurred while saving", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: "40px", textAlign: "center" }}>Loading social settings...</div>;
  }

  const fields = [
    { key: "SOCIAL_TWITTER", label: "Twitter / X Username", placeholder: "e.g. MorrowFoundry" },
    { key: "SOCIAL_FACEBOOK", label: "Facebook Username", placeholder: "e.g. morrowfoundry" },
    { key: "SOCIAL_INSTAGRAM", label: "Instagram Username", placeholder: "e.g. morrow.foundry" },
    { key: "SOCIAL_LINKEDIN", label: "LinkedIn Username", placeholder: "e.g. company/morrow-foundry" },
    { key: "SOCIAL_DISCORD", label: "Discord Invite Link", placeholder: "e.g. https://discord.gg/yourcode" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "32px",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#0F172A", marginBottom: "8px" }}>
          Social Media Links
        </h1>
        <p style={{ fontSize: "14px", color: "#64748B", marginBottom: "32px" }}>
          Update the social media usernames/links shown in the footer. If you leave a field empty, that icon will still show up but won't link anywhere.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {fields.map((field) => (
            <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "14px", fontWeight: 600, color: "#334155" }}>
                {field.label}
              </label>
              <input
                type="text"
                value={socials[field.key as keyof typeof socials]}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #E2E8F0",
                  fontSize: "15px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#14B8A6")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")}
              />
            </div>
          ))}
        </div>

        <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid #E2E8F0", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              background: "#14B8A6",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "15px",
              cursor: saving ? "not-allowed" : "pointer",
              opacity: saving ? 0.7 : 1,
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => !saving && (e.currentTarget.style.background = "#0d9488")}
            onMouseOut={(e) => !saving && (e.currentTarget.style.background = "#14B8A6")}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
