import React, { useEffect, useState } from "react";
import { WhatsappLogo } from "../WhatsappLogo";
import { LogoCarrito } from "../LogoCarrito";
import { useFormatPrices } from "../../hooks/usePriceFormat";
import { usePricesAnillados } from "../../hooks/usePricesAnillados";
import {
  CardContainer,
  ImgContainer,
  Titulo,
  ContainerPrecio,
  Name,
  ContainerCarillas,
  ContainerOpciones,
  ContainerDuplex,
  BottonSwitch,
  Input,
  ContainerEncargar,
  ButtonRelative,
} from './styles';

export const Card = ({ id, image, name, prices, pages }) => {
  const [duplex, setDuplex] = useState(false)
  const [anillado, setAnillado] = useState(false)
  const [precioSimple, setPrecioSimple] = useState("")
  const [precioDoble, setPrecioDoble] = useState("")

  const { simple, doble } = prices;

  const handleDuplex = (value) => {
    setDuplex(value)
  }

  const handleAnillado = (value) => {
    setAnillado(value)
  }

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
        <Name>
          <p>{name}</p>
        </Name>
        <ContainerCarillas>
          <p>{`Carillas: ${pages}`}</p>
        </ContainerCarillas>
        <ContainerOpciones>
          <span>OPCIONES DE IMPRESION</span>
        </ContainerOpciones>
        <ContainerDuplex>
          <Input type="checkbox" name="duplex" id={`duplex_mode_${id}`} onChange={({ target }) => handleDuplex(target.checked)} />
          <BottonSwitch htmlFor={`duplex_mode_${id}`} data-on="Doble faz" data-off="Simple faz"></BottonSwitch>
          <Input type="checkbox" name="anillado" id={`anillado_mode_${id}`} onChange={({ target }) => handleAnillado(target.checked)} />
          <BottonSwitch htmlFor={`anillado_mode_${id}`} data-on="Anillado" data-off="Sin anillar"></BottonSwitch>
        </ContainerDuplex>
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