import {BadgeCheck} from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {images} from "../data/site.js";

const DirectorMessage = () => {
  return (
    <>
      <PageHero
        title="Director Message"
        text="A note on clarity, confidence, and transparent real estate guidance from the leadership at OMANA PROJECTS."
        image={images.director}
      />
      <section className="section-y bg-white">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <img src={images.director} alt="Director portrait placeholder" className="h-[560px] w-full rounded-[8px] object-cover shadow-premium" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader align="left" eyebrow="Message" title="A clear process creates confident buyers" />
            <div className="mt-6 space-y-5 leading-8 text-muted">
              <p>
                At OMANA PROJECTS, our focus is to help buyers make informed real estate decisions with clarity,
                confidence, and transparency.
              </p>
              <p>
                We believe every plot purchase should be supported by proper guidance, verified information, and
                long-term thinking. Whether a client is exploring residential plots, industrial land, mixed-use
                options, or investment-oriented opportunities, our responsibility is to simplify the journey.
              </p>
              <p>
                Our team works to understand each buyer's purpose, budget, and expectations before presenting options.
                This helps clients compare opportunities practically and move ahead with the right questions answered.
              </p>
            </div>
            <div className="mt-8 rounded-[8px] border-l-4 border-gold bg-beige p-6">
              <p className="font-display text-2xl font-bold text-navy">Director</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-muted">OMANA PROJECTS</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-mist">
        <div className="container-pad">
          <article className="premium-card p-8 lg:p-12">
            <BadgeCheck className="size-10 text-gold" aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl font-bold text-navy">Company commitment</h2>
            <p className="mt-4 max-w-3xl leading-8 text-muted">
              We remain committed to transparent consultation, documentation awareness, site visit coordination, and
              property guidance that helps buyers evaluate opportunities with patience and confidence.
            </p>
          </article>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default DirectorMessage;
