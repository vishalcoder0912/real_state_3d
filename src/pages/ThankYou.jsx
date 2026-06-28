import {CheckCircle2, MessageCircle, Phone} from "lucide-react";
import {Link} from "react-router-dom";
import {contact} from "../data/site.js";

const ThankYou = () => {
  return (
    <section className="section-y bg-beige">
      <div className="container-pad flex min-h-[520px] items-center justify-center">
        <div className="max-w-3xl rounded-[22px] border border-black/5 bg-white p-8 text-center shadow-premium sm:p-12">
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-success/10 text-success">
            <CheckCircle2 className="size-11" aria-hidden="true" />
          </div>
          <h1 className="mt-7 font-display text-5xl font-extrabold text-navy">Thank You</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted">
            Your enquiry has been received. The OMANA PROJECTS team will review your requirement and contact you with the next steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={contact.phoneHref} className="btn-primary"><Phone className="size-4" aria-hidden="true" /> Call Now</a>
            <a href={contact.whatsappHref} className="btn-outline"><MessageCircle className="size-4" aria-hidden="true" /> WhatsApp Us</a>
            <Link to="/projects" className="btn-outline">Explore Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
