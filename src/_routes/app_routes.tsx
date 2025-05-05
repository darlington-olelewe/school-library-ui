import {Route, Routes} from "react-router-dom";
import {LoginSignUp} from "../Pages";
import {BooksPage} from "../Pages/Admin/BooksPage/BooksPage.tsx";


export const AppRoutes =()=>{


    return (

        <Routes>



            <Route path="/welcome-page" element={<LoginSignUp/>} />
            <Route path="/admin-books" element={<BooksPage/>} />



        </Routes>
    )
}