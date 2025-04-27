import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const DashboardContext = createContext();


export const DashboardContextProvider = ({children})=>{

    const [dashboard, setDashbord] = useState(null);

    return(
        <DashboardContext value={{dashboard, setDashbord}}>
            {children}
        </DashboardContext>
    )
}


export const useDashbordContext = ()=> useContext(DashboardContext);