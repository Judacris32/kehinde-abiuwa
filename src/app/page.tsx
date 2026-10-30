import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import About from "@/components/About";
import Toolbox from "@/components/Toolbox";
import Work from "@/components/Work";
import Press from "@/components/Press";
import CtaBand from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <About preview />
      <Toolbox />
      <Work preview />
      <Press preview />
      <CtaBand />
    </>
  );
}
