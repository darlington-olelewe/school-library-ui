import {Route, Routes} from "react-router-dom";
import {LoginSignUp} from "../Pages";
import {Check} from "../Pages/Check/Check.tsx";


export const AppRoutes =()=>{


    return (

        <Routes>

            <Route path="/welcome-page" element={<LoginSignUp/>} />
            <Route path="/check" element={<Check/>} />


        </Routes>
    )
}