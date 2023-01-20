import { IEvent } from "./Event";

export interface IStandUpEvent extends IEvent {
  subTitle?: string;
  minimumAge?: number;
}
