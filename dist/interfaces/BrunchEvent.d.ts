import { IEvent } from "./Event";
export interface IBrunchEvent extends IEvent {
    subTitle?: string;
    minimumAge?: number;
}
