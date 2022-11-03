export const useFormatPrices = (num) => {
  if (num === "") return "";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2
  }).format(num);
}
