import {action} from "../_types";
type appState = {
    books: string[]
}

const initialState = {
    books: ['lord of the rings', 'hobbit', 'harry potter']
}
const appReducer = (state: appState = initialState, action:action)=>{
    switch (action.type) {
        case "ADD_BOOK":{
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        }

        default:
            return state;
    }
}

export default appReducer;