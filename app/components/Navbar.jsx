"use client"
import Image from 'next/image'
import React from 'react'
import { useUserProvider } from '@/context/UserContext'

const Navbar = () => {
    const {userInfo,setShowSideBar} = useUserProvider()
  return (
    <nav className='sticky top-0 z-40 bg-white'>
        <div className="max-w-7xl p-5 lg:p-3 flex justify-between m-auto items-center">
                <div className="flex items-start gap-3">
                    <Image
                    src="/assets/hamburger.svg"
                    width={24}
                    height={24}
                    alt="menu"
                    className="cursor-pointer"
                    onClick={()=>setShowSideBar(prevState=>!prevState)}
                    />
                    <Image
                    src={"/assets/logo.svg"}
                    alt="OruPhones"
                    width={59}
                    height={27}
                    className="cursor-pointer"
                    />
                </div>
                <div className="flex items-start gap-3 lg:items-center">
                    <Image
                    alt="notification"
                    height={24}
                    width={24}
                    src="/assets/Notification.svg"
                    className="cursor-pointer"
                    />
                    <Image
                    alt="profile"
                    height={24}
                    width={24}
                    src={userInfo?.image || "/assets/profile.svg"}                    
                    className="bg-profileBgColor rounded-full cursor-pointer lg:hidden"
                    />
                    <div className="hidden lg:flex items-center gap-5 justify-between border-2 border-profileAvatarBorder rounded-md p-2">
                          <div className="flex items-center gap-2">
                              <Image
                              alt="profile-avatar"
                              src={userInfo?.image || "/assets/profile.svg"} 
                              width={34}
                              height={34}
                              className="bg-profileBgColor rounded-md"
                              />
                              <div className="flex flex-col font-medium text-textPrimary">
                                  <small>Welcome Back,</small>
                                  <span>{userInfo?.name}</span>
                              </div>
                          </div>
                          <Image
                          src="/assets/arrowDown.svg"
                          alt="arrow-down"
                          height={25}
                          width={25}
                          className="cursor-pointer"
                          />
                    </div>
                </div>
        </div>
        {/* <button className='text-sm text-labelTextColor bg-buttonBgPrimaryColor' onClick={()=>signOut()}>
            Sign Out
        </button> */}
        <hr className="border-1 border-borderBottomPrimary"/>
    </nav>
  )
}

export default Navbar