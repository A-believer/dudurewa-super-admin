"use client"
import { useForm } from "react-hook-form";
import { Button } from '@/components/ui/button'
import React from 'react'
import { signUpformSchema } from "@/lib/schemas/formSchema";
import {yupResolver} from "@hookform/resolvers/yup"
import { UserAuth } from "@/lib/context/AuthContext";
import { useRouter } from "next/navigation";


interface FormData {
    username: string;
    email: string;
    password: string
}

export default function Form() {
    const { signUp, user } = UserAuth()
    const router = useRouter()
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(signUpformSchema),
  })
    const onSubmit = async ({email, password, username}: FormData) => {
        try {
            await signUp(email, password, username)
            router.push('/admin/dashboard')
        } catch (error: any) {
            console.log({ error })
        } finally {
        } 
        console.log({username, email, password})
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)} className='w-full h-full flex flex-col items-center justify-center gap-y-7'>
          <h1 className="text-center text-[28px] leading-8 text-orange font-semibold">Sign Up to your Super Admin</h1>

          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="username" className="text-lg">Your Username Preference</label>
        <input
          type="text"
          id="username"
          {...register("username")}
        className="py-4 pl-4 rounded-xl bg-transparent outline-none focus:bg-transparent active:bg-transparent border-4 focus:border-4"/>
              <span className="text-red-600">{errors.username && errors.username.message}</span>
          </div>
          
          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="email" className="text-lg">Your Email</label>
              <input type="email" id="email" {...register("email")} className="py-4 pl-4 rounded-xl bg-transparent outline-none focus:bg-transparent active:bg-transparent border-4 focus:border-4"/>
              <span className="text-red-600">{errors.email && errors.email.message}</span>
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <label htmlFor="pasword" className="text-lg">Your Password</label>
              <input type="password" id="password" {...register("password")} className="py-4 pl-4 rounded-xl bg-transparent outline-none focus:bg-transparent active:bg-transparent border-4 focus:border-4"/>
              <span className="text-red-600">{errors.email && errors.email.message}</span>
          </div>
          <Button variant={'outline'} type="submit">Sign Up</Button>
      </form>
  )
}
