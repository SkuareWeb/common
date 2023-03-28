import { ICity } from "./City";
import { IHistoryBase } from "./HistoryBase";
import { IGeolocation } from "./Geolocation";

export interface IArea {
  id: string;
  name: string;
  pinCode: number;
  city: string | ICity;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  location: IGeolocation;
}

export type IAreaHistory = IHistoryBase<IArea>;
