import { formatDate, formatDuration } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const ExperienceCard = ({startDate,endDate,jobType,designation,company}) => {
  const yearsMonths = formatDate(startDate,endDate)
  const duration = formatDuration(yearsMonths) 
  return (
    <div className="border-2 border-borderSubCard p-2 justify-between flex items-center rounded-xl">
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm font-medium gap-3">
                <span>{duration}</span>
                <span>{jobType}</span>
            </div>
            <div className="flex items-center text-sm text-professionalHeaderTextColor gap-5  justify-between">
                <span>{company}</span>
                <span>--{designation}</span>
            </div>
        </div>
        <Image
        alt="logo"
        src="/assets/logo.svg"
        width={70}
        height={70}
        />
    </div>
  )
}

export default ExperienceCard