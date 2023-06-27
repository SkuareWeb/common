import { IHistoryBase } from "./HistoryBase";
export interface ICategory {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export type ICategoryHistory = IHistoryBase<ICategory>;
