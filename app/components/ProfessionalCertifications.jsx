import React from 'react'
import Button from './Button'
import Image from 'next/image'

const ProfessionalCertifications = ({certifications}) => {
  return (
    <div className="mt-2 flex flex-col gap-3 border-2 border-borderSubCard p-3 rounded-xl">
        <div className="flex items-center justify-between my-2">
            <span >Certifications</span>
            <Button
            className="px-7 py-2 text-xs font-medium"
            text={"Edit"}
            />
        </div>
        <div className="border-2 border-borderSubCard py-3 rounded-full flex items-center justify-evenly">
            <Image
            alt="certificate logo"
            src="/assets/certificateLogo.svg"
            width={35}
            height={35}
            />
            {certifications?.length > 0 ? (certifications.map((item,idx)=>(
                <div className="flex flex-col items-center text-base text-professionalHeaderTextColor font-medium" key={idx}>
                <span>
                    {item.certificateName}
                </span>
                <span>
                    {item.certificateCompanyName}
                </span>
            </div>
            ))):"Add Some certifications"}
            
        </div>
    </div>
  )
}

export default ProfessionalCertifications