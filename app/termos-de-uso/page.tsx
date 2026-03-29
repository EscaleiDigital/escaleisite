import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Escalei Digital",
  robots: { index: false },
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-[#F4F5F3] py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="text-sm text-[#4E555B] hover:text-[#0E261B] transition-colors mb-8 inline-block">
          ← Voltar
        </Link>
        <h1 className="text-3xl font-bold text-[#111111] mb-8">Termos de Uso</h1>
        <div className="bg-white rounded-xl p-8 text-[#4E555B] leading-relaxed space-y-6 text-sm">
          <p>
            Ao acessar este site, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos que
            não utilize o site.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Uso do site</h2>
          <p>
            O conteúdo deste site é de propriedade exclusiva da Escalei Digital e não pode ser reproduzido,
            distribuído ou utilizado sem autorização prévia e por escrito.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Limitação de responsabilidade</h2>
          <p>
            A Escalei Digital não se responsabiliza por danos decorrentes do uso indevido das informações disponíveis
            neste site.
          </p>
          <h2 className="text-base font-bold text-[#111111]">Foro</h2>
          <p>
            Fica eleito o foro da comarca de Curitiba/PR para dirimir quaisquer controvérsias decorrentes destes
            termos.
          </p>
          <p className="text-xs text-[#C4CBD1]">Última atualização: {new Date().getFullYear()}.</p>
        </div>
      </div>
    </div>
  );
}
