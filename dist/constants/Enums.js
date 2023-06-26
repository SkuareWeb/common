"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSpaceType = exports.SearchType = exports.HistoryAction = exports.BotUsers = exports.UserAction = exports.Environment = exports.VenueLocationType = exports.ObjectType = exports.MultiMediaType = exports.FilePath = exports.AzureBlobName = exports.RazorPayEvent = exports.ArtistType = exports.OrderStatus = exports.Pagination = exports.EventTypeDisplay = exports.EventType = exports.EventByType = exports.Action = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType["Anonymous"] = "Anonymous";
    UserType["Admin"] = "Admin";
    UserType["AppUser"] = "AppUser";
    UserType["Artist"] = "Artist";
    UserType["EventManager"] = "EventManager";
    UserType["GateKeeper"] = "GateKeeper";
})(UserType = exports.UserType || (exports.UserType = {}));
var Action;
(function (Action) {
    Action["Manage"] = "manage";
    Action["List"] = "list";
    Action["Create"] = "create";
    Action["Read"] = "read";
    Action["Update"] = "update";
    Action["Delete"] = "delete";
})(Action = exports.Action || (exports.Action = {}));
var EventByType;
(function (EventByType) {
    EventByType["Establishment"] = "Establishment";
    EventByType["EventManager"] = "EventManager";
})(EventByType = exports.EventByType || (exports.EventByType = {}));
var EventType;
(function (EventType) {
    EventType["BrunchEvent"] = "BrunchEvent";
    EventType["ExhibitionEvent"] = "ExhibitionEvent";
    EventType["HoliEvent"] = "HoliEvent";
    EventType["LiveBandEvent"] = "LiveBandEvent";
    EventType["LiveScreeningEvent"] = "LiveScreeningEvent";
    EventType["LoungeEvent"] = "LoungeEvent";
    EventType["OneTimeEvent"] = "OneTimeEvent";
    EventType["SportsEvent"] = "SportsEvent";
    EventType["StandUpEvent"] = "StandUpEvent";
})(EventType = exports.EventType || (exports.EventType = {}));
exports.EventTypeDisplay = {
    [EventType.BrunchEvent]: "Brunch",
    [EventType.ExhibitionEvent]: "Exhibition",
    [EventType.HoliEvent]: "Holi",
    [EventType.LiveBandEvent]: "Live Band",
    [EventType.LiveScreeningEvent]: "Live Screening",
    [EventType.LoungeEvent]: "Lounge",
    [EventType.OneTimeEvent]: "One Time",
    [EventType.SportsEvent]: "Sports",
    [EventType.StandUpEvent]: "Stand Up",
};
var Pagination;
(function (Pagination) {
    Pagination[Pagination["DEFAULT_PAGE_SIZE"] = 10] = "DEFAULT_PAGE_SIZE";
    Pagination[Pagination["MAX_PAGE_SIZE"] = 1000] = "MAX_PAGE_SIZE";
    Pagination[Pagination["DEFAULT_SKIP"] = 0] = "DEFAULT_SKIP";
})(Pagination = exports.Pagination || (exports.Pagination = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Open"] = "Open";
    OrderStatus["Paid"] = "Paid";
    OrderStatus["Completed"] = "Completed";
    OrderStatus["Expired"] = "Expired";
    OrderStatus["PaymentFailed"] = "PaymentFailed";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var ArtistType;
(function (ArtistType) {
    ArtistType["DiscJockey"] = "Disc Jockey";
    ArtistType["StandUpComedian"] = "Standup Comedian";
    ArtistType["Band"] = "Band";
    ArtistType["Singer"] = "Singer";
})(ArtistType = exports.ArtistType || (exports.ArtistType = {}));
var RazorPayEvent;
(function (RazorPayEvent) {
    RazorPayEvent["OrderPaid"] = "order.paid";
    RazorPayEvent["PaymentAuthorizer"] = "payment.authorized";
    RazorPayEvent["PaymentCaptured"] = "payment.captured";
    RazorPayEvent["PaymentFailed"] = "payment.failed";
})(RazorPayEvent = exports.RazorPayEvent || (exports.RazorPayEvent = {}));
var AzureBlobName;
(function (AzureBlobName) {
    AzureBlobName["Private"] = "private";
    AzureBlobName["Public"] = "public";
})(AzureBlobName = exports.AzureBlobName || (exports.AzureBlobName = {}));
var FilePath;
(function (FilePath) {
    FilePath["Root"] = "images";
    FilePath["ProfileImage"] = "avatar";
    FilePath["ArtistImage"] = "artist";
    FilePath["EventImage"] = "event";
    FilePath["EventDisplay"] = "event_display";
    FilePath["Logo"] = "logo";
    FilePath["Offer"] = "offer";
    FilePath["QRCode"] = "qrcode";
})(FilePath = exports.FilePath || (exports.FilePath = {}));
var MultiMediaType;
(function (MultiMediaType) {
    MultiMediaType["Image"] = "image";
    MultiMediaType["Video"] = "video";
})(MultiMediaType = exports.MultiMediaType || (exports.MultiMediaType = {}));
var ObjectType;
(function (ObjectType) {
    ObjectType["All"] = "all";
    ObjectType["AppUser"] = "AppUser";
    ObjectType["Area"] = "Area";
    ObjectType["Artist"] = "Artist";
    ObjectType["Establishment"] = "Establishment";
    ObjectType["Event"] = "Event";
    ObjectType["EventManager"] = "EventManager";
    ObjectType["City"] = "City";
    ObjectType["GateKeeper"] = "GateKeeper";
    ObjectType["Offer"] = "Offer";
    ObjectType["Other"] = "Other";
    ObjectType["Order"] = "Order";
    ObjectType["EventSpace"] = "EventSpace";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));
var VenueLocationType;
(function (VenueLocationType) {
    VenueLocationType["INDOOR"] = "Indoor";
    VenueLocationType["OUTDOOR"] = "Outdoor";
    VenueLocationType["BOTH"] = "Indoor and Outdoor";
})(VenueLocationType = exports.VenueLocationType || (exports.VenueLocationType = {}));
var Environment;
(function (Environment) {
    Environment["Development"] = "dev";
    Environment["Production"] = "prod";
})(Environment = exports.Environment || (exports.Environment = {}));
var UserAction;
(function (UserAction) {
    UserAction["View"] = "View";
    UserAction["Follow"] = "Follow";
    UserAction["Unfollow"] = "Unfollow";
    UserAction["Subscribe"] = "Subscribe";
    UserAction["Bookmark"] = "Bookmark";
    UserAction["Buy"] = "Buy";
})(UserAction = exports.UserAction || (exports.UserAction = {}));
var BotUsers;
(function (BotUsers) {
    BotUsers["RazorpayBot"] = "RazorpayBot";
})(BotUsers = exports.BotUsers || (exports.BotUsers = {}));
var HistoryAction;
(function (HistoryAction) {
    HistoryAction["CREATE"] = "CREATE";
    HistoryAction["UPDATE"] = "UPDATE";
    HistoryAction["DELETE"] = "DELETE";
})(HistoryAction = exports.HistoryAction || (exports.HistoryAction = {}));
var SearchType;
(function (SearchType) {
    SearchType["Area"] = "Area";
    SearchType["Artist"] = "Artist";
    SearchType["Establishment"] = "Establishment";
    SearchType["Event"] = "Event";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
var EventSpaceType;
(function (EventSpaceType) {
    EventSpaceType["INDOOR"] = "Indoor";
    EventSpaceType["OUTDOOR"] = "Outdoor";
    EventSpaceType["BOTH"] = "Indoor and Outdoor";
})(EventSpaceType = exports.EventSpaceType || (exports.EventSpaceType = {}));
//# sourceMappingURL=Enums.js.map