import { IUser } from "./User";
import { UserType } from "../constants";
import { ICity } from "./City";
import { IEvent } from "./Event";

export interface IAppUser extends IUser {
  type: UserType.AppUser;
  city?: string | ICity;
  tnc: boolean;
  favourites: Array<string | IEvent>;
}
