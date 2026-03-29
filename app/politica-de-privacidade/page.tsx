import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Escalei Digital",
  robots: { index: false },
};

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-[#F4F5F3] py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-sm text-[#4E555B] hover:text-[#0E261B] transition-colors mb-8 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold text-[#111111] mb-8">Política de Privacidade</h1>
        <div className="bg-white rounded-xl p-8 text-[#4E555B] leading-relaxed space-y-6 text-sm">
          <p>
            A Escalei Digital valoriza a privacidade de seus visitantes e clientes. Esta política descreve como coletamos,
            usamos e protegemos as informações pessoais fornecidas ao acessar nosso site.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Coleta de dados</h2>
          <p>
            Coletamos informações como nome, e-mail e telefone apenas quando fornecidas voluntariamente por meio de
            formulários de contato ou interações via WhatsApp.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Uso das informações</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para fins comerciais e de atendimento — jamais são
            vendidas ou compartilhadas com terceiros sem consentimento.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Cookies</h2>
          <p>
            Utilizamos cookies para análise de tráfego e rastreamento de conversões (Meta Pixel, Google Analytics).
            Consulte nossa <Link href="/politica-de-cookies" className="underline">Política de Cookies</Link> para mais detalhes.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Seus direitos (LGPD)</h2>
          <p>
            Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail{" "}
            <a href="mailto:contato@escaleidigital.com.br" className="underline">contato@escaleidigital.com.br</a>.
          </p>
          <p className="text-xs text-[#C4CBD1]">Última atualização: {new Date().getFullYear()}.</p>
        </div>
      </div>
    </div>
  );
}
