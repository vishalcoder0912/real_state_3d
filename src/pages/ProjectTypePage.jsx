import {ArrowRight, CheckCircle2, MapPinned} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import ContactForm from "../components/ContactForm.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {properties} from "../data/properties.js";

const copy = {
  residential: {
    eyebrow: "Residential plots",
    title: "Plan Future Homes in Dholera's Growth Corridor",
    text: "Compare residential plot options with lifestyle planning, documentation guidance, and practical site-visit support.",
    bullets: ["Future home planning", "Family-friendly location evaluation", "Budget-based plot matching", "Site visit assistance"],
    filter: "Residential",
  },
  industrial: {
    eyebrow: "Industrial plots",
    title: "Explore Industrial Land for Manufacturing, Warehousing & Expansion",
    text: "Evaluate business-focused land opportunities around Dholera with connectivity, use case, and documentation clarity.",
    bullets: ["Warehousing and logistics potential", "Manufacturing-focused guidance", "Connectivity-led comparison", "Documentation support"],
    filter: "Industrial",
  },
  mixed: {
    eyebrow: "Mixed-use plots",
    title: "Flexible Land Options for Commercial + Residential Plans",
    text: "Review mixed-use plots for buyers who need flexible development possibilities in emerging corridors.",
    bullets: ["Commercial plus residential flexibility", "Emerging zone comparison", "Use-case planning", "Transparent consultation"],
    filter: "Mixed",
  },
  buy: {
    eyebrow: "Plot for buy",
    title: "Get Curated Plot Options Based on Your Budget and Goal",
    text: "Share your requirement and receive shortlisted plot opportunities with guidance from enquiry to site visit.",
    bullets: ["Requirement-based curation", "Budget and location matching", "Price on request", "Dedicated relationship manager"],
    filter: "",
  },
};

const ProjectTypePage = ({type}) => {
  const data = copy[type];
  const visibleProperties = data.filter ? properties.filter((property) => property.type.includes(data.filter)).slice(0, 3) : properties.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(201,162,39,0.28),transparent_32%),linear-gradient(135deg,#0B1F33,#111827)]" />
        <div className="container-pad grid min-h-[540px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-gold">{data.eyebrow}</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl">{data.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{data.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/book-site-visit" className="btn-primary shimmer">
                Book Site Visit
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link to="/contact-us" className="btn-secondary">Request Callback</Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[18px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <div className="grid min-h-[300px] grid-cols-3 gap-3 [perspective:1000px]">
                {Array.from({length: 9}, (_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{y: -10, rotateX: 8, rotateY: -6}}
                    className="rounded-[12px] border border-gold/30 bg-gold/15 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeader align="left" eyebrow="Buyer benefits" title="Built for Clear Plot Decisions" text="Every buyer gets structured support, clear category comparison, documentation guidance, and practical next steps before moving forward." />
            <div className="mt-8 grid gap-4">
              {data.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 rounded-[10px] bg-beige p-4 font-bold text-navy">
                  <CheckCircle2 className="size-5 text-success" aria-hidden="true" />
                  {bullet}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[16px] border border-black/5 bg-mist p-6 shadow-soft">
              <MapPinned className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-bold text-navy">Get Matched With Suitable Options</h2>
              <p className="mt-3 leading-7 text-muted">Share your plot type, preferred budget, and timeline. The team will respond with curated details and site visit guidance.</p>
              <div className="mt-6 rounded-[12px] bg-white p-5">
                <ContactForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-pad">
          <SectionHeader eyebrow="Curated opportunities" title="Featured Options" text="Pricing is shared after requirement matching to keep the enquiry process accurate, responsible, and transparent." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {visibleProperties.map((property, index) => (
              <Reveal key={property.title} delay={index * 0.05}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectTypePage;
