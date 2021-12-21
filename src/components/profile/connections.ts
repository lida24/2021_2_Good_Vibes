import { Connection } from "../../types";
import * as profile from "./callbacks";

const connections: Connection[] = [
  {
    event: "profile shown",
    callback: [profile.fieldsFill],
  },
  {
    event: "update button click",
    callback: [
      profile.profileUploadRequest,
      profile.avatarUploadRequest,
      profile.changeInfoDisabled,
    ],
  },
  {
    event: "change button click",
    callback: profile.changeInfo,
  },

  /* {
    event: "orders link click",
    callback: profile.ordersStateRequest,
  }, */
  // {
  //   event: 'profile link click',
  //   callback: profile.
  // }
];

export default connections;
