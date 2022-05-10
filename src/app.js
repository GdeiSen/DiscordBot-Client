import { useEffect } from "react"
import React from 'react'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./components/AppRoutes"
import ConnectionManager from "./services/connectionManager"
import { useDispatch } from "react-redux"
import { setConnectionManager } from "./store/reducers/connectionManagerSlice"

const App = () => {
  const dispatch = useDispatch();
  const connectionManager = new ConnectionManager();
  useEffect(() => {
    dispatch(setConnectionManager(connectionManager));
    connectionManager.connect();
  }, [])

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
