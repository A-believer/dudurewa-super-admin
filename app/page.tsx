import Container from '@/components/container'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <Container className='h-[100%] text-center w-full flex flex-col justify-center gap-y-10'>
      <h1 className='text-[40px]'>Hello <span className='text-orange'>Dudurewa 👋</span>,</h1>
      <p className='text-3xl'>Welcome to your <br /><span className='text-orange'>Super Admin</span></p>

    <Link href={`/onboarding`} className='text-2xl border border-orange py-3 px-4 w-fit mx-auto rounded-2xl flex items-center gap-x-3'>
        Get started 😊! <ArrowRightIcon fontSize={40} color=''/> 
      </Link>
    </Container>
  )
}
