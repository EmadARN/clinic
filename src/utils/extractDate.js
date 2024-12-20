export function extractDate(reserveTimeStr) {
  // عبارت منظم برای پیدا کردن الگوی تاریخ به شکل "1403/8/15"
  const dateMatch = reserveTimeStr.match(/\d{4}\/\d{1,2}\/\d{1,2}/);
  // اگر تاریخ پیدا شد، آن را برمی‌گردانیم وگرنه رشته خالی برمی‌گردد
  return dateMatch ? dateMatch[0] : "";
}

export function extractTime(reserveTimeStr) {
  // عبارت منظم برای پیدا کردن الگوی زمان مانند "10:00" یا "10:00:00"
  const timeMatch = reserveTimeStr.match(/\b\d{1,2}:\d{2}(?::\d{2})?\b/);
  // اگر زمان پیدا شد، آن را برمی‌گردانیم وگرنه رشته خالی برمی‌گردد
  return timeMatch ? timeMatch[0].slice(0, 5) : "";
}

//dateParts
const splitDate = (dateString, start, end) => {
  return dateString?.slice(start, end);
};


export const getDateParts = (dateString) => {
  const year = splitDate(dateString, 0, 4);
  const month = splitDate(dateString, 5, 6);
  const day = splitDate(dateString, 7, 10);
  return { year, month, day };
};
