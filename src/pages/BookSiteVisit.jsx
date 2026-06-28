import {CalendarDays, CheckCircle2, MapPinned, Phone} from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";

const steps = ["Share preferred date and time", "Choose plot category", "Confirm travel details", "Receive team callback"];

const BookSiteVisit = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.28),transparent_30%)]" />
        <div className="container-pad grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-gold">Site visit booking</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight sm:text-6xl">Book a Guided Dholera Site Visit</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">Schedule a callback for residential, industrial, mixed-use, or budget-based plot options and get clear next steps from the Omana team.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[18px] border border-white/15 bg-white p-6 text-ink shadow-premium">
              <CalendarDays className="size-10 text-gold" aria-hidden="true" />
              <h2 className="mt-4 font-display text-3xl font-bold text-navy">Request Visit Details</h2>
              <div className="mt-5">
                <ContactForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-pad">
          <SectionHeader eyebrow="Next steps" title="How Your Site Visit Request Works" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <div className="h-full rounded-[14px] border border-black/5 bg-mist p-6 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-full bg-gold font-display text-xl font-bold text-navy">{index + 1}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">{step}</h3>
                  <CheckCircle2 className="mt-5 size-6 text-success" aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige py-12">
        <div className="container-pad flex flex-col items-start justify-between gap-6 rounded-[18px] bg-navy p-8 text-white md:flex-row md:items-center">
          <div>
            <MapPinned className="mb-4 size-9 text-gold" aria-hidden="true" />
            <h2 className="font-display text-3xl font-bold">Need faster confirmation?</h2>
            <p className="mt-2 text-white/70">Call the team directly for availability and visit coordination.</p>
          </div>
          <a href="tel:+919217104219" className="btn-primary"><Phone className="size-4" aria-hidden="true" /> Call Now</a>
        </div>
      </section>
    </>
  );
};

export default BookSiteVisit;
