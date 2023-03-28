import { IUser } from "./User";
export interface IRule {
    id?: string;
    oid?: string;
    createdBy?: IUser | string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}
