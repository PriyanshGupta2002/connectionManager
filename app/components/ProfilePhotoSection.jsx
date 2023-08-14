"use client"
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useSession } from 'next-auth/react'
const ProfilePhotoSection = ({image,refetch}) => {
  const {data:session} = useSession()
  const queryClient = useQueryClient()
  const [imgUrl, setImgUrl] = useState(null)
  const {mutate} = useMutation({
    mutationFn:async(url)=>{
      await axios.patch(`/api/user/editUserInfo/${session?.user?.id}`,{image:url})
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(['userInfo'])
      refetch()
    }
  })
  useEffect(() => {
      if (imgUrl) {
        mutate(imgUrl)
      }
  }, [imgUrl])
  


  return (
    <div className="flex items-center justify-between">
    <Image
    alt="Profile"
    src={image || "/assets/profile.svg"}
    width={71.25}
    height={71.25}
    className="bg-profileBgColor rounded-full"
    />

    {/* <Button text={"Upload"} className="px-5 py-3  text-xs font-medium"/> */}
    <CldUploadButton
    uploadPreset='aoq6nkte'
    onUpload={(result)=>{
      setImgUrl(result.info.secure_url)
    }}
    className='px-5 py-3 bg-buttonBgPrimaryColor text-xs font-medium text-buttonTextPrimaryColor rounded-full'
    />
</div>
  )
}

export default ProfilePhotoSection