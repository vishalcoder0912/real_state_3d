import {ArrowRight} from "lucide-react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const BlogCard = ({post}) => {
  return (
    <motion.article
      variants={{
        hidden: {opacity: 0, y: 36},
        visible: {opacity: 1, y: 0},
      }}
      whileHover={{y: -8}}
      transition={{duration: 0.25}}
      className="overflow-hidden rounded-[8px] border border-black/5 bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
          loading="lazy"
          whileHover={{scale: 1.06}}
          transition={{duration: 0.6}}
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-beige px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-navy">
            {post.category}
          </span>
          <span className="text-xs font-bold text-muted">{post.date}</span>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy">{post.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{post.summary}</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-gold transition hover:gap-3">
          Read More
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;