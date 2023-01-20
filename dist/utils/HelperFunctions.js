"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceValues = exports.GetCasedString = exports.SortObjects = exports.getTotal = exports.ValidateEmail = exports.ObjectToParams = void 0;
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
const SortObjects = (initialArray, firstClassProperty, order = "ASC", evaluatorFunction) => initialArray.sort((a, b) => {
    if (evaluatorFunction) {
        return evaluatorFunction(a, b);
    }
    if (a[firstClassProperty] > b[firstClassProperty]) {
        return order === "ASC" ? 1 : -1;
    }
    else if (a[firstClassProperty] < b[firstClassProperty]) {
        return order === "ASC" ? -1 : 1;
    }
    else
        return 0;
});
exports.SortObjects = SortObjects;
const GetCasedString = (actualString, casing = "camelCase", separator = "") => actualString
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 && casing === "camelCase" ? word.toLowerCase() : word.toUpperCase())
    .replace(/\s+/g, separator);
exports.GetCasedString = GetCasedString;
const replaceValues = (actualString, dataObject = {}) => actualString.replace(/{([^}]+)}/g, (word) => {
    const bareWord = word.replace(/{/g, "").replace(/}/g, "");
    return Boolean(dataObject[bareWord]) ? dataObject[bareWord] : word;
});
exports.replaceValues = replaceValues;
//# sourceMappingURL=HelperFunctions.js.map