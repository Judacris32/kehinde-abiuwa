import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Experience from "@/components/Experience";
import CtaBand from "@/components/CtaBand";
import { pages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Kehinde Abiuwa's career: Solutions Architect and Cloud Engineer at Achel Group, MBA, and Cloud Support Engineer at GIGMO Solutions.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero {...pages.experience} />
      <Experience heading={false} />
      <CtaBand />
    </>
  );
}
