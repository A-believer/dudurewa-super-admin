/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Container from '@/components/container'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
 

  return (
    
      <div className='flex justify-center items-center px-5 md:py-14 py-8 min-h-[90vh] w-[90%] mx-auto'>{children}</div>
    
  )
}
