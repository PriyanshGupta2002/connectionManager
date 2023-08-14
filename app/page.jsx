"use client"

import Image from "next/image";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

const page = () => {
  const [authType, setAuthType] = useState("login")
  return(
 
     <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="border-2 border-borderSubCard cardShadowSecondary p-4 w-[90%] md:w-[50%]  rounded-xl">
        <Image
        alt="logo_oruphones"
        src={"/assets/logo.svg"}
        width={70}
        height={70}
        />
        {authType==="login"?<LoginForm setAuthType={setAuthType}/>:"Register"}
      </div>
    </div>  
  )
    
};

export default page;
