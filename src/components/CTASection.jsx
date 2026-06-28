import {Mail, MessageCircle, Phone} from "lucide-react";
import {contact} from "../data/site.js";

const CTASection = () => {
  return (
    <section className="section-y bg-navy text-white">
      <div className="container-pad">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
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
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <a href={contact.phoneHref} className="btn-primary">
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
            <a href="/contact-us" className="btn-secondary">
              Request Callback
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
