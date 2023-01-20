import { IPaginatedResponse } from "../interfaces";
import { ObjectType } from "../constants";
export declare class APIManager {
    private static localInstance;
    private url;
    private constructor();
    static get instance(): APIManager;
    setAPIUrl: (url: string) => void;
    getListData: <T = any>(collection: ObjectType, queryParams: Partial<T>) => Promise<IPaginatedResponse<T>>;
    signup: (as: "") => any;
}
