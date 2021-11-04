import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import NavBar from "./components/NavBar/NavBar"



const App=() => {
  return(
      <BrowserRouter>
        <NavBar/>
        <AppRoutes />
      </BrowserRouter>
  )
}

export default App;
