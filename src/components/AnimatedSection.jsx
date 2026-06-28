import {motion} from "framer-motion";

export const fadeUp = {
  hidden: {opacity: 0, y: 36},
  visible: {opacity: 1, y: 0},
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleIn = {
  hidden: {opacity: 0, scale: 0.96},
  visible: {opacity: 1, scale: 1},
};

const AnimatedSection = ({children, className = "", variants = fadeUp, delay = 0, once = true}) => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{once, amount: 0.2}}
      className={className}
    >
      <motion.div variants={variants} transition={{duration: 0.55, delay}}>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default AnimatedSection;
