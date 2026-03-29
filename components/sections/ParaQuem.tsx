const para = [
  "Empresas que já vendem e querem previsibilidade",
  "Operações B2B, e-commerce ou híbridas",
  "Empresas com time comercial ou em estruturação",
  "Negócios que investem para crescer",
  "Empresas que entendem o valor de processo, CRM e acompanhamento",
];

const nao = [
  "Quem procura serviço barato ou pontual",
  "Quem quer apenas rodar anúncio",
  "Quem trata marketing e vendas como custo",
  "Infoprodutores",
  "Nichos black",
  "Empresas que querem terceirizar totalmente a responsabilidade do crescimento",
];

export default function ParaQuem() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
            A Escalei foi feita para empresas em momento de{" "}
            <span className="text-[#0E261B]">estruturação séria de crescimento.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* É para */}
          <div className="rounded-xl p-10 bg-[#F4F5F3] border-2 border-[#0C6201]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#0C6201]" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#0C6201]">É para</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {para.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#0C6201] font-bold text-sm">✓</span>
                  <span className="text-sm text-[#4E555B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não é para */}
          <div className="rounded-xl p-10 bg-white border-2 border-[#DC2626]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#DC2626]">Não é para</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {nao.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-[#FEF2F2] border border-[#DC2626] flex items-center justify-center text-[#DC2626] text-xs font-bold leading-none">
                    –
                  </span>
                  <span className="text-sm text-[#4E555B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
