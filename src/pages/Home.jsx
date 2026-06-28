import {ArrowRight, BadgeCheck, Building2, CheckCircle2, ClipboardCheck, FileCheck2, Handshake, Landmark, MapPinned, Route, ShieldCheck, Target, Telescope, TrendingUp, UserRoundCheck} from "lucide-react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import BlogCard from "../components/BlogCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import CTASection from "../components/CTASection.jsx";
import HeroSection from "../components/HeroSection.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import StatsSection from "../components/StatsSection.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import AnimatedSection, {fadeUp, staggerContainer} from "../components/AnimatedSection.jsx";
import {blogs} from "../data/blogs.js";
import {categories} from "../data/categories.js";
import {properties} from "../data/properties.js";
import {areas, dholeraReasons, journeySteps, supportFeatures, testimonials} from "../data/sections.js";
import {images} from "../data/site.js";

const trustReasons = [
  {title: "Verified Property Guidance", icon: ShieldCheck, text: "Clear, researched guidance so buyers evaluate plots with accurate information."},
  {title: "Transparent Consultation", icon: BadgeCheck, text: "No pressure, no hidden agendas. We explain what each option offers practically."},
  {title: "Site Visit Assistance", icon: MapPinned, text: "Coordinated visits to help buyers experience the location and surrounding context."},
  {title: "Documentation Support", icon: FileCheck2, text: "We help buyers understand ownership clarity, approvals, and required paperwork."},
  {title: "Residential, Industrial & Mixed-Use Options", icon: Landmark, text: "A range of plot categories to match different buyer goals and usage plans."},
  {title: "Dedicated Relationship Manager", icon: UserRoundCheck, text: "A single point of contact throughout the evaluation and decision process."},
];

const confidentSteps = [
  {title: "Understand the Location", text: "Learn about Dholera's planned infrastructure, connectivity, and growth context."},
  {title: "Compare Plot Categories", text: "Residential, industrial, mixed-use — compare based on budget, usage, and goals."},
  {title: "Review Documentation", text: "Verify ownership, approvals, and regulatory clarity before any commitment."},
  {title: "Visit the Site", text: "Experience the plot, approach roads, and surrounding development in person."},
  {title: "Invest with Clarity", text: "Move forward with confidence backed by verified information and expert support."},
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />

      <section className="section-y bg-white">
        <div className="container-pad grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[8px] shadow-premium">
              <motion.img
                src={images.planning}
                alt="Real estate consultants reviewing plot plans"
                className="h-full min-h-[420px] w-full object-cover"
                whileHover={{scale: 1.05}}
                transition={{duration: 0.6}}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              align="left"
              eyebrow="About Omana Projects"
              title="Building Trust Through Smart Real Estate Investments"
              text="OMANA PROJECTS helps buyers and investors explore high-potential real estate opportunities with a focus on Dholera and emerging growth corridors. From residential plots to industrial and mixed-use land options, we provide guidance, documentation support, and transparent property consultation."
            />
            <Link to="/about-us" className="btn-primary mt-8">
              Learn More About Us
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Dholera advantage"
            title="Why Dholera Is Becoming India's Next Big Investment Destination"
            text="A planned smart city ecosystem, infrastructure-led growth, and flexible plot categories make Dholera a serious location for informed buyers to evaluate."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative overflow-hidden rounded-[8px] bg-navy p-6 text-white shadow-premium">
              <motion.div
                initial={{scale: 1}}
                animate={{scale: 1.06}}
                transition={{duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
                className="absolute inset-0"
              >
                <img src={images.map} alt="Location map and investment corridor planning" className="h-full w-full object-cover opacity-25" />
              </motion.div>
              <div className="relative z-10 flex min-h-[460px] flex-col justify-end">
                <MapPinned className="mb-5 size-12 text-gold" aria-hidden="true" />
                <h3 className="font-display text-3xl font-bold">Location-led decisions with grounded guidance.</h3>
                <p className="mt-4 leading-7 text-white/75">
                  Our consultation focuses on buyer goals, documentation clarity, site visits, and realistic long-term potential.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {dholeraReasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <Reveal key={reason.title} delay={index * 0.04}>
                    <motion.article whileHover={{y: -6}} className="h-full rounded-[8px] border border-black/5 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-premium">
                      <Icon className="size-8 text-gold" aria-hidden="true" />
                      <h3 className="mt-5 font-display text-2xl font-bold text-navy">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{reason.text}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Property categories" title="Explore Plot Categories" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.05}>
                <CategoryCard category={category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-pad">
          <SectionHeader
            eyebrow="Featured projects"
            title="Featured Plot Opportunities"
            text="Browse curated residential, industrial, and mixed-use plot opportunities. Exact pricing is shared after requirement matching and consultation."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {properties.slice(0, 3).map((property, index) => (
              <Reveal key={property.title} delay={index * 0.05}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Buyer trust" title="Why Buyers Trust OMANA PROJECTS" text="We focus on clarity, transparency, and practical support so buyers can evaluate plot opportunities with confidence." />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.1}}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {trustReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.title}
                  variants={fadeUp}
                  transition={{duration: 0.5, delay: index * 0.04}}
                  whileHover={{y: -6}}
                  className="rounded-[8px] border border-black/5 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-premium"
                >
                  <Icon className="size-9 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{reason.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="container-pad">
          <SectionHeader eyebrow="Buyer support" title="Core Features & Buyer Support" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.03}>
                  <motion.article whileHover={{y: -4}} className="h-full rounded-[8px] border border-black/5 bg-white p-5 text-center shadow-soft transition-shadow duration-300 hover:shadow-premium">
                    <Icon className="mx-auto size-8 text-gold" aria-hidden="true" />
                    <h3 className="mt-4 text-sm font-extrabold text-navy">{feature.title}</h3>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Buyer journey" title="Make a Confident Property Decision" text="A structured approach helps buyers compare options, review documentation, and invest with clarity." />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            className="mt-12 grid gap-6 md:grid-cols-5"
          >
            {confidentSteps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                transition={{duration: 0.5, delay: index * 0.06}}
                className="relative h-full rounded-[8px] border border-black/5 bg-mist p-6 text-center"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-gold font-display text-xl font-bold text-navy">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <Link to="/contact-us" className="btn-primary shimmer">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-navy text-white">
        <div className="container-pad">
          <SectionHeader light eyebrow="Process" title="Begin Your Plot Journey Today" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {journeySteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <motion.article whileHover={{y: -6}} className="relative h-full rounded-[8px] border border-white/12 bg-white/8 p-6">
                  <span className="grid size-12 place-items-center rounded-full bg-gold font-display text-xl font-bold text-navy">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{step.text}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact-us" className="btn-primary shimmer">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad grid gap-6 lg:grid-cols-2">
          <Reveal>
            <motion.article whileHover={{y: -6}} className="h-full rounded-[8px] border border-black/5 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-premium">
              <Target className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 leading-8 text-muted">
                To simplify real estate investment by offering transparent, reliable, and opportunity-driven
                property guidance.
              </p>
            </motion.article>
          </Reveal>
          <Reveal delay={0.08}>
            <motion.article whileHover={{y: -6}} className="h-full rounded-[8px] border border-black/5 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-premium">
              <Telescope className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-5 font-display text-3xl font-bold text-navy">Our Vision</h2>
              <p className="mt-4 leading-8 text-muted">
                To become a trusted real estate partner for buyers and investors exploring India's emerging property
                growth destinations.
              </p>
              <Link to="/mission-vision" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-gold">
                Read Full Mission & Vision
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </motion.article>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-beige">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-[0.85fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[8px] shadow-premium">
              <motion.img
                src={images.director}
                alt="Professional director portrait"
                className="h-[500px] w-full object-cover"
                whileHover={{scale: 1.04}}
                transition={{duration: 0.6}}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeader
              align="left"
              eyebrow="Leadership"
              title="Message From The Director"
              text="At OMANA PROJECTS, our focus is to help buyers make informed real estate decisions with clarity, confidence, and transparency. We believe every plot purchase should be supported by proper guidance, verified information, and long-term thinking."
            />
            <Link to="/director-message" className="btn-primary mt-8">
              Read Director Message
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Industry insights" title="Industry Insights & News" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogs.slice(0, 3).map((post, index) => (
              <Reveal key={post.title} delay={index * 0.05}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-pad">
          <SectionHeader eyebrow="Coverage" title="Top Investment Areas We Cover" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {areas.map((area, index) => (
              <motion.article
                key={area}
                variants={fadeUp}
                transition={{duration: 0.5, delay: index * 0.04}}
                whileHover={{y: -6, boxShadow: "0 0 30px rgba(201, 162, 39, 0.2)"}}
                className="flex items-center gap-4 rounded-[8px] border border-black/5 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-premium"
              >
                <Building2 className="size-9 text-gold" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-navy">{area}</h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Testimonials" title="What Our Clients Say" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.05}>
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-beige px-5 py-3 text-sm font-bold text-navy">
              <CheckCircle2 className="size-5 text-success" aria-hidden="true" />
              Transparent guidance from first call to site visit
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;