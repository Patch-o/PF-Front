export interface ThemeContextState{
    theme: string;
    handleTheme: (nameTheme: string) => void;
}
export interface MyContextProp{
    children: JSX.Element
}