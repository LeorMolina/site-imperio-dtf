import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google"; // Importando as fontes
import "./globals.css";

// Configuração das Fontes Otimizadas (Carregam super rápido)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Império DTF Print | Estamparia e Personalização Premium",
  description: "Transforme suas ideias em estampas de alta qualidade. Impressão DTF com cores vivas e durabilidade industrial. Peça online e receba rápido.",
  keywords: ["DTF", "Estamparia", "Camisetas Personalizadas", "Print", "Sorocaba"], // Adicione sua cidade se quiser
  openGraph: {
    title: "Império DTF Print - Qualidade Premium",
    description: "Sua marca eternizada em tecido. Tecnologia DTF de última geração.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth"> {/* Scroll suave nativo */}
      <body className={`${inter.variable} ${montserrat.variable} antialiased bg-imperio-black`}>
        {children}
      </body>
    </html>
  );
}