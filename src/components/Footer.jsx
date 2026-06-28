import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send} from "lucide-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {contact, footerCompanyLinks, propertyLinks} from "../data/site.js";
import Logo from "./Logo.jsx";

const fadeUp = {
  hidden: {opacity: 0, y: 24},
  visible: {opacity: 1, y: 0},
};

const Footer = () => {
  return (
    <footer className="bg-navy pb-24 text-white md:pb-0">
      <div className="container-pad grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.5}}>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            A trusted real estate company helping buyers and investors explore residential, industrial, and
            mixed-use plot opportunities.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/75">
            <a href={contact.phoneHref} className="flex items-center gap-3 transition hover:text-gold">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-3 transition hover:text-gold">
              <Mail className="size-4 text-gold" aria-hidden="true" />
              {contact.email}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              {contact.footerAddress}
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.5, delay: 0.08}}>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Our Company</h2>
          <div className="mt-5 grid gap-3">
            {footerCompanyLinks.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-white/70 transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.5, delay: 0.16}}>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Our Properties</h2>
          <div className="mt-5 grid gap-3">
            {propertyLinks.map((item) => (
              <Link key={item.path} to={item.path} className="text-sm text-white/70 transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.5, delay: 0.24}}>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Subscribe & Follow</h2>
          <form className="mt-5 flex overflow-hidden rounded-full border border-white/15 bg-white/10">
            <label htmlFor="footerEmail" className="sr-only">
              Email address
            </label>
            <input
              id="footerEmail"
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <button type="submit" className="grid size-12 place-items-center bg-gold text-navy" aria-label="Subscribe">
              <Send className="size-4" />
            </button>
          </form>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="/"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold hover:text-gold"
                aria-label="Social media"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
          <motion.a
            href={contact.whatsappHref}
            className="btn-primary mt-6 w-full"
            target="_blank"
            rel="noreferrer"
            whileHover={{scale: 1.04}}
            whileTap={{scale: 0.96}}
          >
            WhatsApp Us
          </motion.a>
        </motion.div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad flex flex-col gap-2 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 OMANA PROJECTS. All Rights Reserved.</p>
          <p>Designed by SRJ WEB SOLUTIONS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
