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
      <main className='max-w-[1520px] mx-auto w-full relative'>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
                <NavBar/>
          <div className={`xl:w-[90%] w-[95%] max-w-full mx-auto xl:min-h-[55vh] md:min-h-[80vh] min-h-[75vh] h-full ${className}`}>
               
          {children}
          
          </div>
                <Footer /> 
                <div className='fixed right-5 bottom-5'>
                    <ModeToggle/>
                </div>
          </ThemeProvider>
      </main>
        
  )
}
