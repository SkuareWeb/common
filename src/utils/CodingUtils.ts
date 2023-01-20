export const epoch = new Date(2022, 1, 1).valueOf();

const encode = (n: number): string => {
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const base = 36;
  let result = "";

  while (n) {
    result = symbols[n % base] + result;
    n = Math.floor(n / base);
  }

  return result.padStart(6, "A");
};

export const getShortCode = (timestamp: Date) =>
  encode(Math.floor((timestamp.valueOf() - epoch) / 1000));
