import { createContext , FC } from "react";
import type { ContextProps } from "../types";
export const themeContext:any = createContext('light');


export const ThemeProvider:FC<ContextProps>= ({ children, theme , toggleTheme}) => {
    return (
        <themeContext.Provider value={{theme, toggleTheme}} >
            {children}
        </themeContext.Provider>
    );
}