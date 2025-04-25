import { thunk } from "redux-thunk"; // Correct way to import thunk
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../_reducers";

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure the Redux store
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;