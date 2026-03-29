import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0E261B] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Coluna 1 — Marca */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/logo.png"
              alt="Escalei Digital"
              width={140}
              height={40}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              A Escalei estrutura Máquinas de Vendas para empresas que buscam mais performance, previsibilidade e escala.
            </p>
          </div>

          {/* Coluna 2 — Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40">Contato</h3>
            <a
              href="https://wa.me/5541991071030"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              WhatsApp (41) 99107-1030
            </a>
            <a
              href="mailto:contato@escaleidigital.com.br"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              contato@escaleidigital.com.br
            </a>
            <a
              href="https://instagram.com/escaleidigital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              @escaleidigital
            </a>
            <p className="text-sm text-white/50">
              Sede em Curitiba, PR · Atendimento em todo o Brasil
            </p>
          </div>

          {/* Coluna 3 — Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white/40">Legal</h3>
            <Link href="/politica-de-privacidade" className="text-sm text-white/70 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/politica-de-cookies" className="text-sm text-white/70 hover:text-white transition-colors">
              Política de Cookies
            </Link>
            <Link href="/termos-de-uso" className="text-sm text-white/70 hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 text-center">
            © {new Date().getFullYear()} Escalei Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
