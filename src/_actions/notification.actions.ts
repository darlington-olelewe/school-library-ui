import { notificationConstants } from "../_constants";
import { NotificationModel } from "../_types";

import { AppDispatch } from "../_reducers";
const { ADD_NOTIFICATION, REMOVE_NOTIFICATION } = notificationConstants;

export const addNewNotification = (notification: NotificationModel) => {
  const notificationId = crypto.randomUUID().toString();
  const notificationNew = {
    ...notification,
    id: notificationId,
  };
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ADD_NOTIFICATION,
      payload: notificationNew,
    });

    setTimeout(() => dispatch(removeNotification(notificationId)), 5000);
  };
};

export const removeNotification = (notificationId: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: REMOVE_NOTIFICATION,
      payload: notificationId,
    });
  };
};

export const notificationActions = {
  addNewNotification,
  removeNotification,
};
