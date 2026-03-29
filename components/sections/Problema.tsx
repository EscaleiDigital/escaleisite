const cards = [
  {
    title: "Leads sem aproveitamento",
    text: "Demanda entrando sem processo claro de acompanhamento e conversão.",
  },
  {
    title: "Operação sem previsibilidade",
    text: "Sem métricas consistentes, a tomada de decisão fica mais lenta e menos precisa.",
  },
  {
    title: "Comercial desalinhado",
    text: "Sem playbook, sem scripts e sem leitura de gargalos, a conversão perde força.",
  },
  {
    title: "Crescimento sem estrutura",
    text: "Sem integração entre aquisição, operação e CRM, a escala fica instável.",
  },
];

export default function Problema() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold text-[#111111] leading-tight mb-5 whitespace-nowrap">
            Sua empresa não trava só por falta de demanda.
          </h2>
          <p className="text-lg text-[#4E555B] leading-relaxed">
            Ela trava quando marketing, comercial, CRM e rotina de performance não conversam entre si.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#F4F5F3] rounded-xl p-8 border border-[#E0E3DF] hover:border-[#C4CBD1] hover:shadow-sm transition-all duration-200"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#0C6201] mb-5">
                0{i + 1}
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-3">{card.title}</h3>
              <p className="text-sm text-[#4E555B] leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-[#0C6201] rounded-full shrink-0" />
          <p className="text-base font-semibold text-[#0E261B]">
            Crescer sem estrutura custa margem, tempo e oportunidades.
          </p>
        </div>
      </div>
    </section>
  );
}
