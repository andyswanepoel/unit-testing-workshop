export const daysUntilBirthday = (birthday) => {
  // very time consuming and expensive function
  const date = new Date();
  const time = date.getTime();
  const year = date.getFullYear();
  let nextBday = new Date(birthday).setFullYear(year);
  if (nextBday - time < 0) {
    nextBday = new Date(nextBday).setFullYear(year + 1);
  }
  return Math.round((nextBday - time) / (1000 * 60 * 60 * 24));
};
