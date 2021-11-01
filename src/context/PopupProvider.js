import { createContext,useState } from "react";

export const PopupContext = createContext();

export function PopupProvider({children}){
    const [isOpen, setIsOpen] = useState(false);
    return <PopupContext.Provider value={{isOpen,setIsOpen}}>
        {children}
    </PopupContext.Provider>
}

