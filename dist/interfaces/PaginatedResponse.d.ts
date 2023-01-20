export interface IPaginatedResponse<T> {
    count: number;
    limit: number;
    skip: number;
    results: T[];
}
export interface IPageParams {
    limit: number;
    skip: number;
}
export declare const defaultPageParams: IPageParams;
