import { ObjectType, UserAction } from "../constants";

export interface IAnalytic {
  user?: string;
  timestamp: string | Date;
  action: UserAction;
  objectType: ObjectType;
  oid: string;
  path: string;
}
