export declare enum UserType {
    Anonymous = "Anonymous",
    Admin = "Admin",
    AppUser = "AppUser",
    Artist = "Artist",
    EventManager = "EventManager",
    GateKeeper = "GateKeeper"
}
export declare enum Action {
    Manage = "manage",
    List = "list",
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete"
}
export declare enum EventByType {
    Establishment = "Establishment",
    EventManager = "EventManager"
}
export declare enum EventType {
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
    StandUpEvent = "StandUpEvent"
}
export declare const EventTypeDisplay: {
    BrunchEvent: string;
    ChristmasEvent: string;
    ExhibitionEvent: string;
    HalloweenEvent: string;
    HoliEvent: string;
    LiveBandEvent: string;
    LiveScreeningEvent: string;
    LoungeEvent: string;
    NavratriEvent: string;
    NewYearEvent: string;
    OneTimeEvent: string;
    SportsEvent: string;
    StandUpEvent: string;
};
export declare enum Pagination {
    DEFAULT_PAGE_SIZE = 10,
    MAX_PAGE_SIZE = 1000,
    DEFAULT_SKIP = 0
}
export declare enum OrderStatus {
    Open = "Open",
    Paid = "Paid",
    Completed = "Completed",
    Expired = "Expired",
    PaymentFailed = "PaymentFailed"
}
export declare enum ArtistType {
    DiscJockey = "Disc Jockey",
    StandUpComedian = "Standup Comedian",
    Band = "Band",
    Singer = "Singer"
}
export declare enum RazorPayEvent {
    OrderPaid = "order.paid",
    PaymentAuthorizer = "payment.authorized",
    PaymentCaptured = "payment.captured",
    PaymentFailed = "payment.failed"
}
export declare enum AzureBlobName {
    Private = "private",
    Public = "public"
}
export declare enum FilePath {
    Root = "images",
    ProfileImage = "avatar",
    ArtistImage = "artist",
    EventImage = "event",
    EventDisplay = "event_display",
    Logo = "logo",
    Offer = "offer",
    QRCode = "qrcode"
}
export declare enum MultiMediaType {
    Image = "image",
    Video = "video"
}
export declare enum ObjectType {
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
    EventSpace = "EventSpace"
}
export declare enum VenueLocationType {
    INDOOR = "Indoor",
    OUTDOOR = "Outdoor",
    BOTH = "Indoor and Outdoor"
}
export declare enum Environment {
    Development = "dev",
    Production = "prod"
}
export declare enum UserAction {
    View = "View",
    Follow = "Follow",
    Unfollow = "Unfollow",
    Subscribe = "Subscribe",
    Bookmark = "Bookmark",
    Buy = "Buy"
}
export declare enum BotUsers {
    RazorpayBot = "RazorpayBot"
}
export declare enum HistoryAction {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE"
}
export declare enum SearchType {
    Area = "Area",
    Artist = "Artist",
    Establishment = "Establishment",
    Event = "Event"
}
export declare enum EventSpaceType {
    INDOOR = "Indoor",
    OUTDOOR = "Outdoor",
    BOTH = "Indoor and Outdoor"
}
