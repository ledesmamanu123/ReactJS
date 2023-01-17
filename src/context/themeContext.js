import { createContext, useState } from "react";

export const themeContext = createContext(null)

export const ThemeContextProvider =({children})=>{
    //Estado del tema
    const [theme, setTheme] = useState("light")
    const onChangeTheme =(theme)=>{
       setTheme(theme)
    }
    
    return(
        <themeContext.Provider
        value={{theme, onChangeTheme}}>
            {children}
        </themeContext.Provider>
    )
}