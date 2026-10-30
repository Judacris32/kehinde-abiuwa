import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Toolbox from "@/components/Toolbox";
import CtaBand from "@/components/CtaBand";
import { pages } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "How Kehinde Abiuwa went from an Azure support desk to designing AWS platforms as a Solutions Architect.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero {...pages.about} />
      <About heading={false} />
      <Toolbox />
      <CtaBand />
    </>
  );
}
