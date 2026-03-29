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
            A Escalei foi feita para empresas em momento de estruturação séria de crescimento.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* É para */}
          <div className="bg-[#F4F5F3] rounded-xl p-10 border border-[#F4F5F3] hover:border-[#C4CBD1] transition-colors duration-200">
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#0C6201] mb-7">
              É para
            </h3>
            <ul className="flex flex-col gap-4">
              {para.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#0C6201] text-sm font-bold">✓</span>
                  <span className="text-sm text-[#4E555B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Não é para */}
          <div className="bg-white rounded-xl p-10 border border-[#F4F5F3] hover:border-[#C4CBD1] transition-colors duration-200">
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#C4CBD1] mb-7">
              Não é para
            </h3>
            <ul className="flex flex-col gap-4">
              {nao.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#C4CBD1] text-sm font-bold">–</span>
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
