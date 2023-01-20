import { IArea } from "./Area";
import { IArtist } from "./Artist";
import { IEventType } from "./EventType";

export interface IExploreResult {
  city: string;
  areas: IArea[];
  artists: IArtist[];
  eventTypes: IEventType[];
}
