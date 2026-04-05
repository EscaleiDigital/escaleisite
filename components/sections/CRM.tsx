const blocks = [
  {
    title: "Escalei CRM",
    description:
      "Para pequenos negócios que precisam organizar leads, visualizar o funil e reduzir a perda de oportunidades com uma estrutura mais simples e eficiente.",
    plans: "Nos planos Start e Performance",
    dark: false,
  },
  {
    title: "Kommo",
    description:
      "Para médias e grandes empresas que precisam de uma operação mais robusta, com implementação, automações, treinamento e suporte.",
    plans: "Disponível nos planos Escala e Optimize.",
    dark: true,
  },
];

export default function CRM() {
  return (
    <section id="crm" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0C6201] mb-4">
            CRM
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            A ferramenta certa para o estágio da sua empresa.
          </h2>
          <p className="text-[#4E555B] leading-relaxed">
            A Escalei não entrega só o sistema. Entrega implementação, treinamento, processo e cultura de CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          {blocks.map((block) => (
            <div
              key={block.title}
              className={`rounded-xl p-10 ${
                block.dark
                  ? "bg-[#0E261B] text-white"
                  : "bg-[#F4F5F3] border border-[#E0E3DF]"
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 ${block.dark ? "text-white" : "text-[#111111]"}`}>
                {block.title}
              </h3>
              <p className={`leading-relaxed mb-5 ${block.dark ? "text-white/65" : "text-[#4E555B]"}`}>
                {block.description}
              </p>
              <span className={`text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full ${
                block.dark
                  ? "bg-white/10 text-white/50"
                  : "bg-white border border-[#C4CBD1] text-[#4E555B]"
              }`}>
                {block.plans}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-4">
          <div className="w-1 h-10 bg-[#0C6201] rounded-full shrink-0 mt-0.5" />
          <div>
            <p className="text-base font-bold text-[#0E261B]">CRM não é só ferramenta.</p>
            <p className="text-sm text-[#4E555B] mt-1">
              É visibilidade, organização, relacionamento e previsibilidade dentro da operação comercial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
