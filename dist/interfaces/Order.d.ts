import { IUser } from "./User";
import { IEvent } from "./Event";
import { IOrderItem } from "./OrderItem";
import { OrderStatus } from "../constants";
import { IHistoryBase } from "./HistoryBase";
export interface IOrder {
    id: string;
    razorpayOrderId?: string;
    user: string | IUser;
    event: string | IEvent;
    tickets: IOrderItem[];
    total: number;
    QRCode: string;
    shortCode: string;
    status: OrderStatus;
    purchasedOn: string | Date;
    createdAt: string | Date;
    updatedAt: string | Date;
}
export type IOrderHistory = IHistoryBase<IOrder>;
