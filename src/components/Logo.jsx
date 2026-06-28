import {Map} from "lucide-react";
import {Link} from "react-router-dom";

const Logo = ({light = false}) => {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="OMANA PROJECTS home">
      <span className={`grid size-11 place-items-center rounded-[8px] ${light ? "bg-white" : "bg-navy"}`}>
        <Map className="size-6 text-gold" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-xl font-extrabold tracking-normal ${
            light ? "text-white" : "text-navy"
          }`}
        >
          OMANA
        </span>
        <span className={`block text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-white/70" : "text-muted"}`}>
          Projects
        </span>
      </span>
    </Link>
  );
};

export default Logo;
