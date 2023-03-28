import { ObjectType } from "../constants";
export interface IFollower {
    id: string;
    timestamp: string | Date;
    user: string;
    object: string;
    objectType: ObjectType;
}
