import { DownArrow, NotificationIcon } from "../../_assets";
import style from "./Dashboard.module.css";
import {useSelector} from "react-redux";
import {RootState} from "../../_store";
import {LoggedInState} from "../../_types";

export const Dashboard = () => {


  const user : LoggedInState = useSelector((state: RootState) => state.userState.loggedInUser);


  const getInitials = (fullname: string): string => {
    const arr = fullname.split(" ");
    let initials = "";
    for (const each of arr) {
      initials = initials + each[0];
    }
    return initials.toUpperCase();
  };

  return (
    <div className={style.dashboard}>
      <h3 className={style.h3}>
        Library App
      </h3>
      <div className={style.left_section}>
        <NotificationIcon />
        <div className={style.initials}>{getInitials(`${user.firstName} ${user.lastName}`)}</div>
        <div className={style.name_group}>
          <p className={style.hi}>Hi, {user.firstName}</p>
          <p className={style.email}>{user.email}</p>
        </div>
        <DownArrow />
      </div>
    </div>
  );
};
