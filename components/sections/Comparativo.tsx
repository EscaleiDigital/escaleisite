const agencia = [
  "Foco em entrega isolada",
  "Visão parcial da operação",
  "Menos integração entre marketing e vendas",
  "Pouca profundidade em CRM",
  "Pouca estrutura comercial",
  "Menos previsibilidade",
];

const escalei = [
  "Aquisição + comercial + CRM + métricas",
  "Visão integrada da operação",
  "Treinamento e organização comercial",
  "Leitura de gargalos",
  "Rotina de performance",
  "Estrutura feita para crescer com mais consistência",
];

export default function Comparativo() {
  return (
    <section className="bg-[#F4F5F3] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111111] leading-tight mb-5">
            Agência comum executa partes. A Escalei estrutura a operação.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Agência comum */}
          <div className="bg-white rounded-xl p-10 border border-[#F4F5F3]">
            <h3 className="text-base font-bold text-[#C4CBD1] mb-6 tracking-wide uppercase text-sm">
              Agência comum
            </h3>
            <ul className="flex flex-col gap-4">
              {agencia.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#F4F5F3] flex items-center justify-center text-[#C4CBD1] text-xs font-bold">
                    –
                  </span>
                  <span className="text-sm text-[#4E555B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Escalei */}
          <div className="bg-[#0E261B] rounded-xl p-10 border border-[#0E261B]">
            <h3 className="text-base font-bold text-white/40 mb-6 tracking-wide uppercase text-sm">
              Escalei
            </h3>
            <ul className="flex flex-col gap-4">
              {escalei.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#0C6201] text-sm font-bold">✓</span>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-sm text-[#4E555B] border-l-2 border-[#C4CBD1] pl-4">
          Contratar fornecedores separados custa mais tempo, mais desalinhamento e menos velocidade de evolução.
        </p>
      </div>
    </section>
  );
}
