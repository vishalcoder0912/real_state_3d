import {Mail, MapPin, MessageCircle, Phone} from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import {contact, images} from "../data/site.js";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Tell us your plot requirement and our property consultant will help you evaluate suitable options."
        image={images.contact}
      />
      <section className="section-y bg-white">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-5">
              <SectionHeader align="left" eyebrow="Contact details" title="Speak with OMANA PROJECTS" />
              <a href={contact.phoneHref} className="premium-card flex items-center gap-4 p-5">
                <Phone className="size-7 text-gold" aria-hidden="true" />
                <span className="font-bold text-navy">{contact.phone}</span>
              </a>
              <a href={contact.emailHref} className="premium-card flex items-center gap-4 p-5">
                <Mail className="size-7 text-gold" aria-hidden="true" />
                <span className="font-bold text-navy">{contact.email}</span>
              </a>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="premium-card flex items-center gap-4 p-5">
                <MessageCircle className="size-7 text-success" aria-hidden="true" />
                <span className="font-bold text-navy">WhatsApp / Call CTA</span>
              </a>
              <div className="premium-card flex items-start gap-4 p-5">
                <MapPin className="mt-1 size-7 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-bold leading-7 text-navy">{contact.footerAddress}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[8px] bg-mist p-6 shadow-premium">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-y bg-beige">
        <div className="container-pad grid gap-8 lg:grid-cols-2">
          <Reveal>
            <article className="premium-card h-full p-8">
              <h2 className="font-display text-4xl font-bold text-navy">Office address</h2>
              <p className="mt-4 leading-8 text-muted">{contact.footerAddress}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-gold">Primary location</p>
              <p className="mt-2 leading-8 text-muted">{contact.primaryAddress}</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid min-h-[360px] place-items-center rounded-[8px] border border-black/10 bg-white shadow-premium">
              <div className="text-center">
                <MapPin className="mx-auto size-12 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-display text-3xl font-bold text-navy">Google map placeholder</h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                  Embed the verified Google Maps office location here when the map URL is available.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
