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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0C6201] mb-4">
            Como funciona
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            Uma estrutura validada, adaptada ao contexto da empresa.
          </h2>
          <p className="text-[#4E555B] leading-relaxed">
            A Escalei trabalha com uma base estruturada de operação e adapta a solução à realidade de cada negócio. É uma combinação entre método validado e profundidade estratégica.
          </p>
        </div>

        {/* Timeline desktop — horizontal | mobile — vertical */}
        <div className="relative">
          {/* Linha conectora desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#F4F5F3] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col">
                {/* Número com círculo */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#F4F5F3] border-2 border-white shadow-sm flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[#0E261B]">{step.number}</span>
                  </div>
                  {/* Linha vertical mobile */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden w-px h-6 bg-[#F4F5F3] ml-7 -mt-1" />
                  )}
                </div>
                <h3 className="text-base font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-sm text-[#4E555B] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-sm text-[#4E555B]/70 border-l-2 border-[#C4CBD1] pl-4">
          A mudança costuma ser percebida com mais clareza entre 3 e 6 meses.
        </p>
      </div>
    </section>
  );
}
