import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            {/* Logo */}
            <a href="/" className="inline-flex items-center" aria-label="Escalei Digital">
              <img
                src="/brand/logo-escalei-footer.png"
                alt="Escalei Digital"
                className="h-8 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="text-sm text-white/70 leading-relaxed">
              Transformamos cliques em vendas recorrentes através de estratégias comprovadas
              em Meta Ads, Google Ads e automações inteligentes.
            </p>

            {/* Social + Badge Kommo */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/escaleidigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram Escalei Digital"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.kommo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:opacity-80 transition"
                aria-label="Parceiro Kommo"
              >
                <img
                  src="/partners/kommo-badge.svg"
                  alt="Parceiro Kommo"
                  className="h-8 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Meta Ads</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Google Ads</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Google Meu Negócio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automações WhatsApp</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>(41) 98530-3955</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@escaleidigital.com.br</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © 2024 Escalei Digital. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
