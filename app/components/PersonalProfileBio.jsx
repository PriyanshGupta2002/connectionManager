import React from 'react'
import Button from './Button'

const PersonalProfileBio = () => {
  return (
    <div className="border-2 border-borderSubCard p-5 flex flex-col rounded-md text-base mt-2">
      <div className="flex items-center justify-between my-2">
        <span className="flex items-center font-medium gap-1">
          About <span className="text-borderPrimary">Priyansh</span>
        </span>
        <Button className="px-7 py-2 text-xs font-medium" text={"Edit"}/>
      </div>
      <p className="text-bioTextColor font-normal text-justify my-2 leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum eligendi dicta est deleniti numquam rem molestiae quod doloribus assumenda?
      </p>
    </div>
  )
}

export default PersonalProfileBio