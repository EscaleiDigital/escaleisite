"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Play,
  Scissors,
  Captions,
  Music2,
  Palette,
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Target,
  Smartphone,
  Volume2,
  Image as ImageIcon,
  Check,
  ArrowRight,
  MessageCircle,
  Quote,
  Star,
  ChevronDown,
  Pause,
} from "lucide-react";

export default function VideosPage() {
  return (
    <div className="vp-page min-h-screen">
      <GoogleFonts />
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucao />
        <Incluso />
        <Portfolio />
        <Oferta />
        <Comparacao />
        <ComoFunciona />
        <Depoimentos />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ─── Constants ─────────────────────────────────────────────────────────── */

const LINK_PACOTE   = "https://mpago.la/2VMdoZE";
const LINK_AVULSO   = "https://mpago.la/2U8x8LP";
const LINK_WHATSAPP = "https://wa.me/5541991071030?text=Ol%C3%A1!%20Quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20edi%C3%A7%C3%B5es%20de%20v%C3%ADdeo";
const LINK_INSTAGRAM = "https://instagram.com/escaleidigital";
const LINK_PORTFOLIO = "https://www.behance.net/gallery/145808107/Edicao-Instagram-OnTime";

/* ─── Google Fonts loader ───────────────────────────────────────────────── */

function GoogleFonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');
    `}</style>
  );
}

/* ─── Primitive UI components (inline — no shadcn dependency) ───────────── */

function Btn({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };
  const variants = {
    primary: "text-[var(--vp-primary-fg)] shadow-[var(--vp-shadow-premium)]",
    outline: "border bg-transparent text-[var(--vp-fg)] hover:bg-[var(--vp-secondary)]",
    ghost:   "bg-transparent text-[var(--vp-fg)] hover:bg-[var(--vp-secondary)]",
  };

  const style =
    variant === "primary"
      ? { backgroundColor: "var(--vp-primary)", borderColor: "transparent" }
      : variant === "outline"
      ? { borderColor: "oklch(0.72 0.17 160 / 0.4)" }
      : {};

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>
        {children}
      </a>
    );
  return (
    <button className={cls} style={style}>
      {children}
    </button>
  );
}

function Card({
  children,
  className = "",
  premium = false,
}: {
  children: React.ReactNode;
  className?: string;
  premium?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border overflow-hidden ${className}`}
      style={{
        borderColor: premium ? "oklch(0.72 0.17 160 / 0.4)" : "var(--vp-border)",
        background: "var(--vp-gradient-card)",
        boxShadow: premium ? "var(--vp-shadow-premium)" : "var(--vp-shadow-card)",
      }}
    >
      {children}
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
      style={{
        borderColor: "oklch(0.72 0.17 160 / 0.3)",
        backgroundColor: "oklch(0.72 0.17 160 / 0.1)",
        color: "var(--vp-primary)",
      }}
    >
      <Sparkles className="h-3 w-3" />
      {children}
    </span>
  );
}

/* ─── Paused-video mockup (real images) ────────────────────────────────── */

const reelScenes = [
  {
    tilt: "-rotate-6 -translate-y-4",
    src: "/images/reel-01.jpg",
    label: "Reel 01",
    caption: "ATENÇÃO",
    progress: 45,
    time: "0:23",
    accent: "oklch(0.72 0.17 160)",
  },
  {
    tilt: "rotate-2 translate-y-2 scale-105 z-10",
    src: "/images/reel-02.jpg",
    label: "Reel 02",
    caption: "RESULTADOS",
    progress: 62,
    time: "0:41",
    accent: "oklch(0.78 0.09 80)",
  },
  {
    tilt: "rotate-6 -translate-y-2",
    src: "/images/reel-03.jpg",
    label: "Reel 03",
    caption: "SAIBA MAIS",
    progress: 30,
    time: "0:18",
    accent: "oklch(0.72 0.17 160)",
  },
];

function ReelMockup({ scene }: { scene: typeof reelScenes[number] }) {
  const bars = Array.from({ length: 16 });
  const filled = Math.round((scene.progress / 100) * bars.length);

  return (
    <div
      className={`group relative aspect-[9/16] w-1/3 transform rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-110 ${scene.tilt}`}
      style={{
        borderColor: "oklch(1 0 0 / 0.12)",
        boxShadow: "var(--vp-shadow-card)",
      }}
    >
      {/* imagem real de fundo */}
      <Image
        src={scene.src}
        alt={scene.label}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 33vw, 200px"
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />

      {/* top label */}
      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur z-10">
        <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: scene.accent }} />
        {scene.label}
      </div>

      {/* pause icon — center */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-sm"
          style={{ boxShadow: `0 0 24px ${scene.accent}80` }}
        >
          <Pause className="h-4 w-4 fill-white text-white" />
        </div>
      </div>

      {/* caption */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2 py-0.5 text-[9px] font-bold text-black z-10">
        {scene.caption}
      </div>

      {/* timestamp */}
      <div className="absolute bottom-6 right-2 text-[9px] font-mono text-white/70 z-10">
        {scene.time}
      </div>

      {/* progress bar */}
      <div className="absolute bottom-2 left-2 right-2 flex gap-0.5 z-10">
        {bars.map((_, j) => (
          <div
            key={j}
            className="h-1 flex-1 rounded-full"
            style={{ backgroundColor: j < filled ? scene.accent : "oklch(1 0 0 / 0.25)" }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="absolute inset-0 -z-10 rounded-[3rem] blur-3xl"
        style={{ backgroundColor: "oklch(0.72 0.17 160 / 0.2)" }}
      />
      <div className="flex items-end justify-center gap-3 sm:gap-5">
        {reelScenes.map((scene) => (
          <ReelMockup key={scene.label} scene={scene} />
        ))}
      </div>

      {/* floating metric cards */}
      <div
        className="absolute -left-2 top-6 hidden rounded-xl border px-3 py-2 text-xs backdrop-blur sm:block"
        style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.9)" }}
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" style={{ color: "var(--vp-primary)" }} />
          <span className="font-semibold">Mais retenção</span>
        </div>
      </div>
      <div
        className="absolute -right-2 bottom-10 hidden rounded-xl border px-3 py-2 text-xs backdrop-blur sm:block"
        style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.9)" }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4" style={{ color: "var(--vp-accent)" }} />
          <span className="font-semibold">Mais clareza</span>
        </div>
      </div>
      <div
        className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 rounded-xl border px-3 py-2 text-xs backdrop-blur sm:block"
        style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.9)" }}
      >
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" style={{ color: "var(--vp-primary)" }} />
          <span className="font-semibold">Mais frequência</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────────────────── */

function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.5)", backgroundColor: "oklch(0.18 0.02 160 / 0.7)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Image
          src="/images/escalei-logo-mmc.png"
          alt="Escalei Digital"
          width={120}
          height={56}
          className="h-14 w-auto brightness-0 invert -my-3"
        />
        <Btn href={LINK_PACOTE} size="sm">
          Comprar pacote
        </Btn>
      </div>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section
      className="relative overflow-hidden px-5 pb-24 pt-8 sm:pt-12"
      style={{ background: "var(--vp-gradient-hero)" }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div className="space-y-7">
          <SectionTag>Vídeos de alta conversão</SectionTag>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Vídeos profissionais para transformar conteúdo em{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, var(--vp-primary), var(--vp-accent))" }}
            >
              alcance, leads e vendas
            </span>
          </h1>
          <p className="max-w-xl text-lg" style={{ color: "var(--vp-muted-fg)" }}>
            Edite seus vídeos com qualidade, ritmo, legendas, cortes estratégicos e acabamento profissional para fortalecer sua marca, aumentar sua presença digital e gerar mais oportunidades para o seu negócio.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--vp-muted-fg)" }}>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
              style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(1 0 0 / 0.05)" }}
            >
              <Smartphone className="h-3.5 w-3.5" style={{ color: "var(--vp-primary)" }} /> Formato Reels 9:16
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5"
              style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(1 0 0 / 0.05)" }}
            >
              <Clock className="h-3.5 w-3.5" style={{ color: "var(--vp-primary)" }} /> Até 90 segundos por vídeo
            </span>
          </div>

          <div
            className="rounded-2xl border p-5"
            style={{ borderColor: "var(--vp-border)", background: "var(--vp-gradient-card)" }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm uppercase tracking-widest" style={{ color: "var(--vp-muted-fg)" }}>Pacote</span>
              <span className="text-2xl font-bold">5 vídeos</span>
              <span className="text-2xl font-bold" style={{ color: "var(--vp-primary)" }}>R$ 997</span>
            </div>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm uppercase tracking-widest" style={{ color: "var(--vp-muted-fg)" }}>ou avulso</span>
              <span className="text-2xl font-bold">1 vídeo</span>
              <span className="text-2xl font-bold" style={{ color: "var(--vp-accent)" }}>R$ 267</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Btn href={LINK_PACOTE} size="lg" className="sm:flex-1 justify-center">
              Comprar pacote com 5 vídeos <ArrowRight className="h-5 w-5" />
            </Btn>
            <Btn href={LINK_AVULSO} size="lg" variant="outline" className="sm:flex-1 justify-center">
              Comprar vídeo avulso
            </Btn>
          </div>
          <p className="text-xs" style={{ color: "var(--vp-muted-fg)" }}>
            Os vídeos devem ser solicitados e produzidos em até 30 dias após a contratação.
          </p>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

/* ─── Problema ──────────────────────────────────────────────────────────── */

function Problema() {
  const bullets = [
    "Vídeos sem edição parecem amadores.",
    "Conteúdos longos demais perdem retenção.",
    "Falta de legenda reduz o consumo do vídeo.",
    "Falta de ritmo prejudica o alcance.",
    "Falta de consistência trava o crescimento da marca.",
  ];
  return (
    <section
      className="border-t px-5 py-24"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.4)", backgroundColor: "var(--vp-bg)" }}
    >
      <div className="mx-auto max-w-4xl space-y-10 text-center">
        <SectionTag>O problema real</SectionTag>
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Gravar vídeos não é o problema.{" "}
          <br className="hidden sm:block" />
          <span style={{ color: "var(--vp-primary)" }}>O problema é publicar vídeos que não prendem atenção.</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg" style={{ color: "var(--vp-muted-fg)" }}>
          Seu negócio pode ter uma boa oferta, bons produtos e bons serviços. Mas, se o vídeo está parado, longo, sem ritmo ou sem acabamento, ele perde força. Nas redes sociais, poucos segundos definem se a pessoa continua assistindo ou passa para o próximo conteúdo.
        </p>
        <ul className="mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-xl border p-4"
              style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.5)" }}
            >
              <span
                className="mt-1 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: "var(--vp-primary)" }}
              />
              <span className="text-sm">{b}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto max-w-2xl text-xl font-semibold">
          Um bom vídeo não é só bonito. Ele precisa segurar atenção e conduzir a pessoa até a próxima ação.
        </p>
      </div>
    </section>
  );
}

/* ─── Solução ───────────────────────────────────────────────────────────── */

function Solucao() {
  const cards = [
    { icon: Award, title: "Mais profissionalismo", text: "Vídeos com acabamento visual melhoram a percepção de valor da sua marca." },
    { icon: TrendingUp, title: "Mais retenção", text: "Cortes, ritmo e legendas ajudam o público a assistir por mais tempo." },
    { icon: Clock, title: "Mais frequência", text: "Com um pacote de vídeos, sua marca ganha consistência de publicação." },
    { icon: Target, title: "Mais oportunidades", text: "Conteúdos melhores aumentam as chances de gerar leads, conversas e vendas." },
  ];
  return (
    <section className="px-5 py-24" style={{ background: "var(--vp-gradient-hero)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <SectionTag>A solução</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Edição de vídeos com estratégia, estética e{" "}
            <span style={{ color: "var(--vp-primary)" }}>ritmo comercial</span>
          </h2>
          <p className="text-lg" style={{ color: "var(--vp-muted-fg)" }}>
            Nós transformamos seus vídeos brutos em conteúdos prontos para publicar, anunciar e vender melhor a sua mensagem.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="group p-6 transition-transform hover:-translate-y-1">
              <div className="relative">
                <div
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "oklch(0.72 0.17 160 / 0.15)", color: "var(--vp-primary)" }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--vp-muted-fg)" }}>{text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Incluso ───────────────────────────────────────────────────────────── */

function Incluso() {
  const items = [
    { icon: Scissors, label: "Cortes estratégicos" },
    { icon: Captions, label: "Legendas dinâmicas" },
    { icon: Clock, label: "Ajuste de ritmo" },
    { icon: Sparkles, label: "Títulos e chamadas" },
    { icon: Palette, label: "Identidade visual" },
    { icon: Music2, label: "Trilha sonora" },
    { icon: ImageIcon, label: "Ajustes de cor" },
    { icon: Volume2, label: "Ajustes de áudio" },
    { icon: Sparkles, label: "Elementos gráficos" },
    { icon: Smartphone, label: "Formato vertical" },
    { icon: Play, label: "Pronto para Reels, TikTok e Shorts" },
  ];
  return (
    <section
      className="border-t px-5 py-24"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.4)", backgroundColor: "var(--vp-bg)" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <SectionTag>O que está incluso</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl">O que pode estar incluso na edição</h2>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border px-4 py-3"
              style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.4)" }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: "oklch(0.72 0.17 160 / 0.1)", color: "var(--vp-primary)" }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs" style={{ color: "var(--vp-muted-fg)" }}>
          O nível de edição pode variar conforme o material enviado e o formato contratado.
        </p>
      </div>
    </section>
  );
}

/* ─── Portfolio ─────────────────────────────────────────────────────────── */

function Portfolio() {
  return (
    <section className="px-5 py-24" style={{ background: "var(--vp-gradient-hero)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <SectionTag>Portfólio</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl">Veja alguns vídeos do nosso portfólio</h2>
          <p style={{ color: "var(--vp-muted-fg)" }}>Antes de comprar, veja exemplos de trabalhos já produzidos.</p>
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={LINK_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border px-8 py-5 text-base font-semibold transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: "oklch(0.72 0.17 160 / 0.4)",
              background: "var(--vp-gradient-card)",
              boxShadow: "var(--vp-shadow-premium)",
              color: "var(--vp-primary)",
            }}
          >
            <Play className="h-5 w-5 fill-current" />
            Clique aqui para ver nosso portfólio
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Oferta ────────────────────────────────────────────────────────────── */

function Oferta() {
  const pacote = [
    "5 vídeos editados",
    "Formato vertical",
    "Legendas e cortes estratégicos",
    "Identidade visual da marca",
    "Entrega dentro do prazo combinado",
    "Uso em Reels, TikTok, Shorts e anúncios",
    "Mais economia em relação à compra avulsa",
  ];
  const avulso = [
    "1 vídeo editado",
    "Formato vertical",
    "Cortes e legenda",
    "Ajuste de ritmo",
    "Finalização pronta para publicação",
    "Compra direta pelo botão da página",
  ];
  return (
    <section
      id="oferta"
      className="border-t px-5 py-24"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.4)", backgroundColor: "var(--vp-bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <SectionTag>Escolha o seu plano</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Escolha o melhor formato para o seu negócio</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* PACOTE */}
          <Card premium className="relative p-8 lg:scale-[1.02]">
            <div className="absolute right-6 top-6">
              <span
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "linear-gradient(to right, var(--vp-primary), var(--vp-accent))",
                  color: "var(--vp-primary-fg)",
                }}
              >
                <Star className="h-3 w-3 fill-current" /> Mais vantajoso
              </span>
            </div>
            <h3 className="text-2xl font-bold">Pacote com 5 vídeos</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-bold" style={{ color: "var(--vp-primary)" }}>R$ 997</span>
              <span className="text-sm" style={{ color: "var(--vp-muted-fg)" }}>à vista</span>
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--vp-muted-fg)" }}>
              Ideal para quem quer manter consistência nas redes sociais, ter mais conteúdos prontos e transformar gravações simples em vídeos profissionais.
            </p>
            <ul className="mt-6 space-y-3">
              {pacote.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--vp-primary)" }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Btn href={LINK_PACOTE} size="lg" className="mt-8 w-full justify-center">
              Comprar pacote por R$ 997 <ArrowRight className="h-5 w-5" />
            </Btn>
            <p className="mt-3 text-center text-xs" style={{ color: "var(--vp-muted-fg)" }}>
              Os 5 vídeos devem ser solicitados e produzidos em até 30 dias após a contratação.
            </p>
          </Card>

          {/* AVULSO */}
          <Card className="relative p-8">
            <h3 className="text-2xl font-bold">Vídeo avulso</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-bold">R$ 267</span>
              <span className="text-sm" style={{ color: "var(--vp-muted-fg)" }}>por vídeo</span>
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--vp-muted-fg)" }}>
              Perfeito para quem quer testar o serviço ou precisa editar um vídeo específico com acabamento profissional.
            </p>
            <ul className="mt-6 space-y-3">
              {avulso.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--vp-accent)" }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Btn href={LINK_AVULSO} size="lg" variant="outline" className="mt-8 w-full justify-center">
              Comprar vídeo avulso por R$ 267
            </Btn>
            <p className="mt-3 text-center text-xs" style={{ color: "var(--vp-muted-fg)" }}>
              O vídeo deve ser solicitado e produzido em até 30 dias após a contratação.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ─── Comparação ────────────────────────────────────────────────────────── */

function Comparacao() {
  const rows = [
    ["Preço por vídeo", "R$ 267", "R$ 199,40"],
    ["Indicado para", "Testar o serviço", "Manter frequência"],
    ["Conteúdos publicados", "1 conteúdo", "5 conteúdos prontos"],
    ["Volume", "Menor volume", "Mais presença digital"],
    ["Estratégia", "Compra pontual", "Mais consistência"],
  ];
  return (
    <section className="px-5 py-24" style={{ background: "var(--vp-gradient-hero)" }}>
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <SectionTag>Comparativo</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Por que o pacote de 5 vídeos é mais{" "}
            <span style={{ color: "var(--vp-primary)" }}>estratégico?</span>
          </h2>
        </div>

        <div
          className="mt-12 overflow-hidden rounded-2xl border"
          style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.4)" }}
        >
          <div
            className="grid grid-cols-3 border-b text-xs font-bold uppercase tracking-widest sm:text-sm"
            style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.6)" }}
          >
            <div className="p-4" style={{ color: "var(--vp-muted-fg)" }}>Comparação</div>
            <div className="p-4">Avulso</div>
            <div className="p-4" style={{ backgroundColor: "oklch(0.72 0.17 160 / 0.1)", color: "var(--vp-primary)" }}>Pacote 5 vídeos</div>
          </div>
          {rows.map(([label, a, b]) => (
            <div
              key={label}
              className="grid grid-cols-3 border-b text-sm last:border-0"
              style={{ borderColor: "oklch(0.32 0.04 160 / 0.5)" }}
            >
              <div className="p-4 font-medium" style={{ color: "var(--vp-muted-fg)" }}>{label}</div>
              <div className="p-4">{a}</div>
              <div className="p-4 font-semibold" style={{ backgroundColor: "oklch(0.72 0.17 160 / 0.05)" }}>{b}</div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium" style={{ color: "var(--vp-muted-fg)" }}>
          Quanto mais consistência sua marca tem, mais chances ela cria de ser vista, lembrada e escolhida.
        </p>
      </div>
    </section>
  );
}

/* ─── Como funciona ─────────────────────────────────────────────────────── */

function ComoFunciona() {
  const steps = [
    { n: "01", title: "Você compra", text: "A contratação é feita diretamente pelo checkout." },
    { n: "02", title: "Envia os brutos", text: "Após a compra, você recebe as orientações para envio dos materiais." },
    { n: "03", title: "Equipe edita", text: "Fazemos cortes, legendas, ritmo, ajustes visuais e finalização." },
    { n: "04", title: "Vídeo pronto", text: "O material final é entregue para aprovação e publicação." },
  ];
  return (
    <section
      className="border-t px-5 py-24"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.4)", backgroundColor: "var(--vp-bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <SectionTag>Processo</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl">Como funciona na prática</h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.n} className="p-6">
              <div className="text-4xl font-bold" style={{ color: "oklch(0.72 0.17 160 / 0.4)" }}>{s.n}</div>
              <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--vp-muted-fg)" }}>{s.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-xs" style={{ color: "var(--vp-muted-fg)" }}>
          Para garantir o prazo, o cliente deve enviar os materiais brutos e informações necessárias dentro do período de contratação.
        </p>
      </div>
    </section>
  );
}

/* ─── Depoimentos ───────────────────────────────────────────────────────── */

function Depoimentos() {
  const items = [
    { quote: "Antes a gente até gravava, mas demorava muito para conseguir postar. Com os vídeos editados, ficou muito mais fácil manter frequência e o conteúdo passou a ter uma aparência muito mais profissional.", name: "Mariana C.", role: "Empresária" },
    { quote: "A diferença no acabamento foi enorme. Os vídeos ficaram mais dinâmicos, com legenda, cortes melhores e muito mais alinhados com a imagem que queremos passar.", name: "Rafael M.", role: "Prestador de serviço" },
    { quote: "O pacote ajudou muito porque eu consegui transformar várias gravações simples em conteúdos prontos para usar no Instagram e nos anúncios.", name: "Fernanda A.", role: "Clínica estética" },
    { quote: "Eu sabia que precisava aparecer mais, mas travava na edição. Ter alguém cuidando disso deixou o processo mais leve e a marca ficou muito mais presente.", name: "Juliana P.", role: "Consultora" },
  ];
  return (
    <section className="px-5 py-24" style={{ background: "var(--vp-gradient-hero)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <SectionTag>Depoimentos</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl">Quem edita melhor, comunica melhor</h2>
          <p style={{ color: "var(--vp-muted-fg)" }}>Veja o que clientes dizem sobre ter vídeos mais profissionais para suas marcas.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((t) => (
            <Card key={t.name} className="p-6">
              <Quote className="h-6 w-6" style={{ color: "var(--vp-primary)" }} />
              <p className="mt-4 text-base leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 border-t pt-4" style={{ borderColor: "var(--vp-border)" }}>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs" style={{ color: "var(--vp-muted-fg)" }}>{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────────────────── */

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    ["O pacote tem validade?", "Sim. Os vídeos do pacote devem ser solicitados e produzidos em até 30 dias após a contratação."],
    ["Posso comprar apenas um vídeo?", "Sim. A compra avulsa está disponível por R$ 267 e pode ser feita diretamente pelo botão da página."],
    ["Preciso enviar os vídeos já gravados?", "Sim. O serviço é de edição. Você envia o material bruto e nossa equipe transforma em um vídeo finalizado."],
    ["Vocês gravam os vídeos?", "Não neste pacote. Este serviço é focado na edição de vídeos enviados pelo cliente."],
    ["O vídeo vem pronto para postar?", "Sim. O vídeo é entregue finalizado em formato vertical, pronto para publicação nas principais redes sociais."],
    ["Posso usar os vídeos em anúncios?", "Sim. Os vídeos podem ser usados em Reels, TikTok, Shorts e também em campanhas de tráfego pago, desde que o conteúdo esteja adequado às políticas das plataformas."],
    ["Tenho direito a ajustes?", "Sim, pode haver ajustes simples conforme o combinado no processo de contratação. Alterações mais complexas podem ser avaliadas separadamente."],
  ];
  return (
    <section
      className="border-t px-5 py-24"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.4)", backgroundColor: "var(--vp-bg)" }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="space-y-4 text-center">
          <SectionTag>FAQ</SectionTag>
          <h2 className="text-3xl font-bold sm:text-4xl">Ainda está em dúvida?</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border"
              style={{ borderColor: "var(--vp-border)", backgroundColor: "oklch(0.24 0.04 160 / 0.5)" }}
            >
              <button
                className="flex w-full items-center justify-between px-5 py-4 text-left text-base font-semibold transition-colors hover:opacity-80"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 transition-transform duration-200"
                  style={{
                    color: "var(--vp-primary)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm" style={{ color: "var(--vp-muted-fg)" }}>
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ─────────────────────────────────────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-24" style={{ background: "var(--vp-gradient-hero)" }}>
      <div className="absolute inset-0 -z-0 opacity-30 pointer-events-none">
        <div
          className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "oklch(0.72 0.17 160 / 0.4)" }}
        />
        <div
          className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: "oklch(0.78 0.09 80 / 0.3)" }}
        />
      </div>
      <div className="relative mx-auto max-w-3xl space-y-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Seu conteúdo já pode virar vídeos melhores{" "}
          <span style={{ color: "var(--vp-primary)" }}>ainda este mês</span>
        </h2>
        <p className="text-lg" style={{ color: "var(--vp-muted-fg)" }}>
          Grave com o celular. Envie os materiais. Nós cuidamos da edição para sua marca aparecer com mais qualidade, frequência e profissionalismo.
        </p>
        <div className="flex flex-col gap-3 items-center">
          <Btn href={LINK_PACOTE} size="lg" className="w-full sm:w-auto sm:px-10 justify-center">
            Comprar pacote com 5 vídeos por R$ 997 <ArrowRight className="h-5 w-5" />
          </Btn>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Btn href={LINK_AVULSO} size="lg" variant="outline" className="w-full sm:w-auto justify-center">
              Comprar vídeo avulso por R$ 267
            </Btn>
            <Btn href={LINK_WHATSAPP} size="lg" variant="ghost" className="w-full sm:w-auto justify-center">
              <MessageCircle className="h-5 w-5" />
              Falar com a equipe antes de comprar
            </Btn>
          </div>
        </div>
        <p className="text-xs" style={{ color: "var(--vp-muted-fg)" }}>
          Válido para vídeos solicitados e produzidos em até 30 dias após a contratação.
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      className="border-t px-5 py-12"
      style={{ borderColor: "oklch(0.32 0.04 160 / 0.5)", backgroundColor: "var(--vp-bg)" }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <Image
            src="/images/escalei-logo-mmc.png"
            alt="Escalei Digital"
            width={120}
            height={64}
            className="h-16 w-auto brightness-0 invert -my-3"
          />
          <p className="max-w-sm text-sm" style={{ color: "var(--vp-muted-fg)" }}>
            Escalei Digital — Edição de vídeos, marketing e estratégia para negócios que querem crescer com mais presença digital.
          </p>
          <a
            href={LINK_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{ color: "var(--vp-fg)" }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @escaleidigital
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="/termos-de-uso" className="transition-colors hover:opacity-80" style={{ color: "var(--vp-muted-fg)" }}>Termos de contratação</a>
          <a href="/politica-de-privacidade" className="transition-colors hover:opacity-80" style={{ color: "var(--vp-muted-fg)" }}>Política de privacidade</a>
          <a href={LINK_WHATSAPP} className="transition-colors hover:opacity-80" style={{ color: "var(--vp-muted-fg)" }}>WhatsApp</a>
          <a href={LINK_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: "var(--vp-muted-fg)" }}>Instagram @escaleidigital</a>
        </div>
      </div>
      <div
        className="mx-auto mt-10 max-w-6xl border-t pt-6 text-center text-xs"
        style={{ borderColor: "oklch(0.32 0.04 160 / 0.5)", color: "var(--vp-muted-fg)" }}
      >
        © {new Date().getFullYear()} Escalei Digital. Todos os direitos reservados.
      </div>
    </footer>
  );
}
