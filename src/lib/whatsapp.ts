import { site } from "@/config/site";

/**
 * Builds a wa.me link with a prefilled message.
 * Until the real number is set in site.ts, the link still works: WhatsApp opens and
 * asks the user to pick a chat (no recipient), so it is never a dead link.
 */
export function buildWhatsAppLink(
  message: string,
  number: string = site.contact.whatsappNumber,
): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
