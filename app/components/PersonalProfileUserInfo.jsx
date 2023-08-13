import React from 'react'

const PersonalProfileUserInfo = () => {
  return (
    <div className="border-2 border-borderSubCard p-2 rounded-md text-base mt-2">
                <div className="flex flex-col gap-2 my-5 mx-4 font-medium"> 
                    <span className="text-labelTextColor">Your Name</span>
                    <span>Priyansh Gupta</span>
                </div>
                <div className="flex flex-col gap-2 my-5 mx-4 font-medium"> 
                    <span className="text-labelTextColor">Email</span>
                    <span>priyansh@oruphones.com</span>
                </div>
                <div className="flex flex-col gap-2 my-5 mx-4 font-medium"> 
                    <span className="text-labelTextColor">Phone Number</span>
                    <span>+91 49652845732</span>
                </div>
            </div>
  )
}

export default PersonalProfileUserInfo