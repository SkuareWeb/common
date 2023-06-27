import { IHistoryBase } from "./HistoryBase";

export interface ICuisine {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type ICuisineHistory = IHistoryBase<ICuisine>;
