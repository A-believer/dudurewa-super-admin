import type { Metadata } from 'next'
import { Familjen_Grotesk } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/lib/context/AuthContext'
import {Toaster} from "react-hot-toast"
 

const inter = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
},
)

export const metadata: Metadata = {
  title: 'Dudurewa Super Admin',
  description: 'Record Everything Dudurewa Shawarma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        <Toaster />
    </AuthProvider>
      </body>
    </html>
    
  )
}
