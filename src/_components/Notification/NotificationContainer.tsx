import { NotificationModel } from "../../_types";
import { NotificationItem } from "./NotificationItem";

import "./style.css";

export type NotificationProp = {
  notifications: NotificationModel[];
  onRemove: (id: string) => void;
};
export const NotificationContainer = (props: NotificationProp) => {
  return (
    <div className="notification-container">
      {props.notifications.map((notice, index) => (
        <NotificationItem
          id={notice.id}
          title={notice.title}
          sub={notice.sub}
          type={notice.type}
          key={index}
        />
      ))}
    </div>
  );
};
