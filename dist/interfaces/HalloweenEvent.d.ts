import { IEvent } from "./Event";
export interface IHalloweenEvent extends IEvent {
    subTitle?: string;
    minimumAge?: number;
    airCondition: boolean;
}
