"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowDateRange = exports.ServerToDateTime = exports.SERVER_DATE_SEARCH_FORMAT = exports.DATE_DISPLAY_FORMAT = exports.DATE_TIME_DISPLAY_FORMAT = exports.SERVER_DATE_TIME_FORMAT = void 0;
const moment_1 = __importDefault(require("moment"));
exports.SERVER_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZ";
exports.DATE_TIME_DISPLAY_FORMAT = "Do MMM YYYY | hh:mm a";
exports.DATE_DISPLAY_FORMAT = "Do MMM YYYY";
exports.SERVER_DATE_SEARCH_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSS";
const ServerToDateTime = (serverTime) => moment_1.default.utc(serverTime, exports.SERVER_DATE_TIME_FORMAT).local().format(exports.DATE_TIME_DISPLAY_FORMAT);
exports.ServerToDateTime = ServerToDateTime;
const ShowDateRange = (startTime, endTime, includeTime = true) => {
    const startTimeMoment = (0, moment_1.default)(startTime, exports.SERVER_DATE_TIME_FORMAT);
    if (!endTime) {
        return (startTimeMoment.format(includeTime ? exports.DATE_TIME_DISPLAY_FORMAT : exports.DATE_DISPLAY_FORMAT) +
            " onwards");
    }
    const endTimeMoment = (0, moment_1.default)(endTime, exports.SERVER_DATE_TIME_FORMAT);
    const isSameDay = startTimeMoment.isSame(endTimeMoment, "date");
    if (isSameDay) {
        return includeTime
            ? `${startTimeMoment.format(exports.DATE_TIME_DISPLAY_FORMAT)} - ${endTimeMoment.format("hh:mm a")}`
            : startTimeMoment.format(exports.DATE_DISPLAY_FORMAT);
    }
    else {
        return includeTime
            ? `${startTimeMoment.format(exports.DATE_TIME_DISPLAY_FORMAT)} - ${endTimeMoment.format(exports.DATE_TIME_DISPLAY_FORMAT)}`
            : `${startTimeMoment.format(exports.DATE_DISPLAY_FORMAT)} - ${endTimeMoment.format(exports.DATE_DISPLAY_FORMAT)}`;
    }
};
exports.ShowDateRange = ShowDateRange;
//# sourceMappingURL=DateUtils.js.map