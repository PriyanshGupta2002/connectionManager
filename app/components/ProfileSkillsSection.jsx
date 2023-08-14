"use client"
import React from 'react'
import Button from './Button'
import Modal from './Modal'
import SkillForm from './SkillForm'
import {useState} from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUserProvider } from '@/context/UserContext'
import axios from 'axios'
const ProfileSkillsSection = ({skills,refetch}) => {
    let [isOpen, setIsOpen] = useState(false)
    const [type, setType] = useState(null)
    const [selectedSkill, setselectedSkill] = useState(null)
    const {userInfo} = useUserProvider()

  function openModal() {
    setIsOpen(true)
  }

  const queryClient = useQueryClient()

  function closeModal() {
    setIsOpen(false)
  }
  
  const {mutate,isLoading} = useMutation({
    mutationFn:async(body)=>{
      const {userId,recordId}=body
      return await axios.delete(`/api/user/deleteProfessionalDetail/skills/${recordId}`,{data: { userId }})
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["userInfo"])
      refetch()
    }
  })

  const handleDelete=(id)=>{
    const body = {
      recordId:id,
      userId:userInfo?._id
    }
    mutate(body)
  }

  return (
    <div className="border-2 border-borderSubCard p-4 mt-2 rounded-md font-medium text-textSecondary">
      <Modal
      Form={<SkillForm
      closeModal={closeModal}
      refetch={refetch}
      type={type}
      selectedSkill={selectedSkill}
      setSelectedSkill={setselectedSkill}
      />}
      closeModal={closeModal}
      isOpen={isOpen}
      />
        <div className="flex items-center justify-between">
        <h2 className="text-xl flex flex-col">Skills</h2>
        <Button
        className="px-7 py-2 text-xs"
        text={"Add"}
        onClick={()=>{
          openModal()
          setType("add")
        }}
        />
        </div>
        <div className="flex flex-col gap-4 mt-5">
          {skills?.length>0 ?skills.map((skill,idx)=>(
            <div className='flex items-center justify-between' key={idx}>
            <span >
              {skill.skillName}
            </span>
            <div className='flex items-center gap-4'>

            <Button
        className="px-7 py-2 text-xs"
        text={"Edit"}
        onClick={()=>{
          openModal()
          setType("edit")
          setselectedSkill({...skill})
        }}
        />
            <Button
        className="px-5 py-2 text-xs border-2 bg-red-500 text-white border-none"
        text={"Delete"}
        onClick={()=>{
          handleDelete(skill._id)
        }}
        />
        </div>
            </div>
          )): "Add Your Skills..."}
        </div>
    </div>
  )
}

export default ProfileSkillsSection