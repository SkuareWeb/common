import { IHistoryBase } from "./HistoryBase";
export interface ICategory {
    id: string;
    name: string;
}
export type ICategoryHistory = IHistoryBase<ICategory>;
