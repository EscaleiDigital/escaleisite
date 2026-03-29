const pillars = [
  {
    title: "Aquisição qualificada",
    description:
      "Estratégia de funil, campanhas, rastreamento e leitura de desempenho.",
  },
  {
    title: "Operação comercial",
    description:
      "Processo, playbook, scripts, rotina e visão mais estruturada das vendas.",
  },
  {
    title: "CRM e relacionamento",
    description:
      "Ferramenta certa para o momento da empresa, com implantação, uso e cultura comercial.",
  },
  {
    title: "Métricas e otimização",
    description:
      "KPIs, análise de gargalos e decisões mais claras sobre crescimento e performance.",
  },
];

export default function MaquinaDeVendas() {
  return (
    <section id="maquina-de-vendas" className="bg-[#F4F5F3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0C6201] mb-4">
            Máquina de Vendas
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            Mais do que marketing, uma operação pensada para vender com previsibilidade.
          </h2>
          <p className="text-[#4E555B] leading-relaxed">
            A Máquina de Vendas é a solução da Escalei para empresas que já vendem, mas precisam de mais organização, inteligência e estrutura para crescer melhor. Ela integra aquisição, operação comercial, CRM, treinamento e acompanhamento de métricas em um único modelo de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-[#F4F5F3] hover:border-[#C4CBD1] transition-colors duration-200"
            >
              <span className="text-xs font-bold tracking-widest text-[#C4CBD1] mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-3">{pillar.title}</h3>
              <p className="text-sm text-[#4E555B] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="text-base font-semibold text-[#0E261B] border-l-2 border-[#0C6201] pl-4">
          A diferença entre crescer e escalar está na estrutura.
        </p>
      </div>
    </section>
  );
}
