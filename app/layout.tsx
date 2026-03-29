import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Escalei Digital | Máquina de Vendas para empresas que querem escala",
  description:
    "A Escalei estrutura aquisição, operação comercial, CRM e rotina de performance em uma Máquina de Vendas para empresas que querem crescer com mais previsibilidade, organização e escala.",
  metadataBase: new URL("https://www.escaleidigital.com.br"),
  openGraph: {
    title: "Escalei Digital | Máquina de Vendas para empresas que querem escala",
    description:
      "A Escalei estrutura aquisição, operação comercial, CRM e rotina de performance em uma Máquina de Vendas para empresas que querem crescer com mais previsibilidade, organização e escala.",
    url: "https://www.escaleidigital.com.br",
    siteName: "Escalei Digital",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full`}>
      <head>
        {/* Meta Pixel placeholder */}
        {/* Google Tag Manager placeholder */}
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
