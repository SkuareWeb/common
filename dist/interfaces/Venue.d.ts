import { IArea } from "./Area";
import { VenueLocationType } from "../constants";
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
}
