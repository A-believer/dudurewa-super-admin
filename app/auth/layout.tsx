/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import AuthProtectedRoute from '@/components/auth-protected-route';
import Container from '@/components/container'
import React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
 

  return (
    <AuthProtectedRoute>
      <Container className='flex justify-center items-center px-5 md:py-14 py-8'>{children}</Container>
    </AuthProtectedRoute>
  )
}
