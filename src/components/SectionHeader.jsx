import {motion} from "framer-motion";

const SectionHeader = ({eyebrow, title, text, align = "center", light = false}) => {
  const centered = align === "center";

  return (
    <motion.div
      initial={{opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.4}}
      transition={{duration: 0.55}}
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow ? (
        <p className={`mb-3 text-sm font-extrabold uppercase tracking-[0.18em] ${light ? "text-gold" : "text-gold"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-3xl font-extrabold tracking-normal sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-base leading-8 ${light ? "text-white/70" : "text-muted"}`}>{text}</p> : null}
    </motion.div>
  );
};

export default SectionHeader;
