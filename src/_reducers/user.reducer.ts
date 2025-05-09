import {LoggedInState} from "../_types";
import {action} from "../_types";


type userState = {
    loggingIn: boolean;
    loggedInUser: LoggedInState | null;
}

const initialState = {
    loggingIn: false,
    loggedInUser: null
}
const appReducer = (state: userState = initialState, action:action)=>{
    switch (action.type) {
        case "USER_LOGIN":
            localStorage.setItem("lib-user", JSON.stringify(action.payload));
            return {
                ...state,
                loggedInUser: action.payload
            }

        case "USER_LOGOUT":
            localStorage.removeItem("lib-user");
            return {
                ...state,
                loggedInUser: null
            }

        default: {
            const storedUser: userState = JSON.parse(localStorage.getItem("lib-user") ?? "null");

            return {
                ...state,
                loggedInUser: storedUser
            }
        }


    }
}

export default appReducer;