import { ReactNode} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../_store";
import {LoginSignUp} from "../../Pages";

export const UserLoader = (props: { children: ReactNode }) => {
    const user = useSelector((state: RootState) => state.userState.loggedInUser);
    if (user === null || !user?.email) {
        return (
            <LoginSignUp/>
        )
    }
    return <>{props.children}</>;
};
