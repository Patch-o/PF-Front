import { createContext, useState, } from "react";
import { ThemeContextState, MyContextProp } from "./types";
import React from "react";

const contextDefaultValue: ThemeContextState = {
    theme: "light",
    handleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextState>(
        contextDefaultValue
)

const ThemeProvider = ({children}: MyContextProp) => {
    const [theme, setTheme] = useState<string>(contextDefaultValue.theme);
    const handleTheme = (newTheme : string) => {
        if(newTheme === "light") setTheme("light");
        else setTheme("dark");

    };
    return (<ThemeContext.Provider value={{
        theme,
        handleTheme
    }}>
        {children}
    </ThemeContext.Provider>)
}

export default ThemeProvider;