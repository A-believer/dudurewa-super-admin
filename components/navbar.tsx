"use client"
import React from 'react'
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion"
import { Logo } from './'
import Link from 'next/link'
import { useDimensions } from '@/lib/use-dimensions';
import Navigation from './navigation';
import MenuToggle from './menu-toggle';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function NavBar() {
     const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
      <header className='relative flex justify-between items-center xl:w-[90%] w-[95%] max-w-full mx-auto h-full'>
          <Link href={`/`}>
              <Logo />
          </Link>

          <motion.nav
                  className='xl:hidden flex'
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="absolute top-0 right-0 w-[300px] bg-background" variants={sidebar} />
      
              <MenuToggle toggle={() => toggleOpen()} />
              {isOpen && <Navigation />}
    </motion.nav>
    </header>
  )
}