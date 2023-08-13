import React from 'react'

const ProfileSkillsSection = () => {
  return (
    <div className="border-2 border-borderSubCard p-4 mt-2 rounded-md font-medium text-textSecondary">
        <h2 className="text-xl flex flex-col">Skills</h2>
        <div className="flex flex-col gap-4 mt-5">
            <span>
                NextJs
            </span>
            <span>
                React Js
            </span>
        </div>
    </div>
  )
}

export default ProfileSkillsSection