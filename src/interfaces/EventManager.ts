import { IBankAccount } from "./BankAccount";
import { IUser } from "./User";
import { UserType } from "../constants";
import { ICity } from "./City";

export interface IEventManager extends IUser {
  nameOfCompany: string;
  nameOfPersonOfContact: string;
  registrationProof?: string;
  bankAccount?: string | IBankAccount;
  city: string | ICity;
  type: UserType.EventManager;
}
