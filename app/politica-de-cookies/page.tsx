import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Escalei Digital",
  robots: { index: false },
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-[#F4F5F3] py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-sm text-[#4E555B] hover:text-[#0E261B] transition-colors mb-8 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold text-[#111111] mb-8">Política de Cookies</h1>
        <div className="bg-white rounded-xl p-8 text-[#4E555B] leading-relaxed space-y-6 text-sm">
          <p>
            Utilizamos cookies para melhorar a experiência de navegação, analisar o tráfego do site e mensurar o
            desempenho de nossas campanhas de marketing.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Tipos de cookies utilizados</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
            <li><strong>Cookies analíticos:</strong> Google Analytics (GA4) para análise de tráfego anônimo.</li>
            <li><strong>Cookies de marketing:</strong> Meta Pixel para rastreamento de conversões e retargeting.</li>
          </ul>
          <h2 className="text-base font-bold text-[#111111]">Como gerenciar cookies</h2>
          <p>
            Você pode desativar cookies nas configurações do seu navegador. Observe que desativar cookies pode afetar
            algumas funcionalidades do site.
          </p>
          <p className="text-xs text-[#C4CBD1]">Última atualização: {new Date().getFullYear()}.</p>
        </div>
      </div>
    </div>
  );
}
