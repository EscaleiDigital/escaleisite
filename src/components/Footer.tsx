import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">
                ESCALEI<span className="text-primary">DIGITAL</span>
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Transformamos cliques em vendas recorrentes através de estratégias comprovadas 
              em Meta Ads, Google Ads e automações inteligentes.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/escaleidigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
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
                <span>(41) 99236-9273</span>
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
