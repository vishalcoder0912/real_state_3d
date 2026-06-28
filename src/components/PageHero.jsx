import {motion} from "framer-motion";

const PageHero = ({title, text, image}) => {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 text-white sm:py-28">
      <img src={image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      <motion.div
        initial={{opacity: 0, y: 24}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="container-pad max-w-4xl"
      >
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-gold">OMANA PROJECTS</p>
        <h1 className="font-display text-5xl font-extrabold tracking-normal sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{text}</p>
      </motion.div>
    </section>
  );
};

export default PageHero;
