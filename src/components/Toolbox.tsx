import { toolsRowOne, toolsRowTwo, type Tool } from "@/lib/data";
import { SectionHeading } from "./ui";

function Row({ tools, reverse = false }: { tools: Tool[]; reverse?: boolean }) {
  // The list is rendered twice so the loop is seamless at -50%.
  const loop = [...tools, ...tools];
  return (
    <div className="marquee-mask overflow-hidden">
      <ul
        className={`marquee-track flex w-max items-center gap-4 py-3 sm:gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((t, i) => (
          <li
            key={`${t.icon}-${i}`}
            aria-hidden={i >= tools.length}
            className="group flex shrink-0 items-center gap-3 rounded-full border border-ink/10 bg-white/60 py-2.5 pl-3 pr-5 shadow-[0_1px_0_rgba(21,18,14,0.04)] transition-colors duration-300 hover:border-brass hover:bg-[#EADFC9]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/icons/${t.icon}.svg`}
              alt=""
              width={30}
              height={30}
              loading="lazy"
              className={`h-[30px] w-auto ${t.icon === "amazonwebservices" ? "max-w-[46px]" : "w-[30px]"} `}
            />
            <span className="whitespace-nowrap text-[14px] font-semibold text-ink">
              {t.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Toolbox() {
  return (
    <section aria-labelledby="toolbox-title" className="relative overflow-hidden bg-ivory py-24 text-ink sm:py-28">
      <div className="container-site">
        <SectionHeading
          tone="light"
          eyebrow="Toolbox"
          title={<span id="toolbox-title">The tools I reach for</span>}
          intro="Day to day that means AWS and Azure, Terraform and Ansible, Kubernetes and the pipelines that feed it. Almost all of it comes straight from my day job. Google Cloud is the newest addition, picked up through multi-cloud data work."
        />
      </div>

      <div className="mt-14 flex flex-col gap-3">
        <Row tools={toolsRowOne} />
        <Row tools={toolsRowTwo} reverse />
      </div>
    </section>
  );
}
