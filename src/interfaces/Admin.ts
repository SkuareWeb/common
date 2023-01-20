import { IUser } from "./User";
import { UserType } from "../constants";

export interface IAdmin extends IUser {
  type: UserType.Admin;
}
