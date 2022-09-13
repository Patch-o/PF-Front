import {IntlProvider} from "react-intl" ;
import spanish from "./es.json";
import english from "./en.json";
import { createContext, useState } from "react";


export const TranslationContext=createContext(null);

const userLanguage=navigator.language

// let locale='es';
// let messages=spanish;

// if(userLanguage==='es'){
//     locale ='es'
//     messages=spanish
// } ;
// if(userLanguage==='en'){
//     locale='en'
//     messages=english
// } ;

const TranslationWrapper=(props)=>{
    const [locale,setLocale]=useState(navigator.language);
    const [messages,setMessages]=useState(spanish)
    const changeLanguage=(language)=>{

        setLocale(language);

        if(language==='es') setMessages(spanish);
        if(language==='en') setMessages(english);

    }
    return(
        <div>
        <TranslationContext.Provider value={{changeLanguage}}>
            <IntlProvider locale={locale} default='es' messages={messages}>
                {props.children}
            </IntlProvider>
        </TranslationContext.Provider>
</div>
    )
};

export default TranslationWrapper;

