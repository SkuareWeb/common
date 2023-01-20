"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortCode = exports.epoch = void 0;
exports.epoch = new Date(2022, 1, 1).valueOf();
const encode = (n) => {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const base = 36;
    let result = "";
    while (n) {
        result = symbols[n % base] + result;
        n = Math.floor(n / base);
    }
    return result.padStart(6, "A");
};
const getShortCode = (timestamp) => encode(Math.floor((timestamp.valueOf() - exports.epoch) / 1000));
exports.getShortCode = getShortCode;
//# sourceMappingURL=CodingUtils.js.map