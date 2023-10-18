import { IEvent } from "./Event";

export interface INewYearEvent extends IEvent {
  subTitle?: string;
  minimumAge?: number;
  airCondition: boolean;
}
