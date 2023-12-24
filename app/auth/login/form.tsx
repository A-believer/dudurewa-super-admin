"use client"
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button'
import React from 'react'
import { formSchema } from "@/lib/schemas/formSchema";
import {yupResolver} from "@hookform/resolvers/yup"

interface FormData {
    email: string;
    password: string
}

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(formSchema),
  })
    const onSubmit = async (data) => {
       console.log(data)
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col items-center justify-center'>
          <h1>Log In to your Super Admin</h1>
          <input type="email" name="email" id="email" />
          <input type="password" name="password" id="password" autoComplete='current-password'/>
          <Button variant={'outline'} type="submit">Submit</Button>
      </form>
  )
}
