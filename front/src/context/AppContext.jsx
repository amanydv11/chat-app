import { createContext, useState,useContext } from "react";

export const AppContext = createContext();

export const useAppContext=()=>{
    return useContext(AppContext);
}

export const AppContextProvider =({children})=>{
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null )


    return (
    <AppContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AppContext.Provider>
    )
}