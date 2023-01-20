import { IEstablishment } from "./Establishment";
import { IArea } from "./Area";
export interface IOffer {
    id: string;
    offerName: string;
    establishment: string | IEstablishment;
    area: string | IArea;
    startDate?: string | Date;
    endDate?: string | Date;
    offerType?: string;
    tnc?: string;
}
