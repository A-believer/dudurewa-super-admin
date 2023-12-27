"use client"
import React from 'react'
import Form from './form'
import { Button } from '@/components/ui/button'
import { AddCircle } from 'iconsax-react'
import { useAuth } from '@/lib/context/AuthContext'

export default function TodoList() {
  const {todo} = useAuth()
  return (
    <div className='w-full flex flex-col gap-y-5 py-6'>
      <div className='w-full flex items-center justify-between'>
        <p>My Todo List</p>
        <Button variant={'outline'} className=''><AddCircle/> <span>New Todo</span></Button>
      </div>
      <Form/>
      <div>
        {/* {todo.map((item) => (
          <div key={item.id}>
            {item.title}
          </div>
        ))} */}
      </div>
    </div>
  )
}
