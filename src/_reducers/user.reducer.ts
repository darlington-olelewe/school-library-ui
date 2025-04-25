import {AppUser} from "../_types";
import {action} from "../_types";


type userState = {
    loggingIn: boolean;
    loggedInUser: AppUser | null;
    userType: null | "ADMIN" | "STUDENT"
}

const initialState = {
    loggingIn: false,
    loggedInUser: null,
    userType: null
}
const appReducer = (state: userState = initialState, action:action)=>{
    switch (action.type) {
        case "USER_LOGGING_IN":{
            return {
                ...state,
                loggingIn: action.payload
            }
        }
        case "USER_LOGIN":{
            const user = action.payload as AppUser;
            return {
                ...state,
                loggedInUser: user,
                userType: user.role
            }
        }

        case "USER_LOGOUT":{
            return {
                ...state,
                loggedInUser: null,
                userType: null
            }
        }

        default:
            return state;
    }
}

export default appReducer;