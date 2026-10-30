import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Lab from "@/components/Lab";
import Writing from "@/components/Writing";
import CtaBand from "@/components/CtaBand";
import { pages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lab notebook",
  description: "Kehinde Abiuwa's public notebook of hands-on AWS builds, featured GitHub repositories and Dev.to writing.",
};

export default function LabPage() {
  return (
    <>
      <PageHero {...pages.lab} />
      <Lab />
      <Writing />
      <CtaBand />
    </>
  );
}
