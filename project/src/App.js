import {React, useState, useEffect} from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import NavBar from "./components/NavBar/NavBar"
import AuthContext from "./context"



const App=() => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  },[])
  return(
    <AuthContext.Provider
    value = {
      {
        isAuth,setIsAuth
      }
    }>
      <BrowserRouter>
        <NavBar/>
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
