import {action, BooksDetail, UserInfo} from "../_types";
type appState = {
    fetchingBooks: boolean;
    fetchAllBooks: BooksDetail[];

    users : UserInfo[];
    fetchingUsers: boolean;
}

const initialState = {
    fetchingBooks: false,
    fetchAllBooks: [],
    users: [],
    fetchingUsers: false,

}
const appReducer = (state: appState = initialState, action:action)=>{
    switch (action.type) {
        case "FETCH_ALL_BOOKS":{
            return {
                ...state,
                fetchAllBooks: action.payload
            }
        }

        case "FETCHING_ALL_BOOKS":{
            return {
                ...state,
                fetchingBooks: action.payload
            }
        }

        case "USERS":{
            return {
                ...state,
                users: action.payload
            }
        }

        case "FETCHING_USERS":{
            return {
                ...state,
                fetchingUsers: action.payload
            }
        }

        default:
            return state;
    }
}

export default appReducer;