import { ITicket } from "./Ticket";
export interface ITicketItem {
    ticket: ITicket;
    totalQuantity: number;
    availableQuantity: number;
    inTransaction: number;
    bufferQuantity: number;
    sold?: number;
}
