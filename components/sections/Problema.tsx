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
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            Sua empresa não trava só por falta de demanda.
          </h2>
          <p className="text-lg text-[#4E555B] leading-relaxed">
            Ela trava quando marketing, comercial, CRM e rotina de performance não conversam entre si.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#F4F5F3] rounded-xl p-8 border border-transparent hover:border-[#C4CBD1] transition-colors duration-200"
            >
              <span className="text-xs font-bold tracking-widest text-[#C4CBD1] mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-base font-bold text-[#111111] mb-3">{card.title}</h3>
              <p className="text-sm text-[#4E555B] leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <p className="text-base font-semibold text-[#0E261B] border-l-2 border-[#0C6201] pl-4">
          Crescer sem estrutura custa margem, tempo e oportunidades.
        </p>
      </div>
    </section>
  );
}
