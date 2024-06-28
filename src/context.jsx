import { createContext,useContext, useState, useEffect} from "react";



const AppContext = createContext()

const AppProvider = ({children})=>{
  
  const getInitialDarkMode = () =>{
  const prefersDarkMode = window.matchMedia("(prefers-color-schema:dark)").matches
  
  const storedDarkMode = localStorage.getItem("darkTheme")


  return storedDarkMode || prefersDarkMode
}

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [search, setSearch] = useState("")


   const toggleDarkTheme = () =>{
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme);

    const body = document.querySelector("body")
     
    body.classList.toggle("dark-theme", newDarkTheme )
    localStorage.setItem("darkTheme", newDarkTheme)
   }
  

   useEffect(()=>{
     document.body.classList.toggle("dark-theme")
   },[])
 
   

  return (
    <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, search, setSearch}}>
     {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
  return useContext(AppContext)
}


export default AppProvider