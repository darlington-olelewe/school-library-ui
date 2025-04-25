import { NotificationModel } from "../../_types";
import { CancelIcon } from "../../_assets";
import "./style.css";
import { removeNotification } from "../../_actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../_reducers";

export const NotificationItem = (props: NotificationModel) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className={
        props.type == "OK"
          ? "notification_container ok"
          : "notification_container bad"
      }
    >
      <div className={"notification_title"}>
        {props.title}
        <CancelIcon onClick={() => dispatch(removeNotification(props.id))} />
      </div>
      <div className={"notification_sub"}>{props.sub}</div>
    </div>
  );
};
