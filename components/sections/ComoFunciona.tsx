const steps = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    description: "Leitura do cenário, dos gargalos e do potencial de crescimento.",
  },
  {
    number: "02",
    title: "Estruturação da aquisição",
    description: "Organização do funil, campanhas, rastreamento e inteligência de captação.",
  },
  {
    number: "03",
    title: "Organização comercial",
    description: "Processo, treinamento, scripts, playbook e rotina operacional mais clara.",
  },
  {
    number: "04",
    title: "CRM, métricas e otimização",
    description: "Ferramenta, acompanhamento, KPIs e evolução contínua da operação.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-[#F4F5F3] pt-24 lg:pt-32 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0C6201] mb-4">
            Como funciona
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            Uma estrutura validada, adaptada ao contexto da empresa.
          </h2>
          <p className="text-[#4E555B] leading-relaxed">
            A Escalei trabalha com uma base estruturada de operação e adapta a solução à realidade de cada negócio. É uma combinação entre método validado e profundidade estratégica.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-0 relative mb-12">
          <div className="absolute top-7 left-7 right-7 h-px bg-[#C4CBD1] z-0" />
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 pr-8">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#C4CBD1] flex items-center justify-center mb-6 shadow-sm">
                <span className="text-sm font-bold text-[#0E261B]">{step.number}</span>
              </div>
              <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4E555B] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col gap-0 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C4CBD1] flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-xs font-bold text-[#0E261B]">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-[#C4CBD1] my-2" />}
              </div>
              <div className="pb-10 pt-2">
                <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4E555B] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-[#C4CBD1] rounded-full shrink-0" />
          <p className="text-sm text-[#4E555B]/80">
            A mudança costuma ser percebida com mais clareza entre 3 e 6 meses.
          </p>
        </div>
      </div>
    </section>
  );
}
