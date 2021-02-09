import dayjs from "dayjs";
import "dayjs/locale/es";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

dayjs.locale("es");

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
