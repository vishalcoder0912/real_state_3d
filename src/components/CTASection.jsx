import {Mail, MessageCircle, Phone} from "lucide-react";
import {motion} from "framer-motion";
import {contact} from "../data/site.js";

const CTASection = () => {
  return (
    <section className="section-y relative isolate overflow-hidden bg-navy text-white">
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]"
        animate={{opacity: [0.3, 0.6, 0.3]}}
        transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
      />
      <div className="container-pad relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.55}}
          >
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Talk to an expert</p>
            <h2 className="font-display text-4xl font-extrabold tracking-normal sm:text-5xl">
              Ready to Explore Dholera Plot Opportunities?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              Speak with our property experts and get curated options based on your budget and investment goals.
            </p>
            <div className="mt-6 grid gap-2 text-white/80">
              <a href={contact.phoneHref} className="flex items-center gap-3 transition hover:text-gold">
                <Phone className="size-5 text-gold" aria-hidden="true" />
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="flex items-center gap-3 transition hover:text-gold">
                <Mail className="size-5 text-gold" aria-hidden="true" />
                {contact.email}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.55, delay: 0.1}}
            className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
          >
            <motion.a href={contact.phoneHref} className="btn-primary" whileHover={{scale: 1.04}} whileTap={{scale: 0.96}}>
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </motion.a>
            <motion.a href="/contact-us" className="btn-secondary" whileHover={{scale: 1.04}} whileTap={{scale: 0.96}}>
              Request Callback
            </motion.a>
            <motion.a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary" whileHover={{scale: 1.04}} whileTap={{scale: 0.96}}>
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;