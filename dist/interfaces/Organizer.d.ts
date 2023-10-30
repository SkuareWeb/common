import { EventByType } from "../constants";
import { IEstablishment } from "./Establishment";
import { IEventManager } from "./EventManager";
export interface IOrganizer {
    type: EventByType;
    by: IEstablishment | IEventManager;
}
