import { IUser } from "./User";
import { UserType } from "../constants";

export interface IGateKeeper extends IUser {
  type: UserType.GateKeeper;
  QRCode: string;
  shortCode: string;
}
