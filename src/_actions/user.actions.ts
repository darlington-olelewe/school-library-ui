import {LoginPayload, NotificationModel} from "../_types";
import {AppDispatch} from "../_reducers";
import {appAxios} from "../_helpers";
import {addNewNotification} from "./notification.actions.ts";


export const postUserLogin=(payload: LoginPayload, navCallback: ()=>void)=>{

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
                navCallback();


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