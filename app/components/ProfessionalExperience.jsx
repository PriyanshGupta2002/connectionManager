import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ExperienceCard from './ExperienceCard'

const ProfessionalExperience = ({experiences}) => {
  return (
    <div className="border-2 border-borderSubCard p-3 flex flex-col gap-3 mt-2 rounded-xl">
            <div className="flex items-center justify-between">
                <span className="text-textSecondary">Experience</span>
                <Button
                className="px-7 py-2 text-xs"
                text="Edit"
                />
            </div>
            {experiences?.map((item,idx)=>(
              <ExperienceCard
              key={idx}
              startDate={item.startDate}
              endDate={item.endDate || "Present"}
              jobType={item.jobType}
              designation={item?.designation}
              company={item?.company}
              />
            ))}
            {/* <ExperienceCard
            startDate="7 years (2014-2021)"
            jobType="Internship"
            designation="Full Stack Developer"
            company="Oruphones"
            key="1"
            />
            <ExperienceCard
            startDate="6 months (2014)"
            jobType="Internship"
            designation="Full Stack Developer"
            company="Oruphones"
            key="2"
            /> */}
    </div>
  )
}

export default ProfessionalExperience