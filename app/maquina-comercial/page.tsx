import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Search,
  Stethoscope,
  ClipboardList,
  GraduationCap,
  FileText,
  BookOpen,
  Target,
  Users,
  Workflow,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "Método Máquina Comercial — Escalei Digital",
  description:
    "Organize o comercial da sua empresa para vender com mais processo, menos improviso e mais previsibilidade. Em até 30 dias.",
};

const WHATSAPP_URL =
  "https://wa.me/5541991071030?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20M%C3%A9todo%20M%C3%A1quina%20Comercial";

function CTAButton({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5";
  const styles: Record<string, string> = {
    primary:
      "bg-[var(--mmc-emerald-deep)] text-[var(--mmc-ink-fg)] hover:opacity-90",
    light: "bg-[var(--mmc-offwhite)] text-[oklch(0.18_0.01_240)] hover:bg-white shadow-[var(--mmc-shadow-card)]",
    ghost:
      "border border-[oklch(0.18_0.01_240_/_0.15)] bg-transparent text-[oklch(0.18_0.01_240)] hover:bg-[oklch(0.18_0.01_240)] hover:text-[var(--mmc-ink-fg)]",
  };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
      style={{ boxShadow: variant === "primary" ? "var(--mmc-shadow-emerald)" : undefined }}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="w-full max-w-[72rem] mx-auto px-5 flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <Image
            src="/images/escalei-logo-mmc.png"
            alt="Escalei Digital"
            width={120}
            height={48}
            className="h-12 w-auto"
          />
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-[var(--mmc-ink-fg)] backdrop-blur-md transition hover:bg-white/10"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden text-[var(--mmc-ink-fg)]"
      style={{ backgroundColor: "var(--mmc-ink)" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.42 0.12 158 / 0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, oklch(0.50 0.14 158 / 0.20), transparent 60%)",
        }}
      />
      <Image
        src="/images/hero-funnel.jpg"
        alt=""
        aria-hidden
        fill
        className="pointer-events-none absolute right-0 top-0 h-full w-[60%] object-cover opacity-25 mix-blend-screen [mask-image:linear-gradient(to_left,black,transparent)]"
        style={{ width: "60%", left: "auto" }}
      />

      <Header />

      <div className="w-full max-w-[72rem] mx-auto px-5 relative pt-20 pb-24 sm:pt-24 sm:pb-32">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
            style={{
              borderColor: "oklch(0.55 0.15 158 / 0.3)",
              backgroundColor: "oklch(0.38 0.10 158 / 0.2)",
              color: "var(--mmc-emerald-glow)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--mmc-emerald-glow)" }}
            />
            Estruturação comercial
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Método{" "}
            <span style={{ color: "var(--mmc-emerald-glow)" }}>
              Máquina Comercial
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">
            Organize o comercial da sua empresa para vender com mais processo,
            menos improviso e mais previsibilidade.
          </p>

          <p className="mt-5 max-w-2xl text-base text-white/60">
            Em até 30 dias, seu comercial deixa de vender no improviso e passa
            a entregar resultado.
          </p>

          <div
            className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl border border-white/10 px-4 py-3 text-sm text-white/85 backdrop-blur-sm"
            style={{ backgroundColor: "oklch(1 0 0 / 0.05)" }}
          >
            <span className="font-semibold" style={{ color: "var(--mmc-emerald-glow)" }}>
              Inclui:
            </span>
            <span>Diagnóstico</span>{" "}
            <span className="text-white/30">•</span>
            <span>Plano de ação</span>{" "}
            <span className="text-white/30">•</span>
            <span>Treinamento</span>{" "}
            <span className="text-white/30">•</span>
            <span>Scripts</span>{" "}
            <span className="text-white/30">•</span>
            <span>Playbook</span>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3">
            <CTAButton>Quero estruturar meu comercial</CTAButton>
            <p className="max-w-md text-xs text-white/55">
              Fale conosco e entenda como vamos transformar seus resultados.
            </p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.55 0.15 158 / 0.4), transparent)",
        }}
      />
    </section>
  );
}

function PainSection() {
  const bullets = [
    "Leads chegam, mas não são bem conduzidos.",
    "O atendimento muda de acordo com quem responde.",
    "A equipe esquece follow-up.",
    "Não existe script claro de abordagem.",
    "O CRM, quando existe, não é usado do jeito certo.",
    "O dono precisa cobrar tudo o tempo todo.",
    "Boas oportunidades são perdidas por falta de método.",
  ];
  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--mmc-bg)" }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-5">
        <div className="max-w-3xl">
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--mmc-emerald-deep)" }}
          >
            01 — O problema
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Seu comercial ainda depende do improviso?
          </h2>
          <p
            className="mt-6 text-lg"
            style={{ color: "var(--mmc-muted-fg)" }}
          >
            Muitas empresas até conseguem gerar demanda. O problema começa
            depois que o lead chega.
          </p>
          <p className="mt-3 text-base" style={{ color: "var(--mmc-muted-fg)" }}>
            Sem processo, cada pessoa atende de um jeito, o follow-up é
            esquecido, as propostas ficam sem retorno e o dono não sabe
            exatamente onde as vendas estão sendo perdidas.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b) => (
            <li
              key={b}
              className="group flex items-start gap-3 rounded-xl border p-5 transition hover:shadow-[var(--mmc-shadow-elevated)]"
              style={{
                borderColor: "var(--mmc-border)",
                backgroundColor: "var(--mmc-card)",
                boxShadow: "var(--mmc-shadow-card)",
              }}
            >
              <AlertTriangle
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: "var(--mmc-emerald-deep)" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--mmc-graphite)" }}
              >
                {b}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="mt-12 overflow-hidden rounded-2xl p-8 sm:p-12"
          style={{ backgroundColor: "var(--mmc-ink)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="hidden h-12 w-1 rounded-full sm:block"
              style={{ backgroundColor: "var(--mmc-emerald-glow)" }}
            />
            <p
              className="text-2xl font-semibold leading-snug sm:text-3xl"
              style={{ color: "var(--mmc-ink-fg)" }}
            >
              O problema nem sempre é falta de lead.
              <br />
              <span style={{ color: "var(--mmc-emerald-glow)" }}>
                Muitas vezes, é falta de máquina comercial.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const steps = [
    { icon: Search, title: "Mapear", desc: "Como o comercial funciona hoje." },
    { icon: Stethoscope, title: "Diagnosticar", desc: "Onde estão os gargalos." },
    { icon: ClipboardList, title: "Planejar", desc: "O que precisa ser ajustado." },
    { icon: GraduationCap, title: "Treinar", desc: "O time para executar com método." },
    { icon: BookOpen, title: "Documentar", desc: "Scripts e playbook do processo." },
  ];
  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--mmc-secondary)" }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-5">
        <div className="max-w-3xl">
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--mmc-emerald-deep)" }}
          >
            02 — A solução
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            O que é o Método Máquina Comercial
          </h2>
          <p className="mt-6 text-lg" style={{ color: "var(--mmc-muted-fg)" }}>
            Uma estruturação pontual criada para organizar o processo de vendas
            da empresa. A gente entra, mapeia como o comercial funciona hoje,
            identifica os gargalos, cria um plano de ação, treina a equipe e
            entrega scripts + playbook para o time vender com mais clareza,
            padrão e acompanhamento.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border p-6 transition hover:-translate-y-1"
              style={{
                borderColor: "var(--mmc-border)",
                backgroundColor: "var(--mmc-card)",
                boxShadow: "var(--mmc-shadow-card)",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "oklch(0.38 0.10 158 / 0.1)",
                    color: "var(--mmc-emerald-deep)",
                  }}
                >
                  <s.icon className="h-5 w-5" />
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--mmc-muted-fg)" }}
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm" style={{ color: "var(--mmc-muted-fg)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-10 max-w-2xl text-xl font-medium"
          style={{ color: "var(--mmc-graphite)" }}
        >
          Você sai com um comercial mais organizado, documentado e pronto para
          ser acompanhado.
        </p>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  const items = [
    {
      icon: Search,
      title: "Mapeamento comercial",
      desc: "Entendimento do processo atual de atendimento, vendas, follow-up e fechamento.",
    },
    {
      icon: Stethoscope,
      title: "Diagnóstico dos gargalos",
      desc: "Identificação dos pontos onde a empresa está perdendo oportunidades.",
    },
    {
      icon: ClipboardList,
      title: "Plano de ação",
      desc: "Direcionamento prático do que precisa ser ajustado na rotina comercial.",
    },
    {
      icon: GraduationCap,
      title: "Treinamento dos vendedores",
      desc: "Encontro prático para alinhar abordagem, condução, objeções e fechamento.",
    },
    {
      icon: FileText,
      title: "Scripts comerciais",
      desc: "Modelos de mensagens para atendimento, follow-up, proposta, objeções e recuperação de leads.",
    },
    {
      icon: BookOpen,
      title: "Playbook comercial",
      desc: "Documento final com o processo, padrões, scripts e boas práticas para o time seguir.",
    },
  ];
  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--mmc-bg)" }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-5">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--mmc-emerald-deep)" }}
            >
              03 — Entregas
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              O que está incluso
            </h2>
          </div>
          <CTAButton variant="ghost">Quero vender com mais processo</CTAButton>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="group flex gap-5 rounded-2xl border p-7 transition hover:-translate-y-0.5"
              style={{
                borderColor: "var(--mmc-border)",
                backgroundColor: "var(--mmc-card)",
                boxShadow: "var(--mmc-shadow-card)",
              }}
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition group-hover:opacity-90"
                style={{
                  backgroundColor: "var(--mmc-ink)",
                  color: "var(--mmc-emerald-glow)",
                }}
              >
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p
                  className="mt-1.5 text-sm leading-relaxed"
                  style={{ color: "var(--mmc-muted-fg)" }}
                >
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhomSection() {
  const items = [
    "Negócios que possuem vendedores e time comercial.",
    "Empresas que vendem pelo WhatsApp, ligação, direct ou CRM.",
    "Operações que trabalham com orçamento, proposta ou venda consultiva.",
    "Donos que querem parar de depender do improviso comercial.",
    "Empresas que querem organizar o comercial antes de investir mais em tráfego.",
  ];
  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--mmc-secondary)" }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-5 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--mmc-emerald-deep)" }}
          >
            04 — Para quem é
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Para quem é
          </h2>
          <p className="mt-6 text-lg" style={{ color: "var(--mmc-muted-fg)" }}>
            Para empresas que já vendem, já recebem oportunidades, mas sentem
            que o comercial ainda não funciona com método.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm">
            <Target
              className="h-5 w-5"
              style={{ color: "var(--mmc-emerald-deep)" }}
            />
            <Users
              className="h-5 w-5"
              style={{ color: "var(--mmc-emerald-deep)" }}
            />
            <Workflow
              className="h-5 w-5"
              style={{ color: "var(--mmc-emerald-deep)" }}
            />
          </div>
        </div>

        <ul className="space-y-3 lg:col-span-7">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-start gap-4 rounded-xl border p-5"
              style={{
                borderColor: "var(--mmc-border)",
                backgroundColor: "var(--mmc-card)",
                boxShadow: "var(--mmc-shadow-card)",
              }}
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: "var(--mmc-emerald-deep)" }}
              />
              <span
                className="text-base"
                style={{ color: "var(--mmc-graphite)" }}
              >
                {it}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Diagnóstico",
      desc: "Avaliamos como os leads chegam, como são atendidos e onde estão sendo perdidos.",
    },
    {
      title: "Plano de ação",
      desc: "Organizamos as prioridades e os ajustes necessários no processo comercial.",
    },
    {
      title: "Treinamento",
      desc: "Treinamos o time para conduzir melhor os leads, fazer follow-up e aumentar conversão.",
    },
    {
      title: "Scripts e playbook",
      desc: "Entregamos os materiais para padronizar o atendimento e dar clareza para a equipe.",
    },
    {
      title: "Encerramento do projeto",
      desc: "Entrou, fez, entregou. A empresa sai com o comercial estruturado e pode seguir sozinha ou avançar para um acompanhamento mensal.",
    },
  ];
  return (
    <section
      className="relative py-24 sm:py-32"
      style={{ backgroundColor: "var(--mmc-ink)", color: "var(--mmc-ink-fg)" }}
    >
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="w-full max-w-[72rem] mx-auto px-5 relative">
        <div className="max-w-3xl">
          <span
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: "var(--mmc-emerald-glow)" }}
          >
            05 — Como funciona
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Como funciona na prática
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Entrega prática. Comercial mais organizado.{" "}
            <span style={{ color: "var(--mmc-emerald-glow)" }}>
              Resultados rápidos.
            </span>
          </p>
        </div>

        <ol className="mt-16 relative">
          <div
            className="absolute left-5 top-2 bottom-2 w-px md:left-6"
            aria-hidden
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.55 0.15 158 / 0.6), oklch(0.55 0.15 158 / 0.2), transparent)",
            }}
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6 pb-10 last:pb-0">
              <div
                className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold md:h-12 md:w-12 md:text-base"
                style={{
                  borderColor: "oklch(0.55 0.15 158 / 0.4)",
                  backgroundColor: "var(--mmc-ink)",
                  color: "var(--mmc-emerald-glow)",
                }}
              >
                {i + 1}
              </div>
              <div className="pt-1.5 md:pt-2">
                <h3 className="text-xl font-semibold sm:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--mmc-bg)" }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-5">
        <div
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 lg:p-20"
          style={{ backgroundColor: "var(--mmc-ink)" }}
        >
          <div
            className="absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.42 0.12 158 / 0.35), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 100%, oklch(0.50 0.14 158 / 0.20), transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-50"
            aria-hidden
            style={{
              backgroundImage:
                "linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative max-w-3xl">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: "oklch(0.55 0.15 158 / 0.3)",
                backgroundColor: "oklch(0.38 0.10 158 / 0.2)",
                color: "var(--mmc-emerald-glow)",
              }}
            >
              Próximo passo
            </span>
            <h2
              className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{ color: "var(--mmc-ink-fg)" }}
            >
              Quer transformar seu comercial em uma{" "}
              <span style={{ color: "var(--mmc-emerald-glow)" }}>
                máquina mais organizada?
              </span>
            </h2>
            <p className="mt-6 text-lg text-white/75">
              Se sua empresa já vende, mas ainda perde oportunidades por falta
              de processo, atendimento, follow-up ou rotina comercial, o Método
              Máquina Comercial pode ser o próximo passo.
            </p>
            <p className="mt-3 text-base text-white/60">
              Clique no botão abaixo e chame no WhatsApp para entender como
              funciona.
            </p>

            <div className="mt-10 flex flex-col items-start gap-3">
              <CTAButton variant="primary">
                Quero saber mais pelo WhatsApp
              </CTAButton>
              <p className="text-xs text-white/55">
                Transforme vendedores numa Máquina de Vendas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--mmc-border)",
        backgroundColor: "var(--mmc-ink)",
        color: "var(--mmc-ink-fg)",
      }}
    >
      <div className="w-full max-w-[72rem] mx-auto px-5 flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/escalei-logo-mmc.png"
            alt="Escalei Digital"
            width={90}
            height={36}
            className="h-8 w-auto sm:h-9"
          />
          <span className="text-sm font-semibold" style={{ color: "var(--mmc-ink-fg)" }}>
            Máquina Comercial{" "}
            <span className="text-white/40">|</span>{" "}
            <span style={{ color: "var(--mmc-emerald-glow)" }}>Escalei Digital</span>
          </span>
        </div>
        <div className="flex flex-col items-start gap-1 text-xs text-white/55 sm:items-end">
          <p>CNPJ 37.433.738/0001-52</p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t p-3 backdrop-blur-md sm:hidden"
      style={{
        borderColor: "var(--mmc-border)",
        backgroundColor: "oklch(0.99 0.005 95 / 0.95)",
      }}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold"
        style={{
          backgroundColor: "var(--mmc-emerald-deep)",
          color: "var(--mmc-ink-fg)",
          boxShadow: "var(--mmc-shadow-emerald)",
        }}
      >
        <MessageCircle className="h-4 w-4" />
        Falar no WhatsApp
      </a>
    </div>
  );
}

export default function MaquinaComercialPage() {
  return (
    <div className="mmc-page min-h-screen pb-20 sm:pb-0">
      <Hero />
      <PainSection />
      <MethodSection />
      <DeliverablesSection />
      <ForWhomSection />
      <HowItWorksSection />
      <FinalCTA />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
