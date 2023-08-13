import Navbar from '@/app/components/Navbar'
import ProfileSection from '@/app/components/ProfileSection'
import React from 'react'

const page = () => {
  return (
    <div className="p-0">
        <Navbar/>
        <ProfileSection/>
    </div>
  )
}

export default page