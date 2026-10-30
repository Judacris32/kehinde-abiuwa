import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Press from "@/components/Press";
import Recognition from "@/components/Recognition";
import CtaBand from "@/components/CtaBand";
import { pages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Emerging Cloud Architect of the Year 2023, press coverage in Disrupt Africa and THISDAY, and Kehinde Abiuwa's AWS and Azure certifications.",
};

export default function RecognitionPage() {
  return (
    <>
      <PageHero {...pages.recognition} />
      <Press />
      <Recognition />
      <CtaBand />
    </>
  );
}
