import { IUser } from "./User";

export interface IEntryType {
  male: number;
  female: number;
  kid: number;
  open: number;
}

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

export interface ISubTicket {
  id: string;
  orderId: string;
  ticketId: string;
  for: keyof IEntryType;
  purchasedBy: string | IUser; // userId
  allotedTo: string | IUser; // userId
  checkedIn: boolean;
  checkedInAt: string | Date;
}
