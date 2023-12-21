"use client"
/* eslint-disable @next/next/no-img-element */
// Photos from https://citizenofnowhe.re/lines-of-the-city
import {
  AnimatePresence,
  motion, useAnimation, useInView
} from "framer-motion";
import Container from "@/components/container";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { onboardingCardData } from "@/lib/data";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
    };


export default function Onboarding() {
  const ref = useRef(null)

  function Card({ src, tag, info, description }: { src: any; tag: string; info: string;  description: string}) {
  const container = useRef(null)
    const isInView = useInView(ref, { once: true })
    const isInViewI = useInView(container, {once: true})
  const mainControls = useAnimation()
  const slideControls = useAnimation()
    
  useEffect(() => {
    if (isInView) {
       mainControls.start("visible")
    }
    if (isInViewI) {
       slideControls.start("visible")
    }
  })
  
  return (
    
      <>
      <motion.div
        ref={container}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {opacity: 1, y: 0}  
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.25}}
      >
          <Image src={src} alt="image" className="w-full h-full object-cover object-center" />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/10">
            <div className="bg-black/50 w-full h-full relative flex flex-col items-center justify-center gap-y-4 text-center">
              <h2 className="absolute top-9 right-9 text-4xl font-black tracking-wider">{tag}</h2>
            <p className="text-orange text-3xl font-black w-[95%] italic hover:underline underline-offset-4transition-all duration-500 tracking-wider capitalize">{info}</p>
            <p className="w-[90%] tracking-wider">{description}</p>
            </div>
            
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { top: 0 },
            visible: {top: "100%"}
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 2, ease: "easeIn" }}
          className="w-full h-full absolute top-0 left-0 bg-orange z-20 flex justify-center items-center text-4xl font-black tracking-wider">
          {tag}
        </motion.div>
    </>
  )
}

  return (
    <Container className="py-5 space-y-10 md:h-[70vh] h-[50vh] w-f  overflow-scroll no-scrollbar bg-onboardingOne">
      <div ref={ref}>
        {onboardingCardData?.map((item, i) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
      className="relative overflow-hidden xl:w-[500px] w-full h-[450px] mx-auto my-5 rounded-xl"
            key={item?.id}>
            <Card
            
            src={item?.imageSrc}
            tag={item?.tag}
            info={item?.info}
            description={item?.description} />
          </motion.div>
        
      ))}
      </div>
      <Link href={`/auth/login`} className='text-2xl border-4 border-orange py-3 px-4 w-fit mx-auto rounded-2xl flex items-center gap-x-3'>Click here to login</Link>
    </Container>
  );
}
