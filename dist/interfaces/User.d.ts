import { UserType } from "../constants";
export interface IUser {
    id: string;
    firebaseId: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    type?: UserType;
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    dateOfBirth?: string | Date;
    isActive: boolean;
    countryCode: string;
}
