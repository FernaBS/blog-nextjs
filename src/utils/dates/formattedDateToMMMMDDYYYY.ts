import { format, parseISO } from "date-fns";

export const formattedDateToMMMMDDYYYY = (fechaISO: string): string => {
 const fecha = parseISO(fechaISO);
 return format(fecha, "MMMM dd, yyyy");
}
