/* eslint-disable react-hooks/exhaustive-deps */
import Container from '@/components/container'
import ProtectedRoute from '@/components/protected-route'
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
      <ProtectedRoute>
    <Container className='min-h-[75vh]'>
      {children}
    </Container>
    </ProtectedRoute>
  )
}
