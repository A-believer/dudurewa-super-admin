import Container from '@/components/container'
import React from 'react'

export default function AuthLayout({children}: {children : React.ReactNode} ) {
  return (
      <Container className='flex justify-center items-center px-5 h-full py-8'>{children}</Container>
  )
}
