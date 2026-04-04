const pillars = [
  {
    title: "Aquisição qualificada",
    description: "Estratégia de funil, campanhas, rastreamento e leitura de desempenho.",
  },
  {
    title: "Operação comercial",
    description: "Processo, playbook, scripts, rotina e visão mais estruturada das vendas.",
  },
  {
    title: "CRM e relacionamento",
    description: "Ferramenta certa para o momento da empresa, com implantação, uso e cultura comercial.",
  },
  {
    title: "Métricas e otimização",
    description: "KPIs, análise de gargalos e decisões mais claras sobre crescimento e performance.",
  },
];

export default function MaquinaDeVendas() {
  return (
    <section id="maquina-de-vendas" className="bg-[#0E261B] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C4CBD1] mb-4">
            Máquina de Vendas
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-5">
            Mais do que marketing, uma operação<br className="hidden lg:block" />{" "}pensada para vender com previsibilidade.
          </h2>
          <p className="text-white/65 leading-relaxed text-justify">
            A Máquina de Vendas é a solução da Escalei para empresas que já vendem, mas precisam de mais organização, inteligência e estrutura para crescer melhor. Ela integra aquisição, operação comercial, CRM, treinamento e acompanhamento de métricas em um único modelo de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 hover:shadow-md transition-shadow duration-200"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#0C6201] mb-5">
                0{i + 1}
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-3">{pillar.title}</h3>
              <p className="text-sm text-[#4E555B] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-[#0C6201] rounded-full shrink-0" />
          <p className="text-base font-semibold text-white/80">
            A diferença entre crescer e escalar está na estrutura.
          </p>
        </div>
      </div>
    </section>
  );
}
