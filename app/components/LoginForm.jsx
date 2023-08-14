"use client"
import React,{useState} from 'react'
import Button from './Button'
import {signIn, useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const LoginForm = ({setAuthType}) => {
    
  const router = useRouter()
   const{status} = useSession()
   if(status==="authenticated") {
    router.push('/profile')
   }
    const [formData, setformData] = useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
         const user = await signIn("credentials",{...formData,redirect:false})
         if(user.error) return
         router.push(`/profile`)

    }
  return (
    <>
    <form action="" className="my-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="email" className="text-textLabel  text-base font-medium">Email</label>
            <input type="text" className="border-2 border-borderSubCard focus:border-borderPrimary p-2 h-12 outline-none rounded-xl" placeholder="johndoe@gmail.com"  value={formData.email} onChange={handleChange} name='email'/>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="email" className="text-textLabel text-base font-medium">Password</label>
            <input type="password" className="border-2 border-borderSubCard focus:border-borderPrimary p-2 h-12 outline-none rounded-xl" placeholder="johndoe"  value={formData.password} onChange={handleChange} name='password'/>
          </div>
         <Button
         className="text-sm py-2 px-7 bg-transparent border-2 border-borderPrimary text-textPrimary"
         text={"Login"}
         />
        </form>
        <span className="text-textPrimary font-medium p-3 cursor-pointer " onClick={()=>setAuthType("register")}>
          <small className="text-textLabel cursor-none pointer-events-none">Don't have an account yet?</small> Register Now
        </span>
         </>
  )
}

export default LoginForm