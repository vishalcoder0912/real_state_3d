import {ArrowRight, CheckCircle2} from "lucide-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import ContactForm from "./ContactForm.jsx";
import HeroCityScene from "./HeroCityScene.jsx";
import {trustBadges} from "../data/sections.js";

const stagger = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.12}},
};

const childUp = {
  hidden: {opacity: 0, y: 30},
  visible: {opacity: 1, y: 0},
};

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <HeroCityScene />
      <div className="container-pad grid min-h-[760px] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.85fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="overflow-hidden">
          <motion.p variants={childUp} transition={{duration: 0.5}} className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-gold backdrop-blur">
            Dholera Plot Projects • Residential • Industrial • Mixed Use
          </motion.p>
          <motion.h1 variants={childUp} transition={{duration: 0.6}} className="max-w-4xl font-display text-5xl font-extrabold leading-tight tracking-normal sm:text-6xl lg:text-7xl">
            Invest in the Future of Dholera Smart City
          </motion.h1>
          <motion.p variants={childUp} transition={{duration: 0.55}} className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Explore premium residential, industrial, and mixed-use plot opportunities with transparent guidance, site visit support, and expert property consultation.
          </motion.p>
          <motion.div variants={childUp} transition={{duration: 0.5}} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/projects" className="btn-primary shimmer">
              Explore Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link to="/book-site-visit" className="btn-secondary">
              Book Free Consultation
            </Link>
          </motion.div>
          <motion.div variants={childUp} transition={{duration: 0.55}} className="mt-9 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <motion.div
                key={badge}
                whileHover={{scale: 1.04}}
                className="flex items-center gap-3 rounded-[8px] border border-white/15 bg-white/10 p-3 backdrop-blur"
              >
                <CheckCircle2 className="size-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm font-semibold text-white/90">{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 50, y: 20}}
          animate={{opacity: 1, x: 0, y: 0}}
          transition={{duration: 0.7, delay: 0.3, ease: "easeOut"}}
          className="rounded-[8px] border border-white/20 bg-white p-5 text-ink shadow-premium lg:p-7"
        >
          <div className="mb-5">
            <h2 className="font-display text-3xl font-bold text-navy">Find the Right Plot</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Share your requirement and receive curated property options.</p>
          </div>
          <ContactForm compact />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
