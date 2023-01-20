"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIManager = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const objectCollectionMap = {
    [constants_1.ObjectType.Event]: "event"
};
// <IEvent>APIManager.instance.getListData(ObjectType.Event, {establishment: "123456"})
class APIManager {
    static localInstance;
    url = "";
    constructor() { }
    static get instance() {
        if (!APIManager.localInstance) {
            APIManager.localInstance = new APIManager();
        }
        return APIManager.localInstance;
    }
    setAPIUrl = (url) => {
        this.url = url;
    };
    getListData = (collection, queryParams) => {
        return axios_1.default.get(`${this.url}/${objectCollectionMap[collection]}`).then(resp => resp.data);
    };
    signup = (as) => ;
}
exports.APIManager = APIManager;
//# sourceMappingURL=index.js.map