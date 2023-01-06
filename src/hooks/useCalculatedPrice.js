import { useState, useEffect } from "react";
import { useFormatPrices } from "./usePriceFormat";
import { usePricesAnillados } from "./usePricesAnillados";

export const useCalculatedPrice = (pages, prices, duplex, anillado) => {
  const { simple, doble } = prices;
  const [precioSimple, setPrecioSimple] = useState(simple)
  const [precioDoble, setPrecioDoble] = useState(doble)

  // useEffect(() => {
  //   setPrecioSimple(useFormatPrices(simple));
  //   setPrecioDoble(useFormatPrices(doble));
  // }, [])

  useEffect(() => {
    const precioAnillado = usePricesAnillados(pages, duplex)
    if (anillado && duplex) {
      let newPrice = precioAnillado + doble;
      setPrecioDoble(newPrice);
    }
    if (!anillado && duplex) {
      setPrecioDoble(doble);
    }
    if (anillado && !duplex) {
      let newPrice = precioAnillado + simple;
      setPrecioSimple(newPrice);
    }
    if (!anillado && !duplex) {
      setPrecioSimple(simple);
    }
  }, [duplex, anillado])

  return {
    precioSimple,
    precioDoble,
  }
}