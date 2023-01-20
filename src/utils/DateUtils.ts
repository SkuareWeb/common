import moment from "moment";
export const SERVER_DATE_TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZ";
export const DATE_TIME_DISPLAY_FORMAT = "Do MMM YYYY | hh:mm a";
export const DATE_DISPLAY_FORMAT = "Do MMM YYYY";
export const SERVER_DATE_SEARCH_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSS";

export const ServerToDateTime = (serverTime: string | Date) =>
  moment.utc(serverTime, SERVER_DATE_TIME_FORMAT).local().format(DATE_TIME_DISPLAY_FORMAT);

export const ShowDateRange = (
  startTime: string | Date,
  endTime?: string | Date,
  includeTime: boolean = true
): string => {
  const startTimeMoment = moment(startTime, SERVER_DATE_TIME_FORMAT);
  if (!endTime) {
    return (
      startTimeMoment.format(includeTime ? DATE_TIME_DISPLAY_FORMAT : DATE_DISPLAY_FORMAT) +
      " onwards"
    );
  }
  const endTimeMoment = moment(endTime, SERVER_DATE_TIME_FORMAT);
  const isSameDay = startTimeMoment.isSame(endTimeMoment, "date");
  if (isSameDay) {
    return includeTime
      ? `${startTimeMoment.format(DATE_TIME_DISPLAY_FORMAT)} - ${endTimeMoment.format("hh:mm a")}`
      : startTimeMoment.format(DATE_DISPLAY_FORMAT);
  } else {
    return includeTime
      ? `${startTimeMoment.format(DATE_TIME_DISPLAY_FORMAT)} - ${endTimeMoment.format(
          DATE_TIME_DISPLAY_FORMAT
        )}`
      : `${startTimeMoment.format(DATE_DISPLAY_FORMAT)} - ${endTimeMoment.format(
          DATE_DISPLAY_FORMAT
        )}`;
  }
};
