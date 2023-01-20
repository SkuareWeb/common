export declare const SERVER_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZ";
export declare const DATE_TIME_DISPLAY_FORMAT = "Do MMM YYYY | hh:mm a";
export declare const DATE_DISPLAY_FORMAT = "Do MMM YYYY";
export declare const SERVER_DATE_SEARCH_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSS";
export declare const ServerToDateTime: (serverTime: string | Date) => string;
export declare const ShowDateRange: (startTime: string | Date, endTime?: string | Date, includeTime?: boolean) => string;
