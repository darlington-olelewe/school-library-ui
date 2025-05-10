import {TitleHeader} from "../../../_components/Headers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../_store";
import { AppDispatch } from "../../../_reducers";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {adminFetchAllUsers} from "../../../_actions/app.actions";
import {FullSearch, TableLoader, TableReach, Tag} from "../../../_components";


import style from "./studentPage.module.css"
import {Actions} from "../../../_components/Action";
import {LoggedInState} from "../../../_types";

export const UsersPage =()=>{
    const u : LoggedInState = useSelector(
        (state: RootState) => state.userState.loggedInUser
    );
    const dispatch: AppDispatch = useDispatch();
    const { users:allUsers, fetchingUsers: isFetchingUsers } = useSelector(
        (state: RootState) => state.appState
    );
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        dispatch(adminFetchAllUsers(u.requestId));
    }, [dispatch]);

    const updateSearch = (str: string) => {
        setSearchQuery(str);
    };
    const tableHead = {
        id: "id",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        role: "Role",
        action: " ",
    };

    const search = (
        list: Record<string, any>[],
        param: string
    ): Record<string, any>[] => {
        return list.filter((e: Record<string, any>) => {
            const firstName = e.firstName
                ? e.firstName.toString().toLowerCase().includes(param.toLowerCase())
                : false;
            const email = e.email
                ? e.email.toLowerCase().includes(param.toLowerCase())
                : false;
            const lastName = e.lastName
                ? e.lastName.toLowerCase().includes(param.toLowerCase())
                : false;
            const role = e.role
                ? e.role.toString().toLowerCase().includes(param.toLowerCase())
                : false;
            return firstName || lastName || role || email;
        });
    };


    const updatedData = allUsers.map((each: Record<string, any>, index: number) => {

        return {
            ...each,
            id: index + 1,
            role: each.role === "ADMIN" ? <Tag status={true} message={"Admin"} /> : <Tag status={false} message={"Student"}/>,
            action: (
                <Actions
                    links={[
                        {
                            link: `/admin/users/${each.id}`,
                            text: "Add Inventory",
                            isLink: true,
                        }
                    ]}
                />
            ),
        };
    });

    return (
        <div>
            <TitleHeader title={"Admin Users Page"}/>

            <FullSearch value={searchQuery} update={updateSearch} />
            {isFetchingUsers && <TableLoader text={"Fetching Users Records"} />}

            {!isFetchingUsers &&  (
                <div className={style.layout}>
                    <div className={style.section_main}>
                        <div className={style.write}>
                            <div className={style.section}>
                                Books
                            </div>
                            This is a directory of all books in this library.
                        </div>
                        <button
                            className={style.btn}
                            onClick={() => navigate("/admin/users/new")}
                        >
                            New User
                        </button>
                    </div>

                    <TableReach
                        tableData={search(updatedData, searchQuery)}
                        tableHeader={tableHead}
                    />
                </div>
            )}


        </div>
    )
}