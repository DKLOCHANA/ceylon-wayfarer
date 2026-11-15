import { site } from "@/config/site";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "How do I book?",
    answer:
      "Send your dates, pickup point and the places you’d like to go on WhatsApp. I’ll reply with one fixed price for the whole trip.",
  },
  { question: "What does the price include?", answer: site.included },
  {
    question: "Are you also a tour guide?",
    answer:
      "I’m your driver. At major sites like Sigiriya and the Temple of the Tooth, I’ll point you to licensed local guides.",
  },
  { question: "How do I pay?", answer: site.payment },
];
