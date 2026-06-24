import { createContext, useState } from "react";


export const AuthContext = createContext()
 export default function  AuthProvide({children}){
    const [isLogged,setIsLogged] = useState(false)
      return(
            <AuthContext.Provider value={{isLogged,setIsLogged}}>
                {children}
            </AuthContext.Provider>
      )
}