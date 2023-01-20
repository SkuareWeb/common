import { IEvent } from "./Event";

export interface IOneTimeEvent extends IEvent {
  subTitle?: string;
  minimumAge?: number;
  airCondition: boolean;
}
