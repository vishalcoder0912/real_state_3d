import {Quote, Star} from "lucide-react";

const TestimonialCard = ({testimonial}) => {
  return (
    <article className="premium-card p-6">
      <Quote className="size-8 text-gold" aria-hidden="true" />
      <div className="mt-4 flex gap-1 text-gold" aria-label="Five star rating">
        {[0, 1, 2, 3, 4].map((item) => (
          <Star key={item} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-5 leading-8 text-ink">“{testimonial.text}”</p>
      <p className="mt-6 font-display text-xl font-bold text-navy">{testimonial.name}</p>
    </article>
  );
};

export default TestimonialCard;
