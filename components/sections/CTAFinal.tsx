"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

export default function CTAFinal() {
  const handleClick = () => {
    trackEvent("click_whatsapp");
  };

  return (
    <section className="bg-[#0E261B] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
            Sua empresa não precisa de mais ações soltas.<br />
            Precisa de uma estrutura melhor para crescer.
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            A Escalei organiza aquisição, comercial, CRM e rotina de performance em uma Máquina de Vendas<span className="hidden lg:inline"><br /></span>{" "}pensada para empresas que querem mais previsibilidade, escala e clareza para decidir.
          </p>
          <a
            href={getWhatsAppUrl("cta_final")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-2 bg-white text-[#0E261B] font-semibold px-8 py-4 rounded hover:bg-[#F4F5F3] transition-colors duration-200 text-base"
          >
            Chame no WhatsApp
          </a>
          <p className="mt-4 text-sm text-white/40">
            Atendimento de segunda a sexta, das 9h às 18h.
          </p>
        </div>
      </div>
    </section>
  );
}
