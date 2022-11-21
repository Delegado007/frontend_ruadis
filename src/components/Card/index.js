import React, { useEffect, useState } from "react";
import { OpcionDuplexAnillado } from "../../elements/Card/OpcionDuplexAnillado";
import { NameFile } from "../../elements/Card/NameFile";
import { OpcionesDeImpresion } from "../../elements/Card/OpcionesDeImpresion";
import { WhatsappLogo } from "../WhatsappLogo";
import { LogoCarrito } from "../LogoCarrito";
import { useFormatPrices } from "../../hooks/usePriceFormat";
import { usePricesAnillados } from "../../hooks/usePricesAnillados";
import {
  CardContainer,
  ImgContainer,
  Titulo,
  ContainerPrecio,
  ContainerCarillas,
  ContainerEncargar,
  ButtonRelative,
} from './styles';

export const Card = ({ id, image, name, prices, pages }) => {
  const [duplex, setDuplex] = useState(false)
  const [anillado, setAnillado] = useState(false)
  const [precioSimple, setPrecioSimple] = useState("")
  const [precioDoble, setPrecioDoble] = useState("")

  const { simple, doble } = prices;

  useEffect(() => {
    setPrecioSimple(useFormatPrices(simple));
    setPrecioDoble(useFormatPrices(doble));
  }, [])

  useEffect(() => {
    const precioAnillado = usePricesAnillados(pages, duplex)
    if (anillado && duplex) {
      let newPrice = precioAnillado + doble;
      setPrecioDoble(useFormatPrices(newPrice));
    }
    if (!anillado && duplex) {
      setPrecioDoble(useFormatPrices(doble));
    }
    if (anillado && !duplex) {
      let newPrice = precioAnillado + simple;
      setPrecioSimple(useFormatPrices(newPrice));
    }
    if (!anillado && !duplex) {
      setPrecioSimple(useFormatPrices(simple));
    }
  }, [duplex, anillado])

  return (
    <CardContainer>
      <ImgContainer>
        <img src={`./../../assets/firstPageFiles/${image}`} />
      </ImgContainer>
      <Titulo>
        <ContainerPrecio>
          <span>{
            !duplex
              ? precioSimple
              : precioDoble
          }</span>
        </ContainerPrecio>
        <NameFile name={name} />
        <ContainerCarillas>
          <p>{`Carillas: ${pages}`}</p>
        </ContainerCarillas>
        <OpcionesDeImpresion />
        <OpcionDuplexAnillado id={id} setDuplex={setDuplex} setAnillado={setAnillado} />
        <ContainerEncargar>
          <ButtonRelative>
            <button>
              <WhatsappLogo />
              <label>Encargar</label>
            </button>
          </ButtonRelative>
          <ButtonRelative>
            <button>
              <LogoCarrito />
              <label>Agregar</label>
            </button>
          </ButtonRelative>
        </ContainerEncargar>
      </Titulo>
    </CardContainer>
  )
}