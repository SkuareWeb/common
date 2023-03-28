import { IHistoryBase } from "./HistoryBase";
export interface ICuisine {
    id: string;
    name: string;
}
export type ICuisineHistory = IHistoryBase<ICuisine>;
