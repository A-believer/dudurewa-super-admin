"use client"
import { logo } from '@/public/pngs'
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

export default function Logo() {
  return (
      <motion.div
      whileHover={{
    scale: 1.1
  }}
       className='bg-yellow rounded-b-full w-fit flex items-end justify-center border border-foreground'>
          <Image src={logo} alt='dudurewa logo' className='md:w-[150px] w-[100px]'/>
    </motion.div>
  )
}
