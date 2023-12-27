import { AuthProvider } from '@/lib/context/AuthContext'
import React from 'react'

export default function AuthLayout() {
  return (
      <AuthProvider>
          AuthLayout
      </AuthProvider>
  )
}
