"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0E261B] text-white px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg">
      <p className="text-sm text-white/80 flex-1">
        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <Link href="/politica-de-cookies" className="underline underline-offset-2 hover:text-white transition-colors">
          Política de Cookies
        </Link>
        .
      </p>
      <button
        onClick={handleAccept}
        className="shrink-0 bg-white text-[#0E261B] text-sm font-semibold px-5 py-2 rounded hover:bg-[#F4F5F3] transition-colors cursor-pointer"
      >
        Entendido
      </button>
    </div>
  );
}
