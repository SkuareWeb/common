import { IArea } from "./Area";
import { VenueLocationType } from "../constants";
import { IHistoryBase } from "./HistoryBase";

export interface IVenue {
  id: string;
  name: string;
  address: string;
  area: string | IArea;
  gmapUrl?: string;
  locationType: VenueLocationType;
  parking: boolean;
  valet: boolean;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
  // new Paramters
  coords: {
    lat: number;
    lon: number;
  };
}

export type IVenueHistory = IHistoryBase<IVenue>;
