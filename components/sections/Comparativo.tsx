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
          <h2 className="text-2xl lg:text-3xl font-bold text-[#111111] leading-tight">
            Enquanto as agências executam partes,<br />
            <span className="text-[#0E261B]">a Escalei estrutura a sua operação.</span>
          </h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {/* Agência comum */}
          <div className="bg-white rounded-xl p-10 border border-[#E0E3DF]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#0C6201] mb-7">
              Agência comum
            </h3>
            <ul className="flex flex-col gap-4">
              {agencia.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-[#F4F5F3] border border-[#C4CBD1] flex items-center justify-center text-[#C4CBD1] text-xs font-bold leading-none">
                    –
                  </span>
                  <span className="text-sm text-[#4E555B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Escalei */}
          <div className="bg-[#0E261B] rounded-xl p-10">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C4CBD1] mb-7">
              Escalei
            </h3>
            <ul className="flex flex-col gap-4">
              {escalei.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#0C6201] font-bold text-sm">✓</span>
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-[#C4CBD1] rounded-full shrink-0" />
          <p className="text-sm text-[#4E555B]">
            Contratar fornecedores separados custa mais tempo, mais desalinhamento e menos velocidade de evolução.
          </p>
        </div>
      </div>
    </section>
  );
}
