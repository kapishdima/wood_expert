export const ellipsis = (string, max) => {
  return string.length > max ? string.slice(0, max - 1) + '...' : string;
};
