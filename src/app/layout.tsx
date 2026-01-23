import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Energy Bill Calculator - Calculate Your Monthly Energy Costs",
  description: "Estimate your monthly energy costs with our free calculator. Compare gas and electricity tariffs and find ways to reduce your energy bills.",
  keywords: ["energy bill calculator", "electricity cost", "gas bill estimate", "energy costs UK", "energy tariff comparison"],
  openGraph: {
    title: "Energy Bill Calculator - Calculate Your Monthly Energy Costs",
    description: "Estimate your monthly energy costs with our free calculator. Compare gas and electricity tariffs and find ways to reduce your energy bills.",
    url: "https://energybillcalculator.quest",
    siteName: "Energy Bill Calculator",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Bill Calculator - Calculate Your Monthly Energy Costs",
    description: "Estimate your monthly energy costs with our free calculator. Compare gas and electricity tariffs and find ways to reduce your energy bills.",
  },
  alternates: { canonical: "https://energybillcalculator.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Energy Bill Calculator",
              url: "https://energybillcalculator.quest",
              description: "Estimate your monthly energy costs with our free calculator. Compare gas and electricity tariffs and find ways to reduce your energy bills.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
