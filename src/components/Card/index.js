import React from "react";
import { WhatsappLogo } from "../WhatsappLogo";
import { LogoCarrito } from "../LogoCarrito";
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
import { useFormatPrices } from "../../hooks/usePriceFormat";

export const Card = ({ id, image, name, prices, pages }) => {
  const { simple, doble } = prices;
  const prueba = () => {
    console.log("ANDA")
  }
  let precioFormated = useFormatPrices(simple);

  return (
    <CardContainer>
      <ImgContainer>
        <img src={`./../../assets/firstPageFiles/${image}`} />
      </ImgContainer>
      <Titulo>
        <ContainerPrecio>
          <span>{precioFormated}</span>
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

          <Input type="checkbox" name="color_mode" id={`duplex_mode_${id}`} value="1" />
          <BottonSwitch htmlFor={`duplex_mode_${id}`} data-on="Doble faz" data-off="Simple faz"></BottonSwitch>
          <Input type="checkbox" name="color_mode" id={`anillado_mode_${id}`} value="1" />
          <BottonSwitch htmlFor={`anillado_mode_${id}`} data-on="Anillado" data-off="Sin anillar"></BottonSwitch>

        </ContainerDuplex>
        <ContainerEncargar>
          <ButtonRelative>
            <button onClick={() => prueba()}>
              <WhatsappLogo />
              <label>Encargar</label>
            </button>
          </ButtonRelative>
          <ButtonRelative>
            <button onClick={() => prueba()}>
              <LogoCarrito />
              <label>Agregar</label>
            </button>
          </ButtonRelative>
        </ContainerEncargar>
      </Titulo>
    </CardContainer>
  )
}