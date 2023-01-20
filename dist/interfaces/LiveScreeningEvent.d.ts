import { IEvent } from "./Event";
export interface ILiveScreeningEvent extends IEvent {
    subTitle?: string;
    minimumAge?: number;
}
