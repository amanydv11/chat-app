import { Children, createContext, useState,useContext } from "react";

export const AppContext = createContext()

export const AppContextProvider =({Children})=>{
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("user")) || null )


    return (
    <AppContext.Provider value={{authUser,setAuthUser}}>
        {Children}
    </AppContext.Provider>
    )
}