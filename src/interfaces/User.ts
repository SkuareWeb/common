import { UserType } from "../constants";
import { IHistoryBase } from "./HistoryBase";

export interface IUser {
  id: string;
  firebaseId: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  type?: UserType;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  dateOfBirth?: string | Date;
  isActive: boolean;
  countryCode: string;
}

export type IUserHistory = IHistoryBase<IUser>;
