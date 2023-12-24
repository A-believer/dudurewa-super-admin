import { ThemeProvider } from '@/components/ui/theme-provider'
import { Footer, NavBar } from '@/components/index'
import { ModeToggle } from './mode-toggle'

export default function Container({
  children,
  className
}: {
    children: React.ReactNode;
  className: string
}) {
    return (
      <main className='relative max-w-[1520px] mx-auto w-full selection:text-orange selection:bg-foreground'>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
                <NavBar/>
          <section className={`xl:w-[90%] w-[95%] max-w-full mx-auto xl:min-h-[55vh] md:min-h-[80vh] min-h-[75vh] pb-10 ${className}`}>
               
          {children}
          
          </section>
                <Footer /> 
                <div className='fixed right-5 bottom-5 opacity-50 hover:opacity-100'>
                    <ModeToggle/>
                </div>
          </ThemeProvider>
      </main>
        
  )
}
