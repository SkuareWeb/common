import { ICity } from "./City";
import { IHistoryBase } from "./HistoryBase";

export interface IArea {
  id: string;
  name: string;
  pinCode: number;
  city: string | ICity;
  lat?: number;
  lon?: number;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type IAreaHistory = IHistoryBase<IArea>;
