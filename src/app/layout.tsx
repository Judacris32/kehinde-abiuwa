import type { Metadata, Viewport } from "next";
// Self-hosted fonts: no runtime call to Google, no layout shift from a slow font CDN.
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-500-italic.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource-variable/manrope/wght.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const description =
  "Kehinde Abiuwa is a UK-based Cloud Engineer and Solutions Architect. He designs and builds secure, well-run platforms on AWS and Azure: landing zones, Kubernetes, CI/CD and Infrastructure as Code.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kehindeabiuwa.vercel.app"),
  title: {
    default: "Kehinde Abiuwa · Cloud Engineer & Solutions Architect",
    template: "%s · Kehinde Abiuwa",
  },
  description,
  keywords: [
    "Kehinde Abiuwa",
    "Cloud Engineer",
    "Solutions Architect",
    "AWS",
    "Azure",
    "Kubernetes",
    "Terraform",
    "DevOps",
    "United Kingdom",
  ],
  authors: [{ name: "Kehinde Abiuwa" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Kehinde Abiuwa · Cloud Engineer & Solutions Architect",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Kehinde Abiuwa, Cloud Engineer and Solutions Architect" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kehinde Abiuwa · Cloud Engineer & Solutions Architect",
    description,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#15120E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="grain">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
