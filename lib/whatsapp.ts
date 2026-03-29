export const WHATSAPP_NUMBER = "5541991071030";

export const WHATSAPP_MESSAGES: Record<string, string> = {
  default: "Olá! Quero mais informações sobre a Máquina de Vendas.",
  start: "Olá! Como funciona o Plano Start da Máquina de Vendas?",
  performance: "Olá! Como funciona o Plano Performance da Máquina de Vendas?",
  escala: "Olá! Como funciona o Plano Escala da Máquina de Vendas?",
  optimize: "Olá! Quero mais informações sobre o Plano Optimize.",
};

export function getWhatsAppUrl(source?: string): string {
  const message = source && WHATSAPP_MESSAGES[source]
    ? WHATSAPP_MESSAGES[source]
    : WHATSAPP_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
