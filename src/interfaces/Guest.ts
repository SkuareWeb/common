import { IArea } from "./Area";

export interface IGuest {
  id: string;
  venue: string;
  area: string | IArea;
  eventName: string;
  dateAndTime: string | Date;
  typeOfEntry?: string;
  QRCode?: string;
  pin?: string;
  message?: string;
}
