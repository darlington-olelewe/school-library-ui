import {Provider, useDispatch} from "react-redux";
import configureStore from "./_store";
import {AppDispatch} from "./_reducers";
import {NotificationsOverlap} from "./_context";
import {useEffect} from "react";
import {addNewNotification} from "./_actions";
import {NotificationModel} from "./_types";
import {AppRoutes} from "./_routes";

export default function App() {





    return (
       <Provider store={configureStore}>
           <NotificationsOverlap>
               <AppRoutes/>
           </NotificationsOverlap>
       </Provider>
    )
}
