export const usePricesAnillados = (numPages, duplex) => {
  let paginas;
  if (duplex) {
    paginas = numPages / 2;
  } else {
    paginas = numPages;
  }

  switch (true) {
    case paginas <= 20:
      return 120;
    case paginas > 20 && paginas <= 50:
      return 130;
    case paginas > 50 && paginas <= 80:
      return 150;
    case paginas > 80 && paginas <= 100:
      return 170;
    case paginas > 100 && paginas <= 120:
      return 190;
    case paginas > 120 && paginas <= 140:
      return 200;
    case paginas > 140 && paginas <= 160:
      return 220;
    case paginas > 160 && paginas <= 180:
      return 250;
    case paginas > 180 && paginas <= 200:
      return 280;
    case paginas > 200 && paginas <= 350:
      return 300;
    case paginas > 350 && paginas <= 400:
      return 330;
    case paginas > 400 && paginas <= 500:
      return 350;
    default:
      return 0;
      break;
  }
}
