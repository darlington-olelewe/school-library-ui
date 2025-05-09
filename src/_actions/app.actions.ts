import {BooksDetail, LoginPayload, NotificationModel} from "../_types";
import {AppDispatch} from "../_reducers";
import {appAxios} from "../_helpers";
import {addNewNotification} from "./notification.actions.ts";


export const paginateData = (
    datasource: Record<string, any>[],
    pageNumber: number,
    pageSize: number = 10
) => {
    const totalPage = datasource?.length ?? 0;
    const maxPage = Math.ceil(totalPage / pageSize);
    if (pageNumber < 1 || pageNumber > maxPage) {
        return [];
    }
    pageNumber = pageNumber - 1;
    const start = pageNumber * pageSize;
    const end = start + pageSize;

    return datasource.slice(start, end);
};

export const postUserLogin=(payload: LoginPayload)=>{

    return (dispatch: AppDispatch)=>{

        appAxios
            .post("/api/v1/user-management/login", payload)
            .then((response)=>{
                if(response.status==200){
                    dispatch({type:"USER_LOGIN", payload:response.data.data})
                }

                const notice: NotificationModel = {
                    id: "",
                    title: "Login User",
                    sub: "User Login Successfully",
                    type: "OK",
                };
                dispatch(addNewNotification(notice));
            })
            .catch(()=>{
                const notice: NotificationModel = {
                    id: "",
                    title: "Login User",
                    sub: "User Login Failed",
                    type: "BAD",
                };
                dispatch(addNewNotification(notice));

            })



    }
}

export const getAllBookDetails=()=>{

    return (dispatch: AppDispatch)=>{
        dispatch({type:"FETCHING_ALL_BOOKS", payload:true})

        appAxios
            .get<{data: BooksDetail[]}>("/api/v1/book-management/fetch-all")
            .then((response)=>{
                if(response.status==200){
                    dispatch({type:"FETCH_ALL_BOOKS", payload:response.data.data})
                }
            })
            .catch(()=>{
                const notice: NotificationModel = {
                    id: "",
                    title: "Fetch Books",
                    sub: "Error Fetching all books",
                    type: "BAD",
                };
                dispatch(addNewNotification(notice));

            })
            .finally(()=>{
                dispatch({type:"FETCHING_ALL_BOOKS", payload:false})
            })



    }
}