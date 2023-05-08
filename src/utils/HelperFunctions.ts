import { IDynamicObject, IPageParams } from "../interfaces";
const EMAIL_REGEX = /\S+@\S+\.\S+/;

export const ObjectToParams = <T = IDynamicObject<any>>(
  paramsObject: Partial<T> & Partial<IPageParams>
): string => {
  const validEntries = Object.entries(paramsObject).filter((entry) => !!entry[1]);
  if (validEntries.length) {
    return encodeURI(
      "?" +
        validEntries
          .map(
            (entry) =>
              entry[0] + "=" + (typeof entry[1] === "object" ? JSON.stringify(entry[1]) : entry[1])
          )
          .join("&")
    );
  }
  return "";
};

export const ValidateEmail = (email: string): boolean =>
  Boolean(email) ? EMAIL_REGEX.test(email) : true;

export const getTotal = (array: number[]): number => {
  let total: number = 0;
  array.forEach((x) => {
    total = total + x;
  });
  return total;
};

export const SortObjects = <T extends any>(
  initialArray: T[],
  firstClassProperty: keyof T,
  order: "ASC" | "DESC" = "ASC",
  evaluatorFunction?: (a: T, b: T) => 0 | 1 | -1
): T[] =>
  initialArray.sort((a: T, b: T) => {
    if (evaluatorFunction) {
      return evaluatorFunction(a, b);
    }
    if (a[firstClassProperty] > b[firstClassProperty]) {
      return order === "ASC" ? 1 : -1;
    } else if (a[firstClassProperty] < b[firstClassProperty]) {
      return order === "ASC" ? -1 : 1;
    } else return 0;
  });

export const GetCasedString = (
  actualString: string,
  casing: "camelCase" | "PascalCase" = "camelCase",
  separator: string = ""
) =>
  actualString
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 && casing === "camelCase" ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, separator);

export const replaceValues = (actualString: string, dataObject: IDynamicObject = {}) =>
  actualString.replace(/{([^}]+)}/g, (word) => {
    const bareWord = word.replace(/{/g, "").replace(/}/g, "");
    return Boolean(dataObject[bareWord]) ? dataObject[bareWord] : word;
  });

export const BuildUrl = (
  path: string,
  urlParams: { [key: string]: string } = {},
  queryParams: { [key: string]: string } = {},
  basePath: string = ""
) => {
  let url = `${basePath}${path}`;
  Object.entries(urlParams).forEach(([k, v]) => {
    url = url.replace(`:${k}`, v);
  });
  url += ObjectToParams(queryParams);
  return url;
};
