import {MessageCircle, Phone} from "lucide-react";
import {Link} from "react-router-dom";
import {contact} from "../data/site.js";

const MobileBottomCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 shadow-premium backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={contact.phoneHref} className="btn-outline px-2 py-2 text-xs"><Phone className="size-4" aria-hidden="true" /> Call</a>
        <a href={contact.whatsappHref} className="btn-outline px-2 py-2 text-xs"><MessageCircle className="size-4" aria-hidden="true" /> WhatsApp</a>
        <Link to="/book-site-visit" className="btn-primary px-2 py-2 text-xs">Site Visit</Link>
      </div>
    </div>
  );
};

export default MobileBottomCTA;
