import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children})=> {
     const[isAuthenticated,setIsAuthenticated] = useState(false);
     
     useEffect(()=> {
        const flag =  localStorage.getItem("isLoggedIn");
        if(flag){
            setIsAuthenticated(true);
        }
     },[])

     const login = () => {
        localStorage.setItem("isLoggedIn",true);
        setIsAuthenticated(true);
     };

     const logout = () => {

     }


    return (
        <>
           <AuthContext.Provider value={{isAuthenticated,login,logout}}>
              {children}
            </AuthContext.Provider>
        </>
    )

}

export default AuthProvider;
