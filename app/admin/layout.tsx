import Container from '@/components/container'
import ProtectedRoute from '@/components/protected-route'
import React from 'react'

export default function AdminLayout({children}: {children : React.ReactNode}) {
  
  return (
    
    <Container className=''>
      <ProtectedRoute>
        {children}
      </ProtectedRoute>
    </Container>
    
  )
}
