import { IArea } from "./Area";
import { EventSpaceType } from "../constants";
import { IGeolocation } from "./Geolocation";
import { IHistoryBase } from "./HistoryBase";
export interface IEventSpace {
    id: string;
    name: string;
    address: string;
    area: string | IArea;
    gmapUrl?: string;
    locationType: EventSpaceType;
    parking: boolean;
    valet: boolean;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
    location: IGeolocation;
}
export type IEventSpaceHistory = IHistoryBase<IEventSpace>;
