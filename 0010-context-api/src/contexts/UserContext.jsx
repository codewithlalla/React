import { useState } from "react";
import { useContext } from "react";
import { Children } from "react";
import { createContext } from "react";

const UserContext = createContext();


export const UserContextProvider = ({children})=>{

    const [user, setUser] = useState(null);

    return(
        <UserContext value={{user, setUser}}>
{children}
        </UserContext>
    )
}

export const useUser = ()=> useContext(UserContext)