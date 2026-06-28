import {Mail, Menu, Phone, X} from "lucide-react";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";
import {contact, navItems} from "../data/site.js";
import Logo from "./Logo.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({isActive}) =>
    `text-sm font-semibold transition hover:text-gold ${
      isActive ? "text-gold" : "text-ink"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "bg-white/95 shadow-premium backdrop-blur-md" : "bg-white/95 backdrop-blur"
      }`}
    >
      <div className="hidden bg-navy py-2 text-sm text-white lg:block">
        <div className="container-pad flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={contact.phoneHref} className="flex items-center gap-2 transition hover:text-gold">
              <Phone className="size-4" aria-hidden="true" />
              {contact.phone}
            </a>
            <a href={contact.emailHref} className="flex items-center gap-2 transition hover:text-gold">
              <Mail className="size-4" aria-hidden="true" />
              {contact.email}
            </a>
          </div>
          <span className="text-white/75">Premium plot guidance for Dholera and emerging corridors</span>
        </div>
      </div>

      <nav className="container-pad flex min-h-20 items-center justify-between gap-4">
        <Logo />

        <div className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.phoneHref} className="btn-outline px-5 py-2.5">
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <NavLink to="/contact-us" className="btn-primary shimmer px-5 py-2.5">
            Get Started
          </NavLink>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-[8px] border border-black/10 text-navy xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Open navigation menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: "auto", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.25, ease: "easeInOut"}}
            className="overflow-hidden border-t border-black/5 bg-white xl:hidden"
          >
            <div className="container-pad grid gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({isActive}) =>
                    `rounded-[8px] px-3 py-3 text-sm font-bold ${isActive ? "bg-beige text-navy" : "text-ink"}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a href={contact.phoneHref} className="btn-outline py-2.5">
                  Call Now
                </a>
                <NavLink to="/contact-us" onClick={() => setOpen(false)} className="btn-primary py-2.5">
                  Enquire
                </NavLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;