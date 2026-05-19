import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
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
      <head />
      <body className="min-h-full flex flex-col antialiased">
        {children}
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1509589010814032');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1509589010814032&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
