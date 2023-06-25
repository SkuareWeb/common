import { IUser } from "./User";
import { UserType } from "../constants";
import { ICity } from "./City";

export interface IAppUser extends IUser {
  type: UserType.AppUser;
  city?: string | ICity;
  tnc: boolean;
}
