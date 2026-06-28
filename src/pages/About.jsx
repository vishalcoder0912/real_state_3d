import {ArrowRight, BadgeCheck, Handshake, MapPinned, ShieldCheck} from "lucide-react";
import {Link} from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {images} from "../data/site.js";

const reasons = [
  {title: "Transparent consultation", icon: ShieldCheck},
  {title: "Dholera-focused insight", icon: MapPinned},
  {title: "Documentation support", icon: BadgeCheck},
  {title: "Relationship-led service", icon: Handshake},
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        text="A professional real estate company helping buyers and investors evaluate plot opportunities with clarity, discipline, and trust."
        image={images.planning}
      />
      <section className="section-y bg-white">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Company overview"
              title="Real estate guidance built around informed decisions"
              text="OMANA PROJECTS works with buyers, investors, NRIs, and business owners looking for residential, industrial, and mixed-use plot opportunities in Dholera and select growth corridors."
            />
            <p className="mt-5 leading-8 text-muted">
              Our approach is practical and transparent: understand the requirement, shortlist relevant options,
              support site visits, and help buyers review documentation before moving forward.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <img src={images.contact} alt="Professional real estate office" className="h-[460px] w-full rounded-[8px] object-cover shadow-premium" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="container-pad">
          <SectionHeader eyebrow="Our story" title="From property search to confident selection" />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={index * 0.05}>
                  <article className="premium-card h-full p-6 text-center">
                    <Icon className="mx-auto size-9 text-gold" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-2xl font-bold text-navy">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Structured guidance that keeps buyers aligned with budget, location, usage, and long-term goals.
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="rounded-[8px] bg-navy p-8 text-white shadow-premium">
              <h2 className="font-display text-4xl font-bold">Why choose us</h2>
              <p className="mt-4 leading-8 text-white/75">
                We combine property consultation, buyer education, documentation support, and site visit coordination
                so clients can compare options without pressure or confusion.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="premium-card p-8">
              <h2 className="font-display text-4xl font-bold text-navy">Our real estate approach</h2>
              <p className="mt-4 leading-8 text-muted">
                Every buyer journey starts with clarity: purpose, category, location preference, budget, holding period,
                and documentation expectations. From there, our team curates options and supports verification.
              </p>
              <Link to="/contact-us" className="btn-primary mt-7">
                Speak With Our Team
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default About;
