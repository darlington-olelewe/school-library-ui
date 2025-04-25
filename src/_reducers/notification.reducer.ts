import { notificationConstants } from "../_constants";
import { NotificationModel } from "../_types";

const { ADD_NOTIFICATION, REMOVE_NOTIFICATION } = notificationConstants;

export type NotificationState = {
    notifications: NotificationModel[];
};
const initialState = {
    notifications: [],
};

type Action = {
    type: string;
    payload?: any;
};
function notificationReducer(
    state: NotificationState = initialState,
    action: Action
) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                notifications: [...state.notifications, action.payload],
            };

        case REMOVE_NOTIFICATION:
            return {
                notifications: [
                    ...state.notifications.filter(
                        (notice) => notice.id != action.payload
                    ),
                ],
            };

        default:
            return state;
    }
}

export default notificationReducer;
