import { IGeolocation } from "./Geolocation";
import { IHistoryBase } from "./HistoryBase";

export interface ICity {
  id: string;
  name: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  location: IGeolocation;
}

export type ICityHistory = IHistoryBase<ICity>;
