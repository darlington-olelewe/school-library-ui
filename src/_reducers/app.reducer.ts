import {action, BooksDetail} from "../_types";
type appState = {
    fetchingBooks: boolean;
    fetchAllBooks: BooksDetail[];
}

const initialState = {
    fetchingBooks: false,
    fetchAllBooks: [],

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

        default:
            return state;
    }
}

export default appReducer;