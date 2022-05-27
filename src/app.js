import { useContext, useEffect } from "react"
import { BrowserRouter, Navigate } from "react-router-dom"
import React from 'react'
import AppRoutes from "./routes/routes"
import "./index.scss"
import AuthService from "./services/authService"
import Socket from "./socket"
import { useDispatch, useSelector } from "react-redux"
import { setAuthService, setServerService, setSocketManager } from "./store/reducers/connectionManager"
import ServerService from "./services/serverService"
const App = () => {
  const socketManager = new Socket();
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const authService = new AuthService();
  const serverService = new ServerService();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      authService.checkAuth();
      serverService.getStatus();
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
