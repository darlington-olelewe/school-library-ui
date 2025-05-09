import {Provider} from "react-redux";
import configureStore from "./_store";
import {NotificationsOverlap} from "./_context";
import {AppRoutes} from "./_routes";
import {SideNav} from "./_components/SideNav";
import style from "./App.module.css"
import {Dashboard} from "./_components/Dashboard";
import {UserLoader} from "./_components/Userloader/Userloader.tsx";

export default function App() {





    return (
       <Provider store={configureStore}>
           <NotificationsOverlap>
<UserLoader>
               <div>
                   <Dashboard/>
                   <div className={style.layout}>
                       <SideNav/>
                       <AppRoutes/>
                   </div>
               </div>
</UserLoader>


           </NotificationsOverlap>
       </Provider>
    )
}
