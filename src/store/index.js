import { combineReducers, configureStore } from '@reduxjs/toolkit'
import serversSlice from './reducers/serversSlice';
import serverStatusSlice from './reducers/serverStatusSlice';
import tokenManagerSlice from './reducers/tokenManagerSlice';
import connectionManagerSlice from './reducers/connectionManagerSlice';

const rootReducer = combineReducers({
    servers: serversSlice,
    connectionManager: connectionManagerSlice,
    tokenManager: tokenManagerSlice,
    serverStatus: serverStatusSlice,
})
export const Store = configureStore({ 
    reducer: rootReducer, 
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

