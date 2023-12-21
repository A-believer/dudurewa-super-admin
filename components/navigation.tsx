import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const itemIds = [0, 1, 2, 3, 4];


const Navigation = () => (
  <motion.ul variants={variants} className="absolute top-[108px] left-0 w-full bg-background flex flex-col items-stretch justify-center gap-y-10 text-center border border-foreground min-h-[75vh] rounded-2xl z-50">
    {itemIds.map(i => (
        
        <motion.li
            className="w-full"
            key={i}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      hello
    </motion.li>
    ))}
  </motion.ul>
);

export default Navigation