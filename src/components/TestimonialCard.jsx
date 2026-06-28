import {Quote, Star} from "lucide-react";
import {motion} from "framer-motion";

const TestimonialCard = ({testimonial}) => {
  return (
    <motion.article
      variants={{
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0},
      }}
      whileHover={{y: -6}}
      transition={{duration: 0.25}}
      className="rounded-[8px] border border-black/5 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-premium"
    >
      <Quote className="size-8 text-gold" aria-hidden="true" />
      <div className="mt-4 flex gap-1 text-gold" aria-label="Five star rating">
        {[0, 1, 2, 3, 4].map((item) => (
          <Star key={item} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 leading-8 text-ink">&ldquo;{testimonial.text}&rdquo;</p>
      <p className="mt-6 font-display text-xl font-bold text-navy">{testimonial.name}</p>
    </motion.article>
  );
};

export default TestimonialCard;