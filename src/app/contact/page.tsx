import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kehinde Abiuwa about a cloud or platform role, or about help with your AWS or Azure platform.",
};

export default function ContactPage() {
  return <Contact />;
}
