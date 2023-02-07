import { ITicket } from "./Ticket";

export interface IOrderItem {
  ticket: ITicket;
  quantity: number; // 3
  checkedIn: number;
  total: number;
}
