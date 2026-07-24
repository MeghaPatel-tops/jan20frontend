import { Children, createContext, useState } from "react";

export const UserLoggedContext = createContext();

const UserLoggedProvider = ({children})=>{
    const [logged,setLogged]= useState(false)
    return(
        <UserLoggedContext.Provider value={{logged,setLogged}}>
            {children}
        </UserLoggedContext.Provider>
    )
}
export default UserLoggedProvider