"use client"
import {createContext,useContext,useState} from 'react'
const UserContext = createContext(null)

export const UserContextProvider=({children})=>{


    const [userInfo, setUserInfo] = useState(null)


    const values= {
        userInfo,
        setUserInfo
    }

    return <UserContext.Provider value={values}>
        {children}
    </UserContext.Provider>
}
export const useUserProvider = ()=>{
    const ctx = useContext(UserContext)
    return ctx
}