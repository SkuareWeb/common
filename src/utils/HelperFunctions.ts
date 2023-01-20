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
