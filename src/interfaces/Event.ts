import { IArea } from "./Area";
import { IEstablishment } from "./Establishment";
import { IEventManager } from "./EventManager";
import { ISocialLinks } from "./SocialLinks";
import { EventByType, EventType, VenueLocationType } from "../constants";
import { ITicketItem } from "./TicketItem";
import { IMultiMedia } from "./MultiMedia";
import { IArtist } from "./Artist";
import { IVenue } from "./Venue";
import { IHistoryBase } from "./HistoryBase";

export interface IEvent {
  id: string;
  title: string;
  description: string;
  address: string;
  gmapUrl: string;
  area: string | IArea;
  socialLinks: ISocialLinks[];
  startDateTime: string | Date;
  endDateTime: string | Date;
  parking: boolean;
  valet: boolean;
  liquor: boolean;
  cuisine?: string;
  tnc?: string;
  multimedia: IMultiMedia[];
  eventByDisplay?: string;
  eventByType: EventByType;
  eventBy: IEstablishment | IEventManager;
  artists: IArtist[];
  type?: EventType;
  typeDisplay: string;
  tickets: ITicketItem[];
  shareUrl?: string;
  venue?: IVenue;
  locationType?: VenueLocationType;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type IEventHistory = IHistoryBase<IEvent>;
