import { combineReducers, createStore } from "redux";
import { currentServerReducer } from "./reducers/currentServerReducer";
import { currentServerPlaybackReducer } from "./reducers/currentServerPlaybackReducer";
import { websocketManagerReducer } from "./reducers/websocketManagerReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import { serverListReducer } from "./reducers/serverListReducer"
import { userListReducer} from "./reducers/userListReducer"
import { serverQueueReducer } from "./reducers/serverQueueReducer";
import { tokenManagerReducer } from "./reducers/tokenManagerReducer";
const rootReducer = combineReducers({
    currentServer: currentServerReducer,
    serverList: serverListReducer,
    currentServerPlayback: currentServerPlaybackReducer, 
    websocketManager: websocketManagerReducer,
    userList: userListReducer,
    serverQueue: serverQueueReducer,
    tokenManager: tokenManagerReducer
})
export const Store = createStore(rootReducer, composeWithDevTools());
