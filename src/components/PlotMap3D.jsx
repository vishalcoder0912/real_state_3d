import {ArrowRight, Factory, Home, Landmark, MapPinned} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const zones = [
  {
    title: "Residential Zone",
    href: "/projects/residential-plots",
    icon: Home,
    grid: "col-span-2 row-span-2",
    description: "Future home planning, lifestyle-led layouts, and long-term plot evaluation.",
    stats: "Residential plots • Site visit support",
  },
  {
    title: "Industrial Zone",
    href: "/projects/industrial-plots",
    icon: Factory,
    grid: "col-span-2",
    description: "Manufacturing, logistics, warehousing, and business expansion focused land.",
    stats: "Industrial land • Connectivity focused",
  },
  {
    title: "Mixed-Use Zone",
    href: "/projects/mixed-use",
    icon: Landmark,
    grid: "col-span-1 row-span-2",
    description: "Flexible commercial plus residential use cases for emerging development corridors.",
    stats: "Commercial + residential flexibility",
  },
  {
    title: "Investment Zone",
    href: "/projects/plot-for-buy",
    icon: MapPinned,
    grid: "col-span-3",
    description: "Requirement-based plot matching for buyers comparing budget, location, and use.",
    stats: "Curated options • Price on request",
  },
];

const PlotMap3D = () => {
  const [active, setActive] = useState(zones[0]);
  const ActiveIcon = active.icon;

  return (
    <section className="section-y bg-navy text-white">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-gold">Interactive plot explorer</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">Explore Dholera Plot Zones</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/72">
            Hover through the smart-city style zone map to compare residential, industrial, mixed-use, and investment-led plot categories before sending an enquiry.
          </p>

          <div className="mt-10 grid min-h-[430px] grid-cols-4 grid-rows-4 gap-4 rounded-[16px] border border-white/10 bg-white/5 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.28)] [perspective:1200px]">
            {zones.map((zone) => {
              const Icon = zone.icon;
              const selected = active.title === zone.title;
              return (
                <motion.div
                  key={zone.title}
                  role="button"
                  tabIndex={0}
                  onMouseEnter={() => setActive(zone)}
                  onFocus={() => setActive(zone)}
                  whileHover={{y: -12, rotateX: 7, rotateY: -5, scale: 1.02}}
                  className={`${zone.grid} group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-[14px] border p-5 transition ${selected ? "border-gold bg-gold/18 shadow-[0_0_40px_rgba(201,162,39,0.28)]" : "border-white/10 bg-white/8"}`}
                >
                  <div className="absolute inset-x-4 top-4 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
                  <Icon className="size-9 text-gold" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-2xl font-bold">{zone.title}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">{zone.stats}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.aside
          key={active.title}
          initial={{opacity: 0, x: 24}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.3}}
          className="rounded-[16px] border border-white/12 bg-white p-7 text-ink shadow-premium"
        >
          <div className="grid size-14 place-items-center rounded-full bg-gold/15 text-gold">
            <ActiveIcon className="size-8" aria-hidden="true" />
          </div>
          <h3 className="mt-6 font-display text-3xl font-extrabold text-navy">{active.title}</h3>
          <p className="mt-4 leading-8 text-muted">{active.description}</p>
          <div className="mt-6 rounded-[12px] bg-beige p-4 text-sm font-bold text-navy">{active.stats}</div>
          <Link to={active.href} className="btn-primary mt-7 w-full">
            View This Zone
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </motion.aside>
      </div>
    </section>
  );
};

export default PlotMap3D;
