import { IArea } from "./Area";
import { IArtist } from "./Artist";
import { IEvent } from "./Event";
import { IEventType } from "./EventType";
export interface IExploreResult {
    city: string;
    featured: IEvent[];
    areas: IArea[];
    artists: IArtist[];
    eventTypes: IEventType[];
}
