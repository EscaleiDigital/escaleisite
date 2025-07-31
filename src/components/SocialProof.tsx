import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingUp, Users, Target } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "E-commerce de Roupas",
    result: "+450% de vendas online",
    text: "Em 6 meses, saímos de R$ 15k para R$ 68k em faturamento mensal. O trabalho com Meta Ads foi excepcional!",
    rating: 5,
    image: "CS"
  },
  {
    name: "Marina Costa",
    company: "Clínica Odontológica",
    result: "+200% agendamentos",
    text: "O Google Meu Negócio otimizado trouxe uma avalanche de pacientes. Agenda sempre lotada!",
    rating: 5,
    image: "MC"
  },
  {
    name: "Roberto Oliveira",
    company: "Consultoria Empresarial",
    result: "+300% leads qualificados",
    text: "As automações do WhatsApp revolucionaram nosso atendimento. Não perdemos mais nenhum lead!",
    rating: 5,
    image: "RO"
  }
];

const stats = [
  {
    icon: TrendingUp,
    value: "R$ 2.8M",
    label: "Faturamento Gerado",
    description: "Para nossos clientes em 2024"
  },
  {
    icon: Users,
    value: "95%",
    label: "Taxa de Retenção",
    description: "Clientes satisfeitos que renovam"
  },
  {
    icon: Target,
    value: "3.2x",
    label: "ROI Médio",
    description: "Retorno sobre investimento"
  }
];

const SocialProof = () => {
  return (
    <section id="resultados" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Resultados Comprovados
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mais de <span className="text-primary">200 Empresas</span>
            <br />Já Transformaram Seus Resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre os resultados que alcançaram conosco
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-primary/10 hover:shadow-card transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-primary transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Result Badge */}
                <Badge className="mt-4 bg-primary/10 text-primary border-primary/20">
                  {testimonial.result}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Removed trust elements as solicitado */}
      </div>
    </section>
  );
};

export default SocialProof;
