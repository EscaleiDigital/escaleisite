"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F4F5F3] pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0C6201] mb-5 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis">
              Máquina de Vendas
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#111111] leading-tight mb-6">
              A estrutura certa para<br className="hidden lg:block" />{" "}escalar vendas com mais<br className="hidden lg:block" />{" "}organização e performance.
            </h1>
            <p className="text-lg text-[#4E555B] leading-relaxed mb-10 max-w-lg text-justify">
              A Escalei integra aquisição, operação comercial, CRM, treinamento e rotina de performance em uma única solução para empresas que já vendem e precisam de um próximo nível de estrutura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl("default")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("click_whatsapp")}
                className="inline-flex items-center justify-center bg-[#0E261B] text-white font-semibold px-8 py-4 rounded hover:bg-[#0C6201] transition-colors duration-200 text-base"
              >
                Chame no WhatsApp
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center border border-[#0E261B] text-[#0E261B] font-semibold px-8 py-4 rounded hover:bg-[#0E261B] hover:text-white transition-all duration-200 text-base"
              >
                Ver planos
              </a>
            </div>
            <p className="mt-5 text-sm text-[#4E555B]/60">
              Atendimento de segunda a sexta, das 9h às 18h.
            </p>
          </div>

          {/* Visual — diagrama de operação integrada */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-[#E0E3DF] shadow-sm p-8">
              <svg
                viewBox="0 0 300 200"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Linhas de conexão */}
                {/* Aquisição → Operação Comercial (horizontal topo) */}
                <line x1="106" y1="23" x2="194" y2="23" stroke="#C4CBD1" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* Aquisição → CRM */}
                <line x1="58" y1="38" x2="130" y2="78" stroke="#C4CBD1" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* Op. Comercial → CRM */}
                <line x1="242" y1="38" x2="170" y2="78" stroke="#C4CBD1" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* CRM → Métricas */}
                <line x1="130" y1="108" x2="58" y2="158" stroke="#C4CBD1" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* CRM → Otimização */}
                <line x1="170" y1="108" x2="242" y2="158" stroke="#C4CBD1" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* Métricas → Otimização (horizontal base) */}
                <line x1="106" y1="173" x2="194" y2="173" stroke="#C4CBD1" strokeWidth="0.8" strokeDasharray="3 2" />

                {/* Card: Aquisição */}
                <rect x="10" y="8" width="96" height="30" rx="4" fill="white" stroke="#E0E3DF" strokeWidth="0.8" />
                <circle cx="22" cy="23" r="4" fill="#0E261B" />
                <text x="32" y="20" fontSize="7.5" fill="#111111" fontWeight="600" fontFamily="Manrope, sans-serif">Aquisição</text>
                <text x="32" y="30" fontSize="6" fill="#4E555B" fontFamily="Manrope, sans-serif">Funil + Campanhas</text>

                {/* Card: Operação Comercial */}
                <rect x="194" y="8" width="96" height="30" rx="4" fill="white" stroke="#E0E3DF" strokeWidth="0.8" />
                <circle cx="206" cy="23" r="4" fill="#0E261B" />
                <text x="216" y="19" fontSize="7.5" fill="#111111" fontWeight="600" fontFamily="Manrope, sans-serif">Operação</text>
                <text x="216" y="29" fontSize="7.5" fill="#111111" fontWeight="600" fontFamily="Manrope, sans-serif">Comercial</text>

                {/* Card: CRM — centro */}
                <rect x="102" y="78" width="96" height="30" rx="4" fill="#0E261B" />
                <circle cx="114" cy="93" r="4" fill="white" />
                <text x="150" y="97" fontSize="9" fill="white" fontWeight="700" fontFamily="Manrope, sans-serif" textAnchor="middle">CRM</text>

                {/* Card: Métricas e KPIs */}
                <rect x="10" y="158" width="96" height="30" rx="4" fill="white" stroke="#E0E3DF" strokeWidth="0.8" />
                <circle cx="22" cy="173" r="4" fill="#0C6201" />
                <text x="32" y="170" fontSize="7.5" fill="#111111" fontWeight="600" fontFamily="Manrope, sans-serif">Métricas</text>
                <text x="32" y="180" fontSize="6" fill="#4E555B" fontFamily="Manrope, sans-serif">KPIs + Dashboards</text>

                {/* Card: Otimização */}
                <rect x="194" y="158" width="96" height="30" rx="4" fill="white" stroke="#E0E3DF" strokeWidth="0.8" />
                <circle cx="206" cy="173" r="4" fill="#0C6201" />
                <text x="216" y="170" fontSize="7.5" fill="#111111" fontWeight="600" fontFamily="Manrope, sans-serif">Otimização</text>
                <text x="216" y="180" fontSize="6" fill="#4E555B" fontFamily="Manrope, sans-serif">Receita previsível</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
