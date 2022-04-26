import { combineReducers, createStore } from "redux";
import { currentServerReducer } from "./reducers/serversPageReducers/currentServerReducer";
import { currentServerPlaybackReducer } from "./reducers/serversPageReducers/currentServerPlaybackReducer";
import { websocketManagerReducer } from "./reducers/websocketManagerReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import { serverListReducer } from "./reducers/serversPageReducers/serverListReducer"
import { userListReducer} from "./reducers/serversPageReducers/userListReducer"
import { serverQueueReducer } from "./reducers/serversPageReducers/serverQueueReducer";
import { tokenManagerReducer } from "./reducers/tokenManagerReducer";
import { userListVisibleReducer} from "./reducers/serversPageReducers/userListVisibleReduser"
import { serverListVisibleReduser } from "./reducers/serversPageReducers/serverListVisibleReduser";
import { playbackVisibleReduser } from "./reducers/serversPageReducers/playbackVisibleReduser";
import { externalServerStatusReducer } from "./reducers/externalServerStatus";
import { mainServerStatusReducer } from "./reducers/mainServerStatus";
const rootReducer = combineReducers({
    currentServer: currentServerReducer,
    serverList: serverListReducer,
    currentServerPlayback: currentServerPlaybackReducer, 
    websocketManager: websocketManagerReducer,
    userList: userListReducer,
    serverQueue: serverQueueReducer,
    tokenManager: tokenManagerReducer,
    userListVisible: userListVisibleReducer,
    serverListVisible: serverListVisibleReduser,
    playbackVisible: playbackVisibleReduser,
    externalServerStatus: externalServerStatusReducer,
    mainServerStatus: mainServerStatusReducer,
})
export const Store = createStore(rootReducer, composeWithDevTools());
