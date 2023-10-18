export enum UserType {
  Anonymous = "Anonymous",
  Admin = "Admin",
  AppUser = "AppUser",
  Artist = "Artist",
  EventManager = "EventManager",
  GateKeeper = "GateKeeper",
}

export enum Action {
  Manage = "manage",
  List = "list",
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}

export enum EventByType {
  Establishment = "Establishment",
  EventManager = "EventManager",
}

export enum EventType {
  BrunchEvent = "BrunchEvent",
  ChristmasEvent = "ChristmasEvent",
  ExhibitionEvent = "ExhibitionEvent",
  HalloweenEvent = "HalloweenEvent",
  HoliEvent = "HoliEvent",
  LiveBandEvent = "LiveBandEvent",
  LiveScreeningEvent = "LiveScreeningEvent",
  LoungeEvent = "LoungeEvent",
  NavratriEvent = "NavratriEvent",
  NewYearEvent = "NewYearEvent",
  OneTimeEvent = "OneTimeEvent",
  SportsEvent = "SportsEvent",
  StandUpEvent = "StandUpEvent",
}

export const EventTypeDisplay = {
  [EventType.BrunchEvent]: "Brunch",
  [EventType.ChristmasEvent]: "Christmas",
  [EventType.ExhibitionEvent]: "Exhibition",
  [EventType.HalloweenEvent]: "Halloween",
  [EventType.HoliEvent]: "Holi",
  [EventType.LiveBandEvent]: "Live Band",
  [EventType.LiveScreeningEvent]: "Live Screening",
  [EventType.LoungeEvent]: "Lounge",
  [EventType.NavratriEvent]: "Navratri",
  [EventType.NewYearEvent]: "New Year",
  [EventType.OneTimeEvent]: "One Time",
  [EventType.SportsEvent]: "Sports",
  [EventType.StandUpEvent]: "Stand Up",
};

export enum Pagination {
  DEFAULT_PAGE_SIZE = 10,
  MAX_PAGE_SIZE = 1000,
  DEFAULT_SKIP = 0,
}

export enum OrderStatus {
  Open = "Open",
  Paid = "Paid",
  Completed = "Completed",
  Expired = "Expired",
  PaymentFailed = "PaymentFailed",
}

export enum ArtistType {
  DiscJockey = "Disc Jockey",
  StandUpComedian = "Standup Comedian",
  Band = "Band",
  Singer = "Singer",
}

export enum RazorPayEvent {
  OrderPaid = "order.paid",
  PaymentAuthorizer = "payment.authorized",
  PaymentCaptured = "payment.captured",
  PaymentFailed = "payment.failed",
}

export enum AzureBlobName {
  Private = "private",
  Public = "public",
}

export enum FilePath {
  Root = "images",
  ProfileImage = "avatar",
  ArtistImage = "artist",
  EventImage = "event",
  EventDisplay = "event_display",
  Logo = "logo",
  Offer = "offer",
  QRCode = "qrcode",
}

export enum MultiMediaType {
  Image = "image",
  Video = "video",
}

export enum ObjectType {
  All = "all",
  AppUser = "AppUser",
  Area = "Area",
  Artist = "Artist",
  Establishment = "Establishment",
  Event = "Event",
  EventManager = "EventManager",
  City = "City",
  GateKeeper = "GateKeeper",
  Offer = "Offer",
  Other = "Other",
  Order = "Order",
  EventSpace = "EventSpace",
}

export enum VenueLocationType {
  INDOOR = "Indoor",
  OUTDOOR = "Outdoor",
  BOTH = "Indoor and Outdoor",
}

export enum Environment {
  Development = "dev",
  Production = "prod",
}

export enum UserAction {
  View = "View",
  Follow = "Follow",
  Unfollow = "Unfollow",
  Subscribe = "Subscribe",
  Bookmark = "Bookmark",
  Buy = "Buy",
}

export enum BotUsers {
  RazorpayBot = "RazorpayBot",
}

export enum HistoryAction {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export enum SearchType {
  Area = "Area",
  Artist = "Artist",
  Establishment = "Establishment",
  Event = "Event",
}

export enum EventSpaceType {
  INDOOR = "Indoor",
  OUTDOOR = "Outdoor",
  BOTH = "Indoor and Outdoor",
}
