import { IEstablishment } from "./Establishment";
import { IEvent } from "./Event";
import { EventByType } from "../constants";
import { IEventManager } from "./EventManager";
import { IHistoryBase } from "./HistoryBase";
export interface IOffer {
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    organizer: string | IEstablishment | IEventManager;
    organizerType: EventByType;
    startDateTime: string | Date;
    endDateTime: string | Date;
    shareUrl: string;
    event?: string | IEvent;
    quantity: number;
    maxRedeem: number;
    offerCode?: string;
    tnc?: string;
    isActive: boolean;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export type IOfferHistory = IHistoryBase<IOffer>;
