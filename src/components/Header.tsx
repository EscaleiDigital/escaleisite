import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo Escalei Digital" className="h-44 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-base font-bold hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#resultados" className="text-base font-bold hover:text-primary transition-colors">
              Resultados
            </a>
            <a href="#contato" className="text-base font-bold hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA WhatsApp Button */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5541992369273?text=Ol%C3%A1!%20Quero%20escalar%20os%20meus%20resultados."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (41) 99236-9273
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              <a
                href="#servicos"
                className="block px-4 py-2 text-base font-bold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#resultados"
                className="block px-4 py-2 text-base font-bold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resultados
              </a>
              <a
                href="#cases"
                className="block px-4 py-2 text-base font-bold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cases
              </a>
              <a
                href="#contato"
                className="block px-4 py-2 text-base font-bold hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="px-4 pt-2">
                <a
                  href="https://wa.me/5541992369273?text=Ol%C3%A1!%20Quero%20escalar%20os%20meus%20resultados."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (41) 99236-9273
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
