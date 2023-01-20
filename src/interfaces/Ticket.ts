import { IEntryType } from "./EntryType";

export interface ITicket {
  id: string;
  ticketName: string;
  ticketDescription: string;
  entryFor: IEntryType;
  price: number;
  lastBookingTime: string | Date;
  validFrom: string | Date;
  validTo: string | Date;
}
