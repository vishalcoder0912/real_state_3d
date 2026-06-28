import {useEffect, useState} from "react";
import {stats} from "../data/sections.js";

const Count = ({value, suffix}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  if (value === 1 && !suffix) {
    return <span className="text-2xl sm:text-3xl">✓</span>;
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-pad">
        <div className="grid gap-3 rounded-[8px] border border-black/5 bg-white p-4 shadow-premium md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[8px] bg-mist p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-navy">
                <Count value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-bold text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
