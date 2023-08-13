import React from 'react'
import Image from 'next/image'
import Button from './Button'
const ProfilePhotoSection = () => {
  return (
    <div className="flex items-center justify-between">
    <Image
    alt="Profile"
    src="/assets/profile.svg"
    width={71.25}
    height={71.25}
    className="bg-profileBgColor rounded-full"
    />

    <Button text={"Upload"} className="px-5 py-3  text-xs font-medium"/>
</div>
  )
}

export default ProfilePhotoSection