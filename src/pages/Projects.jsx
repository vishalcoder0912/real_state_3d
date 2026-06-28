import {useMemo, useState} from "react";
import CTASection from "../components/CTASection.jsx";
import ContactForm from "../components/ContactForm.jsx";
import PageHero from "../components/PageHero.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {properties} from "../data/properties.js";
import {images} from "../data/site.js";

const filters = ["All", "Residential", "Industrial", "Mixed Use"];

const Projects = () => {
  const [active, setActive] = useState("All");

  const visibleProperties = useMemo(() => {
    if (active === "All") {
      return properties;
    }
    return properties.filter((property) => property.type === active);
  }, [active]);

  return (
    <>
      <PageHero
        title="Projects"
        text="Explore curated residential, industrial, mixed-use, and investment-led plot opportunities with expert consultation."
        image={images.hero}
      />
      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Property cards"
            title="Find the right plot category"
            text="Use the filters to compare available opportunity types. Pricing is shared responsibly after requirement matching."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-full px-5 py-3 text-sm font-extrabold transition ${
                  active === filter ? "bg-navy text-white" : "bg-beige text-navy hover:bg-gold"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {visibleProperties.map((property, index) => (
              <Reveal key={property.title} delay={index * 0.05}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section-y bg-beige">
        <div className="container-pad grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              align="left"
              eyebrow="Site visit CTA"
              title="Schedule a guided site visit"
              text="Share your requirement and our team will help you shortlist options, understand locations, and plan the next conversation."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[8px] bg-white p-6 shadow-premium">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Projects;
