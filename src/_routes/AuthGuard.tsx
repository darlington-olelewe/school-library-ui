
import { useSelector } from "react-redux";
import { Navigate, Outlet} from "react-router-dom";
import { RootState } from "../_store";


export const AdminRoutes = () => {
    const userData = useSelector(
        (state: RootState) => state.userState.loggedInUser
    );
    return userData.role === "ADMIN" ? (
        <Outlet/>
    ) : (
        <Navigate to={"/not-found-admin-only"} />
);
};
export const ClientRoutes = () => {
    const userData = useSelector(
        (state: RootState) => state.userState.loggedInUser
    );
    return userData.role === "STUDENT" ? (
        <Outlet />
    ) : (
        <Navigate to={"/not-found-student-only"} />
);
};