import React from 'react'
import ProfilePhotoSection from './ProfilePhotoSection'
import PersonalProfileUserInfo from './PersonalProfileUserInfo'
import PersonalProfileBio from './PersonalProfileBio'
import ProfileSkillsSection from './ProfileSkillsSection'
import ProfessionalDetailsHeader from './ProfessionalDetailsHeader'
import ProfessionalCertifications from './ProfessionalCertifications'

const ProfileSection = () => {
  return (
    <div class="mt-3 p-3 relative isolate">
    <div class="max-w-7xl p-3 h-[90px] rounded-md text-xs m-auto text-white bg-cardPrimary">
        My Profile
    </div>
    <div class=" absolute w-[400px]  sm:w-[500px] h-max  left-1/2 transform -translate-x-1/2 top-1/2 rounded-xl  flex flex-col gap-6">
        <div className="bg-cardSecondary border-1 border-borderSubCard  cardShadowSecondary p-3 flex flex-col rounded-xl">
           <ProfilePhotoSection/>
           <PersonalProfileUserInfo/>
           <PersonalProfileBio/>
           <ProfileSkillsSection/>
        </div>
        <div className="bg-cardSecondary  cardShadowSecondary border-1 border-borderSubCard p-3 flex flex-col rounded-xl">
          <ProfessionalDetailsHeader/>
          <ProfessionalCertifications/>
        </div>
    </div>      
</div>
  )
}

export default ProfileSection