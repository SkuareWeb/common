import { IUser } from "./User";
import { IRule } from "./Rule";

export interface IPermission {
  id: string;
  user: string | IUser;
  rules: IRule[];
  createdAt: string | Date;
  updatedAt: string | Date;
}
