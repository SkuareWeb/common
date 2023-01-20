import { IDynamicObject, IPageParams } from "../interfaces";
export declare const ObjectToParams: <T = IDynamicObject<any>>(paramsObject: Partial<T> & Partial<IPageParams>) => string;
export declare const ValidateEmail: (email: string) => boolean;
export declare const getTotal: (array: number[]) => number;
