import { useContext } from "react"
import {TranslationContext} from "../lang/translations/Translation"

const LanguageSelector = () => {
    const translations=useContext(TranslationContext)
    
    const change =(ev)=>{
        console.log =('Idioma->',ev.target.value);
        translations.changeLanguage(ev.target.value);
    }

  return (
    <div>
    <select onChange={change}>

    <option value="es">Español </option>
    <option value="en">English </option>
    </select>
    
    
    </div>
  )
}

export default LanguageSelector