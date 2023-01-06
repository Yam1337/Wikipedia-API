import { notification } from "antd";
import { CustomNotificationEnum } from "./types";

export const customNotification = (type: CustomNotificationEnum, message: string, description: string) => {
    notification[type]({
        message,
        description,
        placement: "bottomRight",
    });
};
