import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; 
import "./globals.css";

// Configuração das Fontes
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

// --- URL OFICIAL DO SITE ---
const baseUrl = "https://imperiodtf.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Império DTF Print | Estamparia e Personalização em Sorocaba",
  description: "Transforme suas ideias em estampas de alta qualidade. Impressão DTF com cores vivas, toque macio e durabilidade industrial. Peça online.",
  keywords: ["DTF", "Estamparia Sorocaba", "Camisetas Personalizadas", "DTF Têxtil", "Brindes Corporativos", "Império DTF"],
  openGraph: {
    title: "Império DTF Print - Qualidade Premium",
    description: "Sua marca eternizada em tecido. Tecnologia DTF de última geração.",
    url: baseUrl,
    siteName: "Império DTF Print",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Salve uma imagem com este nome na pasta public (1200x630px)
        width: 1200,
        height: 630,
        alt: "Império DTF Print - Capa",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // --- DADOS ESTRUTURADOS (JSON-LD) PARA O GOOGLE ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Império DTF Print",
    "image": `${baseUrl}/capa.jpg`,
    "description": "Estamparia especializada em DTF e personalização de camisetas e brindes em Sorocaba.",
    "telephone": "+55159991017676",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sorocaba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.instagram.com/imperiodtfprint/"
    ]
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} antialiased bg-imperio-black`}>
        {/* Injeção do JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}