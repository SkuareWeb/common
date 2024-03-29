import { IArea } from "./Area";
import { IEstablishment } from "./Establishment";
import { IEventManager } from "./EventManager";
import { IEventSpace } from "./EventSpace";
import { ISocialLink } from "./SocialLink";
import { EventByType, EventType, VenueLocationType } from "../constants";
import { ITicketItem } from "./TicketItem";
import { IMultiMedia } from "./MultiMedia";
import { IArtist } from "./Artist";
import { IHistoryBase } from "./HistoryBase";
import { ICuisine } from "./Cuisine";
import { IGeolocation } from "./Geolocation";
import { ICategory } from "./Category";
import { ICity } from "./City";
import { IOrganizer } from "./Organizer";

export interface IEvent {
  id: string;
  title: string;
  description: string;
  address: string;
  gmapUrl: string;
  area: string | IArea;
  socialLinks: ISocialLink[];
  startDateTime: string | Date;
  endDateTime: string | Date;
  parking: boolean;
  valet: boolean;
  liquor: boolean;
  cuisines: ICuisine[] | string[];
  tnc?: string;
  multimedia: IMultiMedia[];
  eventByDisplay?: string;
  eventByType: EventByType;
  eventBy: IEstablishment | IEventManager | string;
  artists: IArtist[] | string[];
  type?: EventType;
  typeDisplay: string;
  tickets: ITicketItem[];
  shareUrl?: string;
  eventSpace?: IEventSpace | string;
  locationType?: VenueLocationType;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  venue: {
    name: string;
    address: string;
  };
  location: IGeolocation;
  hostAtEstablishment: boolean;
  layouts?: IMultiMedia[];
  categories: ICategory[] | string[];
  slug: string;
  popularity: number;
  priority: number;
  viewCount: number;
  bookedCount: number;
  favouritesCount: number;
  organizers: IOrganizer[];
  city: string | ICity;
}

export type IEventHistory = IHistoryBase<IEvent>;
