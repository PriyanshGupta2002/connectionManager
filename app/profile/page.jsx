"use client"
import Navbar from '@/app/components/Navbar'
import ProfileSection from '@/app/components/ProfileSection'
import React,{useState,useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import { newRequest } from '@/lib/utils'
import { useUserProvider } from '@/context/UserContext'

const page = () => {
  const {data:session,status} = useSession()
  const {setUserInfo} = useUserProvider()
  const router = useRouter()
  if(status==="unauthenticated") {
    router.push("/")
  }
  const id = session?.user?.id


  const { isLoading, error, data,refetch } = useQuery({
    queryKey: [id,"userInfo"],
    queryFn: () => axios.get(`/api/user/getUserInfo/${id}`).then((res) => {
      return res.data;
    }),
    enabled:id?true:false
  })
  useEffect(() => {
      if (data) {
        setUserInfo(data)
      }
  }, [data])
  

  if(isLoading) return "Loading...."
  return (
    <div className="p-0">
        <ProfileSection userData={data} refetch={refetch}/>
    </div>
  )
}

export default page