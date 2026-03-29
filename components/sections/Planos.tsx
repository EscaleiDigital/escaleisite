"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

type Plan = {
  id: string;
  name: string;
  price: string;
  tagline: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
  note?: string;
  cta: string;
  event: "click_plan_start" | "click_plan_performance" | "click_plan_escala" | "click_plan_optimize";
};

const plans: Plan[] = [
  {
    id: "start",
    name: "Plano Start",
    price: "A partir de R$ 3.500 / mês",
    tagline:
      "Para empresas que precisam estruturar a base de aquisição e começar a operar com mais inteligência e previsibilidade.",
    features: [
      "Estratégia de funil de captação",
      "Gestão de tráfego pago",
      "Campanhas em Meta e Google",
      "Rastreamento",
      "Análise de métricas",
      "Orientação para criativos e conteúdo",
      "Acompanhamento estratégico",
      "Escalei CRM incluso para pequenos negócios",
    ],
    cta: "Chame no WhatsApp",
    event: "click_plan_start",
  },
  {
    id: "performance",
    name: "Plano Performance",
    price: "A partir de R$ 7.000 / mês",
    tagline:
      "Para empresas que já investem e querem integrar aquisição, processo comercial e performance com mais profundidade.",
    highlight: true,
    badge: "Mais procurado",
    features: [
      "Tudo do Start",
      "Treinamento comercial gravado e personalizado",
      "Playbook comercial",
      "Scripts de abordagem",
      "Acompanhamento global do comercial",
      "Encontro mensal com o time",
      "Análise de operação e funil",
      "Otimizações de conversão",
      "Escalei CRM incluso para pequenos negócios",
    ],
    cta: "Chame no WhatsApp",
    event: "click_plan_performance",
  },
  {
    id: "escala",
    name: "Plano Escala",
    price: "A partir de R$ 12.000 / mês",
    tagline:
      "Para empresas que precisam de uma estrutura mais robusta, com CRM, treinamento, operação e estratégia integrados.",
    features: [
      "Tudo do Performance",
      "Estruturação de CRM",
      "Implementação de CRM",
      "Automações",
      "Estratégias de CRM e relacionamento",
      "Treinamento da equipe",
      "Suporte dedicado",
      "Estrutura mais robusta de operação",
    ],
    note: "Para médias e grandes operações, a Escalei atua com implementação Kommo.",
    cta: "Chame no WhatsApp",
    event: "click_plan_escala",
  },
  {
    id: "optimize",
    name: "Plano Optimize",
    price: "Sob consulta",
    tagline:
      "Para empresas que precisam de um projeto sob medida, com soluções personalizadas além dos planos estruturados.",
    features: [
      "Consultoria estratégica",
      "Mapeamento de processos",
      "Landing pages",
      "Automações",
      "Agentes de IA",
      "Treinamentos específicos",
      "Estruturas personalizadas de operação",
    ],
    cta: "Quero informações sobre o Plano Optimize",
    event: "click_plan_optimize",
  },
];

export default function Planos() {
  return (
    <section id="planos" className="bg-[#F4F5F3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0C6201] mb-4">
            Planos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            Escolha a profundidade da estrutura que a sua empresa precisa agora.
          </h2>
          <p className="text-[#4E555B] leading-relaxed">
            A Escalei atua com planos estruturados para diferentes níveis de maturidade e necessidade operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-xl p-8 border transition-all duration-200 ${
                plan.highlight
                  ? "bg-[#0E261B] text-white border-[#0E261B] shadow-lg"
                  : "bg-white text-[#111111] border-[#F4F5F3] hover:border-[#C4CBD1] hover:shadow-sm"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 bg-[#0C6201] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-[#111111]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-semibold mb-3 ${plan.highlight ? "text-white/80" : "text-[#0C6201]"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/60" : "text-[#4E555B]"}`}>
                  {plan.tagline}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 shrink-0 text-xs font-bold ${plan.highlight ? "text-white/50" : "text-[#0C6201]"}`}>
                      ✓
                    </span>
                    <span className={`text-sm ${plan.highlight ? "text-white/75" : "text-[#4E555B]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className={`text-xs mb-5 italic ${plan.highlight ? "text-white/40" : "text-[#C4CBD1]"}`}>
                  {plan.note}
                </p>
              )}

              <a
                href={getWhatsAppUrl(plan.id)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent(plan.event)}
                className={`inline-flex items-center justify-center text-sm font-semibold px-5 py-3 rounded transition-colors duration-200 text-center ${
                  plan.highlight
                    ? "bg-white text-[#0E261B] hover:bg-[#F4F5F3]"
                    : "bg-[#0E261B] text-white hover:bg-[#0C6201]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#C4CBD1] text-center">
          Projetos com CRM mais robusto podem envolver setup inicial, conforme a estrutura da operação.
        </p>
      </div>
    </section>
  );
}
