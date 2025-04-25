import { ReactNode } from "react";
import { NotificationContainer } from "../_components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../_reducers";
import { removeNotification } from "../_actions";
import { RootState } from "../_store";

export const NotificationsOverlap = (props: { children: ReactNode }) => {
    const notifications = useSelector(
        (state: RootState) => state.notificationState.notifications
    );
    const dispatch = useDispatch<AppDispatch>();
    const removeNotificationOut = (id: string) => {
        dispatch(removeNotification(id));
    };

    return (
        <>
            <NotificationContainer
                notifications={notifications}
    onRemove={removeNotificationOut}
    />
    {props.children}
    </>
);
};
