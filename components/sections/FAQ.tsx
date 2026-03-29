"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/tracking";

const faqs = [
  {
    question: "O que está incluso na Máquina de Vendas?",
    answer:
      "Os entregáveis variam de acordo com o plano contratado. A Escalei trabalha com os planos Start, Performance, Escala e Optimize, cada um com um nível diferente de profundidade e estrutura.",
  },
  {
    question: "O investimento em anúncios está incluso?",
    answer:
      "Não. A verba de mídia é definida de acordo com o negócio, o momento da empresa e a estratégia recomendada para o projeto.",
  },
  {
    question: "As ferramentas estão inclusas?",
    answer:
      "Ferramentas de terceiros não estão inclusas. O Escalei CRM pode ser disponibilizado nos planos elegíveis. Em operações maiores, a implementação de CRM mais robusto é definida conforme o projeto.",
  },
  {
    question: "Existe contrato mínimo?",
    answer:
      "Sim. Os projetos da Escalei têm contrato mínimo de 6 meses.",
  },
  {
    question: "A Escalei atende qualquer segmento?",
    answer:
      "A Escalei atende diferentes modelos de negócio, com exceção de infoprodutores e nichos black.",
  },
  {
    question: "A Escalei faz só tráfego pago?",
    answer:
      "Não. A Escalei estrutura a Máquina de Vendas integrando aquisição, operação comercial, CRM, métricas e acompanhamento estratégico. Para empresas que precisam de uma camada inicial mais focada em aquisição, o plano Start é a porta de entrada.",
  },
  {
    question: "A Escalei também estrutura CRM e operação comercial?",
    answer:
      "Sim. A depender do plano, a Escalei atua com CRM, organização comercial, treinamento, playbook, scripts e acompanhamento global da performance.",
  },
  {
    question: "A Escalei atende empresas sem time comercial?",
    answer:
      "Sim. A estrutura é adaptada ao modelo de negócio e ao momento da empresa.",
  },
  {
    question: "O atendimento é presencial ou remoto?",
    answer:
      "A operação da Escalei é 100% remota. Em casos específicos, também é possível contratar treinamentos, consultorias ou visitas presenciais, sob alinhamento prévio.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "Após a reunião comercial e o envio da proposta personalizada, a contratação é formalizada por assinatura digital e o projeto pode ser iniciado na sequência.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (openIndex !== index) trackEvent("faq_open");
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F4F5F3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-3xl divide-y divide-[#E8EAE7]">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-6 text-left group"
              >
                <span className="text-base font-semibold text-[#111111] group-hover:text-[#0E261B] transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-[#C4CBD1] flex items-center justify-center text-[#4E555B] transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-[#4E555B] leading-relaxed pr-12">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
