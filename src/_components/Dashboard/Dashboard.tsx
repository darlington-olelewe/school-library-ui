import { DownArrow, Logo, NotificationIcon } from "../../_assets";
import style from "./Dashboard.module.css";

export const Dashboard = () => {
  const username = "Darlington Olelewe";
  const email = "darlington.olelewe@interswitchng.com";

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
        Interswitch <Logo />
      </h3>
      <div className={style.left_section}>
        <NotificationIcon />
        <div className={style.initials}>{getInitials(username)}</div>
        <div className={style.name_group}>
          <p className={style.hi}>Hi, {username.split(" ")[0]}</p>
          <p className={style.email}>{email}</p>
        </div>
        <DownArrow />
      </div>
    </div>
  );
};
