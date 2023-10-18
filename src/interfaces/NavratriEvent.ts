import { IEvent } from "./Event";

export interface INavratriEvent extends IEvent {
  subTitle?: string;
  minimumAge?: number;
  airCondition: boolean;
}
