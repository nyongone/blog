export function formatDate(date: string | Date) {
  const dateObject = new Date(date);
  return `${dateObject.getFullYear()}년 ${dateObject.getMonth() < 10 ? `0${dateObject.getMonth() + 1}` : dateObject.getMonth() + 1}월 ${dateObject.getDate()}일`;
}
