import { IHistoryBase } from "./HistoryBase";
export interface IBankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    IFSC: string;
    accountBeneficiaryName: string;
    accountType: string;
}
export type IBankAccountHistory = IHistoryBase<IBankAccount>;
