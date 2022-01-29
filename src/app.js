import { useState, useEffect } from "react"
import React from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import NavBar from "./components/NavBar/NavBar"
import AuthContext from "./context/authorization"
import WebSocketContext from "./context/websocket"
import WebsocketManager from "./websocketManager"
import { useDispatch } from "react-redux"
import TokenManager from "./tokenManager"

const App = () => {
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState(true);
  const tokenManager = new TokenManager();
  const websocketManager = new WebsocketManager();
  websocketManager.connect();
  useEffect(() => {
    setAuthState(true);
    dispatch({ type: "SET_TOKEN_MANAGER", payload: tokenManager });
    dispatch({ type: "SET_WEBSOCKET_MANAGER", payload: websocketManager });
  }, [])

  function showNavBar() {
    if (authState === true) { return <NavBar><AppRoutes /></NavBar> }
    else return <AppRoutes />
  }
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <WebSocketContext.Provider value={{ websocketManager }}>
        <BrowserRouter>
          {showNavBar()}
        </BrowserRouter>
      </WebSocketContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
