import { dayjs } from "../config/dayjs";

export function timeago(date: string): string {
  if (!dayjs(date).isValid()) {
    return date;
  }

  return dayjs(date).fromNow();
}

export function formatDate(date: string): string {
  if (!dayjs(date).isValid()) {
    return date;
  }

  return dayjs(date).format("dddd D [de] MMMM [del] YYYY");
}
