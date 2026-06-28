import {ArrowRight, CheckCircle2} from "lucide-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <motion.article
      variants={{
        hidden: {opacity: 0, y: 36},
        visible: {opacity: 1, y: 0},
      }}
      whileHover={{y: -8, scale: 1.015}}
      transition={{duration: 0.25}}
      className="overflow-hidden rounded-[8px] border border-black/5 bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.img
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover"
          loading="lazy"
          whileHover={{scale: 1.06}}
          transition={{duration: 0.6}}
        />
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
    </motion.article>
  );
};

export default CategoryCard;