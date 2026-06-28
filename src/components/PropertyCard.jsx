import {ArrowRight, CheckCircle2, MapPin} from "lucide-react";
import {Link} from "react-router-dom";

const PropertyCard = ({property}) => {
  return (
    <article className="premium-card image-zoom overflow-hidden">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={property.image} alt={property.title} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-navy">
          {property.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-navy">{property.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-muted">
          <MapPin className="size-4 text-gold" aria-hidden="true" />
          {property.location}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-[8px] bg-beige p-3">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Starting Price</p>
            <p className="mt-1 font-bold text-navy">{property.price}</p>
          </div>
          <div className="rounded-[8px] bg-mist p-3">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Plot Size</p>
            <p className="mt-1 font-bold text-navy">{property.size}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          {property.highlights.map((highlight) => (
            <p key={highlight} className="flex items-center gap-2 text-sm text-ink">
              <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
              {highlight}
            </p>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link to="/projects" className="btn-outline px-3">
            View Details
          </Link>
          <Link to="/contact-us" className="btn-primary px-3">
            Enquire Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
