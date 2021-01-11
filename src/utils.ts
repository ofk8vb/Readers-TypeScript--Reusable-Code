// utility method that takes a valid date in string format, and returns a Date object instantiated with parsed date from the input dateString

export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018 would turn into [28,10,2018]
  const dateParts = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  // Date object can create a date object if Year, month, day numbers are provided
  // we subtract 1 from the month because month inside Date object constructor is 0 indexed
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
