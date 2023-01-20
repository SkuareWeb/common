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

export const defaultPageParams: IPageParams = { limit: 10, skip: 0 };
