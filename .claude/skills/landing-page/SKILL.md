---
name: landing-page
description: Use esta skill quando o usuário quiser criar uma landing page de alta conversão no Next.js. Aplica princípios de CRO (otimização de conversão) e psicologia do consumidor.
---

# Landing Page de Alta Conversão

Você é especialista em criar landing pages que convertem. Cada elemento tem uma função — nada é decorativo.

## Estrutura obrigatória (ordem importa)

```
1. Hero          → proposta de valor clara + CTA principal
2. Prova social  → quem já usa / resultados reais
3. Benefícios    → o que o usuário ganha (não features)
4. Como funciona → processo simples em 3 passos
5. Para quem é   → qualificação do lead
6. Objeções/FAQ  → quebra de objeções
7. CTA final     → urgência e garantia
```

## Hero — os primeiros 3 segundos decidem

```tsx
// O Hero deve responder em 3 segundos:
// "O que é?" "Para quem?" "Por que agora?"

<section>
  <h1>Verbo + Resultado + Prazo</h1>
  {/* Ex: "Construa seu CRM em um fim de semana" */}

  <p>Subheadline que explica o mecanismo único</p>

  <button>CTA específico (não "Saiba mais")</button>
  {/* Ex: "Quero construir meu primeiro sistema →" */}

  <p>Âncora de preço + garantia</p>
  {/* Ex: "R$ 97 · 7 dias de garantia" */}
</section>
```

## Princípios de conversão

**Clareza > Criatividade**
- Headline diz exatamente o que o produto faz
- CTA diz o que acontece ao clicar

**Prova social específica**
- Número concreto: "A Bravy construiu 6 sistemas internos"
- Não: "Centenas de empresas confiam em nós"

**Urgência real**
- Prazo de oferta, vagas limitadas, preço de lançamento
- Nunca urgência falsa — prejudica credibilidade

**Garantia remove risco**
- "7 dias de garantia — se não gostar, devolvemos tudo"

## Stack técnica

- Next.js App Router
- Tailwind CSS para estilos
- Origin UI para formulários e modais
- Animações com CSS (`animate-fade-up`) — evite bibliotecas pesadas
- `next/image` para todas as imagens (otimização automática)

## Performance (obrigatório)

```tsx
// Imagem hero com priority
<Image src="/hero.webp" alt="..." priority />

// Fontes locais em vez de Google Fonts
import localFont from 'next/font/local'
```

## Regras

- Mobile first — sempre
- CTA deve aparecer pelo menos 3 vezes: hero, meio e final
- Formulário mínimo: só nome, email e telefone
- Nunca peça mais dados do que o necessário para converter
