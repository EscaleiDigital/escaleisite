import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-white bg-opacity-5 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <TrendingUp className="w-4 h-4 text-primary-glow" />
            <span className="text-sm font-medium">+300% ROI Comprovado</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transforme Cliques em
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Vendas Recorrentes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Especialistas em <strong>Meta Ads</strong>, <strong>Google Ads</strong>, <strong>Google Meu Negócio</strong> e <strong>Automações WhatsApp</strong> que geram resultados reais para seu negócio
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Target className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold text-yellow-300">+500</span>
              </div>
              <p className="text-sm text-white/80">Campanhas Otimizadas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold text-yellow-300">95%</span>
              </div>
              <p className="text-sm text-white/80">Taxa de Satisfação</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold text-yellow-300">+200</span>
              </div>
              <p className="text-sm text-white/80">Empresas Atendidas</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contato">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 rounded-full font-semibold group"
              >
                Quero Aumentar Minhas Vendas
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Trust indicator */}
          <p className="text-sm text-white/70 mt-6">
            ✅ Consultoria gratuita • ✅ Resultados comprovados
          </p>

          {/* Dashboard Image */}
          <div className="mt-12">
            <img
              src={heroDashboard}
              alt="Dashboard de resultados com Meta Ads e Google Ads"
              className="mx-auto rounded-2xl shadow-2xl border border-white/20 max-w-4xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
