import { IDynamicObject, IPageParams } from "../interfaces";
export declare const ObjectToParams: <T = IDynamicObject<any>>(paramsObject: Partial<T> & Partial<IPageParams>) => string;
export declare const ValidateEmail: (email: string) => boolean;
export declare const getTotal: (array: number[]) => number;
export declare const SortObjects: <T extends unknown>(initialArray: T[], firstClassProperty: keyof T, order?: "ASC" | "DESC", evaluatorFunction?: ((a: T, b: T) => 0 | 1 | -1) | undefined) => T[];
export declare const GetCasedString: (actualString: string, casing?: "camelCase" | "PascalCase", separator?: string) => string;
export declare const replaceValues: (actualString: string, dataObject?: IDynamicObject) => string;
