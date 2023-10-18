import { IEvent } from "./Event";
export interface IChristmasEvent extends IEvent {
    subTitle?: string;
    minimumAge?: number;
    airCondition: boolean;
}
