"use client";

import { Badge } from "@/components/ui/badge";

const services = [
  {
    badge: "Popular",
    title: "Tráfego Pago",
    description: "Geramos leads todos os dias para seu negócio através de anúncios otimizados.",
  },
  {
    badge: "Novo",
    title: "Funil de Vendas",
    description: "Estruturamos o caminho ideal para transformar visitantes em clientes.",
  },
  {
    badge: "Recomendado",
    title: "Automações no WhatsApp",
    description: "Transforme seu WhatsApp em uma máquina de atendimento e vendas 24h.",
  },
  {
    badge: "Eficiente",
    title: "Google Meu Negócio",
    description: "Apareça para quem está te procurando e conquiste mais clientes locais.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Soluções Completas para{" "}
            <span className="block text-primary">Escalar Seu Negócio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada serviço é estrategicamente desenhado para maximizar seus
            resultados e criar um sistema de vendas que funciona 24/7
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group hover:shadow-primary transition-all duration-300 overflow-hidden rounded-xl border border-border bg-card p-6"
            >
              {service.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-primary text-white">
                  {service.badge}
                </Badge>
              )}
              <div className="pb-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
