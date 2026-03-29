export const WHATSAPP_NUMBER = "5541991071030";
export const WHATSAPP_MESSAGE = "Olá! Quero mais informações sobre a Máquina de Vendas.";

export function getWhatsAppUrl(source?: string): string {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
