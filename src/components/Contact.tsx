import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Zap,
  Users,
  Target
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Análise Gratuita",
    description: "Auditoria completa dos seus canais digitais sem custo"
  },
  {
    icon: Target,
    title: "Estratégia Personalizada",
    description: "Plano de ação exclusivo para o seu negócio"
  },
  {
    icon: Zap,
    title: "Implementação Rápida",
    description: "Primeiros resultados em até 30 dias"
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Gestor de conta exclusivo para acompanhar resultados"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-section" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Vamos Conversar
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-primary">Escalar</span>
              <br />Seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos aumentar 
              seu faturamento
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="shadow-card border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Solicitar Consultoria Gratuita
                </CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://formsubmit.co/contato@escaleidigital.com.br"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Redirecionamento após envio */}
                  <input type="hidden" name="_next" value="https://escaleidigital.com.br/obrigado" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input 
                        id="name" 
                        name="Nome"
                        placeholder="Seu nome"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">WhatsApp *</Label>
                      <Input 
                        id="phone" 
                        name="Telefone"
                        placeholder="(11) 99999-9999"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      name="Email"
                      type="email" 
                      placeholder="seu@email.com"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Nome da Empresa</Label>
                    <Input 
                      id="company" 
                      name="Empresa"
                      placeholder="Nome da sua empresa"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="revenue">Faturamento Mensal</Label>
                    <select 
                      name="Faturamento" 
                      className="w-full mt-1 p-3 border border-input rounded-md bg-background"
                    >
                      <option value="">Selecione uma faixa</option>
                      <option value="0-10k">Até R$ 10.000</option>
                      <option value="10-50k">R$ 10.000 - R$ 50.000</option>
                      <option value="50-100k">R$ 50.000 - R$ 100.000</option>
                      <option value="100k+">Acima de R$ 100.000</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Descreva seu Desafio</Label>
                    <Textarea 
                      id="message" 
                      name="Desafio"
                      placeholder="Conte-nos sobre seus principais desafios em marketing digital..."
                      className="mt-1"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full shadow-primary text-lg py-6">
                    <Zap className="w-5 h-5 mr-2" />
                    Quero Minha Consultoria Gratuita
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Seus dados estão seguros. Não fazemos spam.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6">O que você vai receber:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-primary/10">
                      <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl">Outras Formas de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">(41) 98530-3955</p>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">contato@escaleidigital.com.br</p>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Atendimento</p>
                      <p className="text-sm text-muted-foreground">Segunda à Sexta, 8h às 18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgency */}
              <div className="bg-primary text-white p-6 rounded-lg">
                <h4 className="font-bold mb-2">🔥 Oferta Limitada</h4>
                <p className="text-sm">
                  <strong>Consultorias gratuitas limitadas a 10 empresas por mês.</strong>
                  {" "}Reserve já a sua vaga!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
