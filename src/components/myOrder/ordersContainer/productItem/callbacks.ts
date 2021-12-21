import bus from "../../../../modules/bus/bus";
import { Callback } from "../../../../types";

export const cardClick: Callback = () => {
  bus.emit("card click", undefined);
};