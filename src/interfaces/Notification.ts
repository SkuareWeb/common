interface Timestamp {
  fromDate(date: Date): Timestamp;
  fromMillis(milliseconds: number): Timestamp;
  now(): Timestamp;
  nanoseconds: number;
  seconds: number;
  isEqual(other: Timestamp): boolean;
  toDate(): Date;
  toMillis(): number;
  toString(): string;
  toJSON(): { seconds: number; nanoseconds: number };
  valueOf(): string;
}

export interface INotification {
  intendedAudience: "all" | "android" | "ios" | string | string[];
  title: string;
  description?: string;
  imageUrl?: string; // https://loremflickr.com/640/640
  pushedOn: Timestamp;
}

export interface IUserProfile {
  pushNotifications: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;

  getWhatsappUpdates: boolean;
  getEmailUpdates: boolean;
  getRecommendations: boolean;
  getSpecialOffers: boolean;
  getTicketsWhatsapp: boolean;
  getTicketsMessage: boolean;
  getEventReminder: boolean;

  fcmTokens: string[];
}

export enum FireStoreCollectionNames {
  USER_PRIVACY = "userPrivacy",
  NOTIFICATIONS = "notifications",
}
