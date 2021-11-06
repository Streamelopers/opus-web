export const addDays = (days) => {
  const date = new Date(Date.now());
  date.setDate(date.getDate() + days);
  return date;
};
