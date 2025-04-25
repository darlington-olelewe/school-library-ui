
import { combineReducers } from "redux";
import currentUserReducer from "./user.reducer";
import notificationReducer from "./notification.reducer";
import appReducer from "./app.reducer";

const rootReducer = combineReducers({
    userState: currentUserReducer,
    notificationState: notificationReducer,
    appState: appReducer,
});

export default rootReducer;

export type AppStore = typeof rootReducer;
// @ts-ignore: Suppress TypeScript error for dynamic key access
export type AppDispatch = AppStore["dispatch"];