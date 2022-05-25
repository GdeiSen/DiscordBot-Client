import { combineReducers, configureStore } from '@reduxjs/toolkit'
import connectionManager from './reducers/connectionManager';
import refreshSlice from './reducers/refreshSlice';
import serversSlice from './reducers/serversSlice';
import serverStatusSlice from './reducers/serverStatusSlice';
import userSlice from './reducers/userSlice';

const rootReducer = combineReducers({
    servers: serversSlice,
    connectionManagers: connectionManager,
    serverStatus: serverStatusSlice,
    user: userSlice,
    refresh: refreshSlice,
})
export const Store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

