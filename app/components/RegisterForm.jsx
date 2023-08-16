"use client";
import React, { useEffect, useState } from "react";
import { CldUploadButton } from 'next-cloudinary'
import Image from "next/image";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const RegisterForm = ({ setAuthType }) => {






  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    image:""
  });
  const [err,setError] = useState("")
  useEffect(() => {
    if(err){
      setTimeout(() => {
        setError("")
      }, 2000);
    }
  }, [err])

  const {mutate,isLoading,error} = useMutation({
    mutationFn:async(reqData)=>{
        return await axios.post("/api/register",reqData)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(error || formData.bio.trim().length===0 || formData.email.trim().length===0 || formData.name.trim().length===0 || formData.password.trim().length===0 || formData.phone.trim().length===0  ){
      setError("Cannot register. Make sure to fill all details.")
      return
    }
    mutate(formData)
    setAuthType("login")

  };


  return (
    <form className={`flex  flex-col flex-wrap lg:gap-6`} onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-1 gap-3 w-full">
        <div className="flex items-center flex-wrap justify-between mt-4">
          <Image
            alt="Profile"
            src={formData.image || "/assets/profile.svg"}
            width={71.25}
            height={71.25}
            className="bg-profileBgColor rounded-full"
          />
          <CldUploadButton
            uploadPreset="aoq6nkte"
            onUpload={(result) => {
              setFormData({...formData,image:result.info.secure_url});
            }}
            className="px-5 py-3 bg-buttonBgPrimaryColor  text-xs font-medium text-buttonTextPrimaryColor rounded-full"
          />
        </div>
        <div className="flex flex-col text-sm">
        <label className="text-textLabel">Name</label>
          <input
            type="text"
            name="name"
            className="inputFormStyle"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="flex flex-col text-sm">
        <label className="text-textLabel">Email</label>
          <input
            type="text"
            name="name"
            className="inputFormStyle"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="flex flex-col text-sm">
        <label className="text-textLabel">Phone</label>
          <input
            type="text"
            name="name"
            className="inputFormStyle"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />
        </div>
        <div className="flex flex-col text-sm">
        <label className="text-textLabel">Password</label>
          <input
            type="text"
            name="password"
            className="inputFormStyle"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <div className="flex flex-col text-sm">
        <label className="text-textLabel">Bio</label>
          <input
            type="text"
            name="password"
            className="inputFormStyle"
            value={formData.bio}
            onChange={(e) =>
              setFormData({ ...formData, bio: e.target.value })
            }
            required
          />
        </div>
      </div>
      <Button
      className={"text-sm px-7 py-2 disabled:bg-loadingBtnBgColor mt-3 disabled:text-white"}
      text={isLoading?"Registering...":"Register"}
      disabled={isLoading}
      type={"submit"}
      />
        <span className="text-textPrimary font-medium p-3 cursor-pointer " onClick={()=>setAuthType("login")}>
          <small className="text-textLabel cursor-none pointer-events-none">Have an account?</small> Login Now
        </span>
        {err && <h2 className='text-sm text-red-500 p-3'>{err}</h2>}
    </form>
  );
};

export default RegisterForm;