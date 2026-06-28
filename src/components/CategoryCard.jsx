import {ArrowRight, CheckCircle2} from "lucide-react";
import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <article className="premium-card image-zoom overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={category.image} alt={category.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-navy">{category.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
        <div className="mt-5 grid gap-2">
          {category.highlights.map((highlight) => (
            <p key={highlight} className="flex items-center gap-2 text-sm font-semibold text-ink">
              <CheckCircle2 className="size-4 text-gold" aria-hidden="true" />
              {highlight}
            </p>
          ))}
        </div>
        <Link to={category.href} className="btn-outline mt-6 w-full">
          {category.cta}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};

export default CategoryCard;
