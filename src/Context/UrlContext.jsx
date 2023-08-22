import { createContext } from "react";
const url = import.meta.env.VITE_BASE_URL

export const UrlContext = createContext()

export const UrlContextProvider = ({children}) => {
  return(
    <UrlContext.Provider value={{url}}>
        {children}
    </UrlContext.Provider>
      )
}


