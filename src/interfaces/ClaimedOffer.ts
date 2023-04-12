import { IAppUser } from "./AppUser";
import { IHistoryBase } from "./HistoryBase";
import { IOffer } from "./Offer";

export interface IClaimedOffer {
  id: string;
  offer: string | IOffer;
  user: string | IAppUser;
  shortCode: string;
  redeemed: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export type IClaimedOfferHistory = IHistoryBase<IClaimedOffer>;
