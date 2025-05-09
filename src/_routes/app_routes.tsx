import {Navigate, Route, Routes} from "react-router-dom";
import {LoginSignUp} from "../Pages";
import {BooksPage} from "../Pages/Admin/BooksPage/BooksPage.tsx";
import {AdminRoutes} from "./AuthGuard.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../_store";
import {LoggedInState} from "../_types";


export const AppRoutes =()=>{

    const user : LoggedInState = useSelector(
        (state: RootState) => state.userState.loggedInUser
    );


    return (
        <Routes>
            <Route path="/login" element={<LoginSignUp/>} />

            <Route path={"/"} element={user.role === "ADMIN" ? <Navigate to={"/admin/books"}/> : <Navigate to={"/student/books"}/>}/>

            <Route element={<AdminRoutes/>}>
                <Route path="/admin/books" element={<BooksPage/>} />
            </Route>

        </Routes>
    )
}