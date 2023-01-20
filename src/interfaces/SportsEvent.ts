import { IEvent } from "./Event";

export interface ISportsEvent extends IEvent {
  subTitle?: string;
  minimumAge?: number;
  airCondition: boolean;
}
