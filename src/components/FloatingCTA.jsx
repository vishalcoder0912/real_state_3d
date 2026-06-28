import {ClipboardEdit, MessageCircle, Phone} from "lucide-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {contact} from "../data/site.js";

const FloatingCTA = () => {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <motion.a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          initial={{scale: 0, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{delay: 1, type: "spring", stiffness: 260, damping: 20}}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className="grid size-12 place-items-center rounded-full bg-success text-white shadow-premium"
          aria-label="WhatsApp OMANA PROJECTS"
        >
          <MessageCircle className="size-5" />
        </motion.a>
        <motion.a
          href={contact.phoneHref}
          initial={{scale: 0, opacity: 0}}
          animate={{scale: 1, opacity: 1}}
          transition={{delay: 1.2, type: "spring", stiffness: 260, damping: 20}}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.9}}
          className="grid size-12 place-items-center rounded-full bg-gold text-navy shadow-premium"
          aria-label="Call OMANA PROJECTS"
        >
          <Phone className="size-5" />
        </motion.a>
      </div>

      <motion.div
        initial={{y: 100}}
        animate={{y: 0}}
        transition={{delay: 0.5, type: "spring", stiffness: 200, damping: 25}}
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-black/10 bg-white shadow-premium md:hidden"
      >
        <a href={contact.phoneHref} className="flex flex-col items-center gap-1 py-3 text-xs font-extrabold text-navy">
          <Phone className="size-5 text-gold" />
          Call
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-extrabold text-navy"
        >
          <MessageCircle className="size-5 text-success" />
          WhatsApp
        </a>
        <Link to="/contact-us" className="flex flex-col items-center gap-1 py-3 text-xs font-extrabold text-navy">
          <ClipboardEdit className="size-5 text-gold" />
          Enquire
        </Link>
      </motion.div>
    </>
  );
};

export default FloatingCTA;