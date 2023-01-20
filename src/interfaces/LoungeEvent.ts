import { IEvent } from "./Event";

export interface ILoungeEvent extends IEvent {
  subTitle?: string;
  minimumAge?: number;
}
