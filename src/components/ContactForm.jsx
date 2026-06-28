import {useState} from "react";
import {motion} from "framer-motion";
import {Send} from "lucide-react";

const propertyTypes = ["Residential", "Industrial", "Mixed Use", "Investment"];

const ContactForm = ({compact = false}) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        className="rounded-[8px] border border-success/20 bg-success/10 p-6 text-success"
      >
        <p className="font-bold">Thank you. Our property consultant will contact you shortly.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-bold text-navy">
            Full Name
          </label>
          <input id="name" required className="w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-bold text-navy">
            Phone Number
          </label>
          <input id="phone" required className="w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold" />
        </div>
      </div>

      {!compact ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-navy">
              Email Address
            </label>
            <input id="email" type="email" className="w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold" />
          </div>
          <div>
            <label htmlFor="location" className="mb-2 block text-sm font-bold text-navy">
              Preferred Location
            </label>
            <input id="location" className="w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold" />
          </div>
        </div>
      ) : null}

      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <div>
          <label htmlFor="propertyType" className="mb-2 block text-sm font-bold text-navy">
            Interested Property Type
          </label>
          <select id="propertyType" className="w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold">
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-bold text-navy">
            Budget Range
          </label>
          <input id="budget" className="w-full rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={compact ? 3 : 4}
          className="w-full resize-none rounded-[8px] border border-black/10 px-4 py-3 outline-none transition focus:border-gold"
        />
      </div>

      <motion.button type="submit" className="btn-primary shimmer w-full" whileHover={{scale: 1.02}} whileTap={{scale: 0.97}}>
        <Send className="size-4" aria-hidden="true" />
        {compact ? "Get Property Details" : "Submit Enquiry"}
      </motion.button>
      <p className="text-xs text-muted">No spam. Only verified property guidance from our team.</p>
    </form>
  );
};

export default ContactForm;