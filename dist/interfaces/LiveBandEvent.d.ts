import { IEvent } from "./Event";
export interface ILiveBandEvent extends IEvent {
    subTitle?: string;
    minimumAge?: number;
}
