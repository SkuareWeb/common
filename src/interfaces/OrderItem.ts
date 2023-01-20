import { ITicket } from "./Ticket";

export interface IOrderItem {
  ticket: ITicket;
  quantity: number;
  checkedIn: number;
  total: number;
}
