import { IHistoryBase } from "./HistoryBase";

export interface ICity {
  id: string;
  name: string;
  imageUrl?: string;
  lat?: number;
  lon?: number;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type ICityHistory = IHistoryBase<ICity>;
