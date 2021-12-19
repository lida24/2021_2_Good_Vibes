import bus from "../../modules/bus/bus";
import user from "../../services/user/user";
import { Callback, Order } from "../../types";

export const signOutRequest: Callback = () => {
  bus.emit("signout ajax request", undefined);
};

export const fieldsFill: Callback = () => {
  const loginInput = <HTMLInputElement>(
    document.getElementsByClassName("user-box__login")[0]
  );
  const emailInput = <HTMLInputElement>(
    document.getElementsByClassName("user-box__email")[0]
  );
  const photo = <HTMLImageElement>(
    document.getElementsByClassName("form__photo")[0]
  );

  loginInput.value = user.username;
  emailInput.value = user.email;
  /* photo.src = user.avatar;
 */
  /* const file = <HTMLInputElement>document.getElementsByClassName('form__uploadFile')[0];
  file.style.display = 'none';  */
};

export const profileUploadRequest: Callback = () => {

  const loginInput = <HTMLInputElement>(
    document.getElementsByClassName("user-box__login")[0]
  );
  const emailInput = <HTMLInputElement>(
    document.getElementsByClassName("user-box__email")[0]
  );
  const obj = {
    username: loginInput.value.trim(),
    email: emailInput.value.trim(),
  };

  bus.emit("profile upload request", obj);
};

export const avatarUploadRequest: Callback = () => {
  const file = <HTMLInputElement>(
    document.getElementsByClassName("form__uploadFile")[0]
  );
  const choosedFile = file.files[0];

  console.log("update img");

  if (choosedFile) {
    bus.emit("avatar upload request", choosedFile);
  }
};

export const ordersListRequest: Callback = () => {
  bus.emit("orders list request", undefined);
};

export const ordersStateRequest: Callback = () => {
  bus.emit("orders state request", undefined);
};
