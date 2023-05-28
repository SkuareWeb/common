import { IArea } from "./Area";
import { ICuisine } from "./Cuisine";
import { IGeolocation } from "./Geolocation";
import { IHistoryBase } from "./HistoryBase";
import { IMultiMedia } from "./MultiMedia";
import { ISocialLink } from "./SocialLink";

export interface IEstablishment {
  id: string;
  name: string;
  address: string;
  area: string | IArea;
  gmapUrl?: string;
  socialLinks: ISocialLink[];
  parking: boolean;
  valet: boolean;
  liquor: boolean;
  cuisines: ICuisine[];
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  location: IGeolocation;
  logo?: string;
  multimedia: IMultiMedia[];
}

export type IEstablishmentHistory = IHistoryBase<IEstablishment>;
