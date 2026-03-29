"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#C4CBD1] shadow-lg px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <p className="text-sm text-[#4E555B] flex-1">
        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <Link href="/politica-de-cookies" className="text-[#0E261B] underline underline-offset-2 hover:text-[#0C6201] transition-colors font-medium">
          Política de Cookies
        </Link>
        .
      </p>
      <button
        onClick={() => { localStorage.setItem("cookies_accepted", "true"); setVisible(false); }}
        className="shrink-0 bg-[#0E261B] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#0C6201] transition-colors cursor-pointer"
      >
        Entendido
      </button>
    </div>
  );
}
