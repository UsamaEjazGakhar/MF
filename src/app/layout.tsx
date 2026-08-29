import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";

import SessionLoader from "@/components/SessionLoader";

export const dynamic = "force-dynamic";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morrow Foundry — Building Ideas. Shaping the Future.",
  description:
    "Morrow Foundry is a technology and innovation venture creating digital products across healthcare, AI, software, gaming, and beyond.",
  metadataBase: new URL("https://morrowfoundry.com"),
  openGraph: {
    title: "Morrow Foundry",
    description: "Where Ideas Become Innovation.",
    url: "https://morrowfoundry.com",
    siteName: "Morrow Foundry Portal",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "Morrow Foundry" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morrow Foundry",
    description: "Where Ideas Become Innovation.",
    images: ["/assets/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TECHOrganization",
  name: "Morrow Foundry",
  url: "https://morrowfoundry.com",
  logo: "https://medicxus.com/assets/logo.png",
  sameAs: [
    "https://linkedin.com/company/medicxus",
    "https://twitter.com/medicxus",
    "https://facebook.com/medicxus",
  ],
  department: [
    { "@type": "EducationalOrganization", name: "Care Institute of Health Sciences" },
    { "@type": "TechBusiness", name: "Morrow Foundry" },
    { "@type": "Organization", name: "Study Abroad Project" },
    { "@type": "Organization", name: "Healthcare IT Solutions" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} scroll-smooth`} >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-outfit bg-canvas text-heading antialiased overflow-x-hidden">
        <Providers>

          <SessionLoader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
