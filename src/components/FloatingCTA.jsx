import {ClipboardEdit, MessageCircle, Phone} from "lucide-react";
import {Link} from "react-router-dom";
import {contact} from "../data/site.js";

const FloatingCTA = () => {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="grid size-12 place-items-center rounded-full bg-success text-white shadow-premium transition hover:-translate-y-1"
          aria-label="WhatsApp OMANA PROJECTS"
        >
          <MessageCircle className="size-5" />
        </a>
        <a
          href={contact.phoneHref}
          className="grid size-12 place-items-center rounded-full bg-gold text-navy shadow-premium transition hover:-translate-y-1"
          aria-label="Call OMANA PROJECTS"
        >
          <Phone className="size-5" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-black/10 bg-white shadow-premium md:hidden">
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
      </div>
    </>
  );
};

export default FloatingCTA;
