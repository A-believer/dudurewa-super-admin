import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
      <footer className='xl:w-fit w-[95%] mx-auto flex flex-col items-center text-center italic text-xl md:py-5 py-3 md:px-10 px-0 font-bold rounded-2xl text-foreground/50 border border-orange my-5 animate-pulse'>
          <h2>Made with 💜 by <Link target='_blank' href={`https://davidabolade-portfolio.vercel.app/`} className='text-orange'>`<span className='underline underline-offset-4'>Nimi</span></Link></h2>
          <p className='text-base'>In partial fufillment of easing your life!</p>
    </footer>
  )
}
