import { IArea } from "./Area";
import { IHistoryBase } from "./HistoryBase";
import { ISocialLinks } from "./SocialLinks";

export interface IEstablishment {
  id: string;
  establishmentName: string;

  address: string;
  area: string | IArea;
  gmapUrl?: string;
  socialLinks: ISocialLinks[];
  parking: boolean;
  valet: boolean;
  liquor: boolean;
  cuisine?: string;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  coords: {
    lat: number;
    lon: number;
  };

  // New Params
  description?: string;
  lgbtq: boolean;
  petFriendly: boolean;
  hasRooftop: boolean;
}

export type IEstablishmentHistory = IHistoryBase<IEstablishment>;
