import { getWhatsAppUrl } from "@/lib/whatsapp";

const blocks = [
  {
    title: "Escalei CRM",
    description:
      "Para pequenos negócios que precisam organizar leads, visualizar o funil e reduzir a perda de oportunidades com uma estrutura mais simples e eficiente.",
    plans: "Disponível nos planos Start e Performance.",
  },
  {
    title: "Kommo",
    description:
      "Para médias e grandes empresas que precisam de uma operação mais robusta, com implementação, automações, treinamento e suporte.",
    plans: "Disponível nos planos Escala e Optimize.",
  },
];

export default function CRM() {
  return (
    <section id="crm" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#0C6201] mb-4">
            CRM
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            A ferramenta certa para o estágio da sua empresa.
          </h2>
          <p className="text-[#4E555B] leading-relaxed">
            A Escalei não entrega só o sistema. Entrega implementação, treinamento, processo e cultura de CRM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`rounded-xl p-10 border ${
                i === 0
                  ? "bg-[#F4F5F3] border-[#F4F5F3] hover:border-[#C4CBD1]"
                  : "bg-[#0E261B] border-[#0E261B]"
              } transition-colors duration-200`}
            >
              <h3 className={`text-xl font-bold mb-4 ${i === 1 ? "text-white" : "text-[#111111]"}`}>
                {block.title}
              </h3>
              <p className={`leading-relaxed mb-4 ${i === 1 ? "text-white/70" : "text-[#4E555B]"}`}>
                {block.description}
              </p>
              <p className={`text-sm ${i === 1 ? "text-white/40" : "text-[#C4CBD1]"}`}>
                {block.plans}
              </p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-[#0C6201] pl-5">
          <p className="text-base font-semibold text-[#0E261B]">
            CRM não é só ferramenta.
          </p>
          <p className="text-sm text-[#4E555B] mt-1">
            É visibilidade, organização, relacionamento e previsibilidade dentro da operação comercial.
          </p>
        </div>
      </div>
    </section>
  );
}
