import { Action } from "../constants";

export interface IHistoryBase<T> {
  id: string;
  oid: string;
  timestamp: Date;
  user: string;
  action: Action;
  data: T;
}
