import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="max-w-7xl p-5 flex justify-between m-auto items-center">
                <div className="flex items-start gap-3">
                    <Image
                    src="/assets/hamburger.svg"
                    width={24}
                    height={24}
                    alt="menu"
                    className="cursor-pointer"
                    />
                    <Image
                    src="/assets/logo.svg"
                    alt="OruPhones"
                    width={59}
                    height={27}
                    className="cursor-pointer"
                    />
                </div>
                <div className="flex items-start gap-3">
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
                    src="/assets/profile.svg"                    
                    className="bg-profileBgColor rounded-full cursor-pointer"
                    />
                </div>
        </div>
        <hr className="border-1 border-borderBottomPrimary"/>
    </nav>
  )
}

export default Navbar