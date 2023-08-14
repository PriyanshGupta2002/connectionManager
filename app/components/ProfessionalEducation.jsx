import React from 'react'
import Button from './Button'
import { formatDate, formatDuration } from '@/lib/utils'

const ProfessionalEducation = ({education}) => {
  return (
    <div className="border-2 border-borderSubCard p-3 mt-2 rounded-xl">
        <div className="flex justify-between items-center">
            <h1 className=" text-base">Education</h1>
            <Button
            text="Edit"
            className="px-7 py-2 text-xs"
            />
        </div>
        {education.map((item)=>{
            const date = formatDate(item.startDate,item.endDate)
          return(
             <div className='p-3 border-2 border-borderSubCard rounded-xl mt-4'>
             <h1 className='text-textPrimary text-base font-medium uppercase'>{item.collegeName}</h1>
               <div className="flex items-center justify-between font-medium text-textSecondary my-3 p-2">
                   <span>{date.startYear}-{date.endYear}</span>
                   <span>{item.degree}</span>
               </div>
               <p className="text-professionalHeaderTextColor">
               Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
               </p>
           </div>
        )})}
     
    </div>
  )
}

export default ProfessionalEducation