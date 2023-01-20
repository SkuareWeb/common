"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotal = exports.ValidateEmail = exports.ObjectToParams = void 0;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const ObjectToParams = (paramsObject) => {
    const validEntries = Object.entries(paramsObject).filter((entry) => !!entry[1]);
    if (validEntries.length) {
        return encodeURI("?" +
            validEntries
                .map((entry) => entry[0] + "=" + (typeof entry[1] === "object" ? JSON.stringify(entry[1]) : entry[1]))
                .join("&"));
    }
    return "";
};
exports.ObjectToParams = ObjectToParams;
const ValidateEmail = (email) => Boolean(email) ? EMAIL_REGEX.test(email) : true;
exports.ValidateEmail = ValidateEmail;
const getTotal = (array) => {
    let total = 0;
    array.forEach((x) => {
        total = total + x;
    });
    return total;
};
exports.getTotal = getTotal;
//# sourceMappingURL=HelperFunctions.js.map