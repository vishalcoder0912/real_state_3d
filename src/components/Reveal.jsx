import {motion} from "framer-motion";

const Reveal = ({children, className = "", delay = 0}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 26}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.55, delay}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
