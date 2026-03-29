@AGENTS.md

# Escalei Digital — Landing Page

## Stack
- **Framework:** Next.js 16 (App Router)
- **Estilo:** Tailwind CSS v4 (configuração via CSS — sem `tailwind.config.ts`)
- **Fonte:** Manrope (Google Fonts via `next/font/google`)
- **Deploy:** Vercel
- **Domínio:** www.escaleidigital.com.br

## Paleta de cores
| Variável CSS | Hex | Uso |
|---|---|---|
| `--color-verde-escuro` | `#0E261B` | Principal (fundo, botões, header, footer) |
| `--color-verde-apoio` | `#0C6201` | Hover, destaque, labels uppercase |
| `--color-grafite` | `#111111` | Títulos |
| `--color-cinza-base` | `#F4F5F3` | Fundo de seções alternadas |
| `--color-cinza-texto` | `#4E555B` | Textos secundários |
| `--color-prata` | `#C4CBD1` | Microdetalhes, bordas, logos de clientes |

## Estrutura de pastas
```
app/
  page.tsx                          # Landing page (monta todas as seções)
  layout.tsx                        # Root layout — Manrope, metadata SEO
  globals.css                       # Tailwind v4 + variáveis de tema
  blog/page.tsx                     # Placeholder para expansão futura
  politica-de-privacidade/page.tsx
  politica-de-cookies/page.tsx
  termos-de-uso/page.tsx

components/
  layout/
    Header.tsx                      # Sticky header com nav + CTA + hamburger mobile
    Footer.tsx                      # Fundo verde escuro, 3 colunas
  sections/
    Hero.tsx                        # Hero principal com CTA WhatsApp
    ClientBar.tsx                   # Logos de clientes em grayscale
    MaquinaDeVendas.tsx             # 5 pilares em cards
    Planos.tsx                      # 4 planos (Start/Performance/Escala/Optimize)
    CRM.tsx                         # Escalei CRM diferencial
    FAQ.tsx                         # 10 perguntas, accordion
    CTAFinal.tsx                    # CTA fundo verde com texto institucional
  ui/
    WhatsAppButton.tsx              # Botão flutuante verde WhatsApp
    CookieBanner.tsx                # Banner LGPD com localStorage

lib/
  whatsapp.ts                       # URL e número WhatsApp centralizados
  tracking.ts                       # Eventos Meta Pixel + GA4

public/
  images/
    logo.png                        # Logo Escalei Digital (arquivo: 2.png original)
    clientes/                       # Logos dos clientes (mapear arquivos manualmente)
```

## WhatsApp
- Número: `+55 41 99107-1030`
- URL: `https://wa.me/5541991071030?text=Olá! Quero mais informações sobre a Máquina de Vendas.`
- Centralizado em `lib/whatsapp.ts`

## Tracking — eventos implementados
| Evento | Onde dispara |
|---|---|
| `click_whatsapp` | WhatsApp flutuante, Hero, CTA Final |
| `click_header_cta` | Botão "Chame no WhatsApp" no Header |
| `click_plan_start` | Card do plano Start |
| `click_plan_performance` | Card do plano Performance |
| `click_plan_escala` | Card do plano Escala |
| `click_plan_optimize` | Card do plano Optimize |
| `faq_open` | Abertura de qualquer item do FAQ |
| `scroll_50` / `scroll_90` | A implementar via `useEffect` em `layout.tsx` |

Para ativar Meta Pixel e GA4, adicione os IDs no `.env.local` (ver `.env.example`) e implemente os scripts no `layout.tsx`.

## IDs das âncoras de navegação
| Menu | Âncora |
|---|---|
| Máquina de Vendas | `#maquina-de-vendas` |
| Planos | `#planos` |
| CRM | `#crm` |
| FAQ | `#faq` |
| Contato | `#contato` (rodapé) |

## Imagens dos clientes — mapeamento pendente
Os arquivos originais estão em `public/images/clientes/`. Renomear conforme abaixo:
- `drywash.png` ← identificar arquivo
- `unilever.png` ← `Unilever-Emblema-1024x576.png`
- `malwee.png` ← identificar arquivo
- `azul-seguros.png` ← `banco-azul.png`
- `impaktto.png` ← identificar arquivo
- `multieco.png` ← identificar arquivo
- `quimilaus.png` ← identificar arquivo
- `plastfiro.png` ← `plastfiro_logo.jfif`
- `softcut.png` ← `SOFTCUT.PNG`

## Rodar localmente
```bash
npm install
npm run dev
# Acesse: http://localhost:3000
```

## Deploy
Conectar repositório no Vercel. Configurar variáveis de ambiente conforme `.env.example`.
