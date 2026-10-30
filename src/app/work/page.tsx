import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import { pages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Kehinde Abiuwa's platform work: AWS landing zones, Infrastructure as Code, CI/CD and ECS microservices, plus the ways he can help your team.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero {...pages.work} />
      <Work heading={false} />
      <Services />
      <CtaBand />
    </>
  );
}
