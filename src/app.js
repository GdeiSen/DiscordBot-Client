import { useState, useEffect } from "react"
import React from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import ConnectionManager from "./services/connectionManager"
import { useDispatch } from "react-redux"
import TokenManager from "./services/tokenManager"

const App = () => {
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState(true);
  const tokenManager = new TokenManager();
  const connectionManager = new ConnectionManager();
  connectionManager.connect();
  useEffect(() => {
    setAuthState(true);
    dispatch({ type: "SET_TOKEN_MANAGER", payload: tokenManager });
    dispatch({ type: "SET_WEBSOCKET_MANAGER", payload: connectionManager });
  }, [])

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App;
