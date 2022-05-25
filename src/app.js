import { useContext, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import React from 'react'
import AppRoutes from "./components/AppRoutes"
import "./index.scss"
import AuthService from "./services/authService"
import Socket from "./socket"
import { useDispatch } from "react-redux"
import { setAuthService, setServerService, setSocketManager } from "./store/reducers/connectionManager"
import ServerService from "./services/serverService"
const App = () => {
  const socketManager = new Socket();
  const dispatch = useDispatch();
  const authService = new AuthService();
  const serverService = new ServerService();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      authService.checkAuth();
    }
    socketManager.connect();
    dispatch(setSocketManager(socketManager))
    dispatch(setAuthService(authService))
    dispatch(setServerService(serverService))
  }, [])

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
