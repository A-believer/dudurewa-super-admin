import { Button } from '@/components/ui/button'
import { AddCircle } from 'iconsax-react'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-center gap-y-10 w-full'>

      {/* Header  */}
      <div className='w-full flex items-center justify-between'>
        <h3 className='text-2xl font-semibold'>My Dashboard</h3>
        <div className='flex flex-col gap-y-5'>
          <Button variant={`outline`} className='flex items-center gap-x-2 text-foreground border-4 border-orange rounded-lg hover:bg-orange hover:text-white py-4'>
            <AddCircle /> <span>New Order</span>
          </Button>
        </div>
      </div>

      <div>
        <input type="number" name="" id="" />
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
