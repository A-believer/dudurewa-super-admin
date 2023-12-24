import Container from '@/components/container'
import React from 'react'

export default function AuthLayout({children}: {children : React.ReactNode} ) {
  return (
      <Container className=''>{children}</Container>
  )
}
