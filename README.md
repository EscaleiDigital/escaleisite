# Escalei Digital — Landing Page

Landing page institucional da Escalei Digital. O objetivo da página é converter visitantes em conversas no WhatsApp para agendamento de reunião comercial.

**Domínio:** www.escaleidigital.com.br

---

## Como rodar localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse: http://localhost:3000

---

## Estrutura do projeto

```
app/
  page.tsx                          # Monta todas as seções da landing page
  layout.tsx                        # Root layout — fonte Manrope, metadata SEO
  globals.css                       # Tailwind v4 + variáveis de tema e cores
  blog/page.tsx                     # Placeholder para blog futuro
  politica-de-privacidade/page.tsx
  politica-de-cookies/page.tsx
  termos-de-uso/page.tsx

components/
  layout/
    Header.tsx                      # Header fixo com nav, CTA e menu hambúrguer mobile
    Footer.tsx                      # Rodapé com logo, contatos e links legais
  sections/
    Hero.tsx                        # Seção principal com diagrama de operação
    ClientBar.tsx                   # Barra de logos de clientes com scroll animado
    Problema.tsx                    # 4 cards de dor do cliente
    MaquinaDeVendas.tsx             # O que é a Máquina de Vendas (4 pilares)
    ComoFunciona.tsx                # Timeline de 4 etapas do método
    Planos.tsx                      # 4 planos com preços e CTAs individuais
    CRM.tsx                         # Diferencial Escalei CRM + Kommo
    Comparativo.tsx                 # Escalei vs agência comum
    ParaQuem.tsx                    # É para / Não é para
    FAQ.tsx                         # 10 perguntas frequentes em accordion
    CTAFinal.tsx                    # CTA final em fundo verde escuro
  ui/
    WhatsAppButton.tsx              # Botão flutuante do WhatsApp
    CookieBanner.tsx                # Banner de cookies (LGPD)

lib/
  whatsapp.ts                       # Número, URL e mensagens do WhatsApp centralizados
  tracking.ts                       # Funções para disparar eventos de analytics

public/
  images/
    clientes/                       # Logos dos clientes e logo da Escalei (PNGs transparentes)
```

---

## Paleta de cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde escuro institucional | `#0E261B` | Cor principal — botões, header, seções de destaque |
| Verde de apoio | `#0C6201` | Labels, ícones, hover |
| Grafite | `#111111` | Títulos |
| Cinza base | `#F4F5F3` | Fundo de seções alternadas |
| Cinza texto | `#4E555B` | Textos secundários |
| Prata fosco | `#C4CBD1` | Bordas, microdetalhes |

---

## WhatsApp

Número e mensagens centralizados em `lib/whatsapp.ts`.

| Contexto | Mensagem |
|----------|----------|
| Padrão / Hero / CTA | "Olá! Quero mais informações sobre a Máquina de Vendas." |
| Plano Start | "Olá! Como funciona o Plano Start da Máquina de Vendas?" |
| Plano Performance | "Olá! Como funciona o Plano Performance da Máquina de Vendas?" |
| Plano Escala | "Olá! Como funciona o Plano Escala da Máquina de Vendas?" |
| Plano Optimize | "Olá! Quero mais informações sobre o Plano Optimize." |

Para alterar o número ou as mensagens, edite apenas `lib/whatsapp.ts`.

---

## Tracking

Estrutura preparada em `lib/tracking.ts` para **Meta Pixel** e **Google Analytics (GA4)**.

Eventos implementados:

| Evento | Quando dispara |
|--------|----------------|
| `click_whatsapp` | Botão flutuante, Hero, CTA Final |
| `click_header_cta` | Botão no Header |
| `click_plan_start` | Card do Plano Start |
| `click_plan_performance` | Card do Plano Performance |
| `click_plan_escala` | Card do Plano Escala |
| `click_plan_optimize` | Card do Plano Optimize |
| `faq_open` | Abertura de item no FAQ |

Para ativar o tracking, crie um arquivo `.env.local` com:

```env
NEXT_PUBLIC_META_PIXEL_ID=seu_pixel_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

E adicione os scripts do Pixel e GTM no `app/layout.tsx` (o espaço já está reservado nos comentários).

---

## SEO

Configurado em `app/layout.tsx`:

- **Title:** Escalei Digital | Máquina de Vendas para empresas que querem escala
- **Meta description:** A Escalei estrutura aquisição, operação comercial, CRM e rotina de performance em uma Máquina de Vendas para empresas que querem crescer com mais previsibilidade, organização e escala.
- **OG tags** configuradas para compartilhamento social
- **Lang:** pt-BR

---

## Âncoras de navegação

| Menu | ID da seção |
|------|-------------|
| Máquina de Vendas | `#maquina-de-vendas` |
| Planos | `#planos` |
| CRM | `#crm` |
| FAQ | `#faq` |
| Contato | `#contato` (rodapé) |

---

## Deploy

O projeto é um Next.js padrão sem backend. Para produção:

```bash
# Gerar build de produção
npm run build

# Iniciar servidor (porta 3000)
npm run start
```

Não há banco de dados, autenticação ou variáveis de ambiente obrigatórias para o site funcionar. As variáveis de tracking (Pixel, GA4) são opcionais.

---

## Páginas legais (LGPD)

Todas as páginas legais estão em `/app/` e são estáticas:

- `/politica-de-privacidade`
- `/politica-de-cookies`
- `/termos-de-uso`

O banner de cookies usa `localStorage` para lembrar o consentimento do usuário (chave: `cookies_accepted`).

---

## Blog (expansão futura)

A rota `/blog` já existe como placeholder. Para ativar o blog:

1. Criar os posts em `app/blog/[slug]/page.tsx`
2. Definir a fonte de conteúdo (MDX, CMS headless, etc.)
3. Atualizar `app/blog/page.tsx` com a listagem dos posts

O domínio e a estrutura de rotas já estão prontos para essa expansão.
