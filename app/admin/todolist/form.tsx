"use client"
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { todoFormSchema } from "@/lib/schemas/formSchema";
import {yupResolver} from "@hookform/resolvers/yup"
import { useAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface FormData {
    title: string;
    description: string
}

export default function Form() {
    const {addTodoHandler} = useAuth()
    const {register, handleSubmit,reset, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(todoFormSchema),
  })
    const onSubmit = async ({title, description}: FormData) => {
        try {
            await addTodoHandler(title, description)
            console.log({ title, description });
            reset()
            toast.success("todo added")
        } catch (error: any) {
            console.log({error})
        } 
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col items-center justify-center gap-y-7'>
          <h1 className="text-center text-[28px] leading-8 text-orange font-semibold">Log In to your Super Admin</h1>
          
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="title" className="text-lg">Title</label>
              <input
                  type="text"
                  id="title"
                  {...register("title")}
                  className="py-4 pl-4 rounded-xl bg-transparent outline-none focus:bg-transparent active:bg-transparent border-4 focus:border-4"/>
              <span className="text-red-600">
                  {errors.title && errors.title.message}
              </span>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <label htmlFor="description">Describe todo</label>
              <textarea
                  id="description"
                  {...register("description")}
                  className="py-4 pl-4 rounded-xl bg-transparent outline-none focus:bg-transparent active:bg-transparent border-4 active:border-4"
              ></textarea>
              <span className="text-red-600">{errors.description && errors.description.message}</span>
          </div>
          <Button variant={'outline'} type="submit" className="text-2xl border-4 border-orange py-5 px-4 w-fit mx-auto rounded-xl hover:bg-orange">Add </Button>
      </form>
  )
}
