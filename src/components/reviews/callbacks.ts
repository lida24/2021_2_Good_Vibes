import bus from "../../modules/bus/bus";
import user from "../../services/user/user";
import { Callback, Order } from "../../types";

export const reviewsListRequest: Callback = () => {
    bus.emit("reviews list request", user.username);
};