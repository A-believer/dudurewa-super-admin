/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'
import Form from './form'
import { Button } from '@/components/ui/button'
import { AddCircle, ClipboardText, ClipboardTick, Trash } from 'iconsax-react'
import { useAuth } from '@/lib/context/AuthContext'
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase-config'
import toast from 'react-hot-toast'


export default function TodoList() {
  const [openForm, setOpenForm] = useState<boolean>(false)
  const {todo, getTodoList, loadingTodo} = useAuth() 

  const deleteTodo = async(id: string) => {
    try {
      await deleteDoc(doc(db, "Todos", id))
      getTodoList()

    } catch (error: any) {
      console.log(error.message)
    }
  }

  const updateTodoStatus = async (id: string) => {
    const todoRef = doc(db, "Todos", id)
    try {
      await updateDoc(todoRef, {
        status: true
      })
      getTodoList()
      toast.success("task completed!")
    } catch (error: any) {
      
    }
  }

  

  console.log(todo)
  return (
    <div className='w-full flex flex-col gap-y-5 py-6'>
      <div className='w-[95%] mx-auto flex items-center justify-between'>
        <p className='text-3xl'>My Todo List</p>
        <Button
          variant={'outline'}
          className='flex items-center gap-x-2'
          onClick={() => setOpenForm(prev => !prev)}>
          <AddCircle />
          <span>New Todo</span>
        </Button>
      </div>
      {openForm && <Form/>}
      <div>
        {loadingTodo &&
          <div>Loading</div>}
          
          {todo.length > 0 && !loadingTodo ? todo?.map((item) => (
            <div key={item.id} className='flex items-center justify-between'>
              <p>{item?.title}</p>

              <div className='flex items-center gap-x-2'>
                <Button variant={'ghost'} className='px-0' onClick={() => updateTodoStatus(item.id)}>{!item.status ? <ClipboardText className='text-gray-800'/> : <ClipboardTick className='text-green-500'/>}</Button>
                <Button variant={'ghost'} className='px-0' onClick={() => deleteTodo(item.id)}><Trash className='text-red-800 font-bold'/></Button>
              </div>
          </div>
          )) :
          <div>
            No tasks
        </div>
        }
      </div>
    </div>
  )
}
