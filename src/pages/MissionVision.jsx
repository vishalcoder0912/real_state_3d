import {CheckCircle2, Target, Telescope} from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {values} from "../data/sections.js";
import {images} from "../data/site.js";

const MissionVision = () => {
  return (
    <>
      <PageHero
        title="Mission & Vision"
        text="Our work is centered on transparent property guidance, responsible opportunity evaluation, and long-term client trust."
        image={images.map}
      />
      <section className="section-y bg-white">
        <div className="container-pad grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="premium-card h-full p-8">
              <Target className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-display text-4xl font-bold text-navy">Mission</h2>
              <p className="mt-4 leading-8 text-muted">
                To simplify real estate investment by offering transparent, reliable, and opportunity-driven property
                guidance.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="premium-card h-full p-8">
              <Telescope className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-display text-4xl font-bold text-navy">Vision</h2>
              <p className="mt-4 leading-8 text-muted">
                To become a trusted real estate partner for buyers and investors exploring India's emerging property
                growth destinations.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-beige">
        <div className="container-pad">
          <SectionHeader eyebrow="Values" title="The principles behind every consultation" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.05}>
                <article className="premium-card p-6">
                  <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">{value}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-white">
        <div className="container-pad">
          <article className="rounded-[8px] bg-navy p-8 text-white shadow-premium lg:p-12">
            <SectionHeader
              light
              align="left"
              eyebrow="Long-term commitment"
              title="Guidance that respects the buyer's future"
              text="We avoid unrealistic claims and focus on responsible phrases such as growth potential, verified property support, transparent process, and long-term opportunity."
            />
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default MissionVision;
