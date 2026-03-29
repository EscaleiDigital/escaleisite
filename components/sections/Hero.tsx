"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

const nodes = [
  { label: "Aquisição", x: 10, y: 40 },
  { label: "Op. Comercial", x: 30, y: 18 },
  { label: "CRM", x: 55, y: 50 },
  { label: "Métricas e KPIs", x: 75, y: 22 },
  { label: "Otimização", x: 88, y: 55 },
];

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 2], [1, 3],
];

export default function Hero() {
  const handleClick = () => trackEvent("click_whatsapp");

  return (
    <section className="relative min-h-screen flex items-center bg-[#F4F5F3] pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0C6201] mb-5">
              Máquina de Vendas para empresas que querem escalar com mais clareza e controle
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111111] leading-tight mb-6">
              A estrutura certa para escalar vendas com mais performance, organização e consistência.
            </h1>
            <p className="text-lg text-[#4E555B] leading-relaxed mb-10">
              A Escalei integra aquisição, operação comercial, CRM, treinamento e rotina de performance em uma única solução para empresas que já vendem e precisam de um próximo nível de estrutura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl("hero")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
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
              Atendimento comercial de segunda a sexta, das 9h às 18h.
            </p>
          </div>

          {/* Visual — blocos conectados */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              <svg
                viewBox="0 0 100 75"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Linhas de conexão */}
                {edges.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={nodes[a].x + 9}
                    y1={nodes[a].y + 4}
                    x2={nodes[b].x + 9}
                    y2={nodes[b].y + 4}
                    stroke="#C4CBD1"
                    strokeWidth="0.4"
                    strokeDasharray="1.5 1"
                  />
                ))}

                {/* Nós */}
                {nodes.map((node, i) => (
                  <g key={i}>
                    <rect
                      x={node.x}
                      y={node.y}
                      width="18"
                      height="8"
                      rx="1.5"
                      fill="white"
                      stroke="#C4CBD1"
                      strokeWidth="0.4"
                    />
                    <text
                      x={node.x + 9}
                      y={node.y + 5}
                      textAnchor="middle"
                      fontSize="2.2"
                      fill="#4E555B"
                      fontFamily="Manrope, sans-serif"
                      fontWeight="600"
                    >
                      {node.label}
                    </text>
                    {/* Dot indicador */}
                    <circle
                      cx={node.x + 1.5}
                      cy={node.y + 4}
                      r="0.8"
                      fill="#0C6201"
                    />
                  </g>
                ))}
              </svg>

              {/* Card de métrica flutuante */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#F4F5F3] rounded-xl shadow-sm px-5 py-4 w-44">
                <p className="text-xs text-[#4E555B] mb-1">Receita previsível</p>
                <p className="text-2xl font-bold text-[#0E261B]">+38%</p>
                <p className="text-xs text-[#C4CBD1] mt-1">média dos últimos projetos</p>
              </div>

              {/* Card de estrutura flutuante */}
              <div className="absolute -top-4 -left-4 bg-[#0E261B] rounded-xl shadow-sm px-5 py-4 w-40">
                <p className="text-xs text-white/60 mb-1">Operação estruturada</p>
                <p className="text-sm font-semibold text-white">Máquina de Vendas ativa</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
