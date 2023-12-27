"use client"
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Footer, NavBar, NavBarDesktop } from '@/components/index'
import { ModeToggle } from './mode-toggle'
import { AuthProvider, useAuth } from '@/lib/context/AuthContext';

export default function Container({
  children,
  className
}: {
    children: React.ReactNode;
  className: string
  }) {
  const {user} = useAuth()
  return (
   
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
      >
      <main className='relative max-w-[1520px] mx-auto w-full min-h-screen h-full selection:text-orange selection:bg-foreground flex xl:flex-row flex-col '>
        {user && <>
          <NavBar />
          <NavBarDesktop/>
        </>}
          
          <section className={`xl:w-[80%] w-[95%] max-w-full mx-auto overflow-auto  ${className}`}>
               
          {children}
          
          </section>
                <Footer /> 
                <div className='fixed right-5 bottom-5 opacity-50 hover:opacity-100 z-50'>
                    <ModeToggle/>
        </div>
      </main>
        
          </ThemeProvider>     

        
  )
}
