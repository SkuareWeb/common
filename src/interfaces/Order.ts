import { IUser } from "./User";
import { IEvent } from "./Event";
import { OrderStatus } from "../constants";
import { IHistoryBase } from "./HistoryBase";
import { ISubTicket } from "./Ticket";

export interface IOrder {
  id: string;
  razorpayOrderId?: string;
  user: string | IUser;
  event: string | IEvent;
  // tickets: IOrderItem[];
  tickets: ISubTicket[]; // these will be individual tickets ... older tickets need to migrated to this new format
  total: number;
  QRCode: string;
  shortCode: string;
  status: OrderStatus;
  purchasedOn: string | Date;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type IOrderHistory = IHistoryBase<IOrder>;
