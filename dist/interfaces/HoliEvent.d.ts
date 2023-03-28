import { IEvent } from "./Event";
export interface IHoliEvent extends IEvent {
    subTitle?: string;
    minimumAge?: number;
    airCondition: boolean;
}
