import React, { createContext, useState } from "react";


export const DarkMode = createContext({});

const ModeDarkContextProvider = ({children}) => {
    const [ isDarkMode, setIsDarkMode ]= useState(false);
    const state = {isDarkMode, setIsDarkMode};

    return(
        <DarkMode.Provider value={state}>
            {children}
        </DarkMode.Provider>        
    )

}
export default ModeDarkContextProvider;