import React, { useEffect, useState } from "react";
import { OpcionDuplexAnillado } from "../../elements/Card/OpcionDuplexAnillado";
import { NameFile } from "../../elements/Card/NameFile";
import { OpcionesDeImpresion } from "../../elements/Card/OpcionesDeImpresion";
import { WhatsappLogo } from "../WhatsappLogo";
import { LogoCarrito } from "../LogoCarrito";
import { useFormatPrices } from "../../hooks/usePriceFormat";
import { usePricesAnillados } from "../../hooks/usePricesAnillados";
import { setCartItems } from "../../slices/cartShop";
import { useDispatch, useSelector } from "react-redux";

import {
  CardContainer,
  ImgContainer,
  Titulo,
  ContainerPrecio,
  ContainerCarillas,
  ContainerEncargar,
  ButtonRelative,
} from './styles';

export const Card = ({ item }) => {

  const itemsInCart = useSelector((state) => state.shopCart.cartItems)
  const [duplex, setDuplex] = useState(false)
  const [anillado, setAnillado] = useState(false)
  const [precioSimple, setPrecioSimple] = useState("")
  const [precioDoble, setPrecioDoble] = useState("")
  const dispatch = useDispatch()
  const { simple, doble } = item.prices;

  useEffect(() => {
    setPrecioSimple(useFormatPrices(simple));
    setPrecioDoble(useFormatPrices(doble));
  }, [])


  const handleEncargar = (e) => {
    for (let index = 0; index < itemsInCart.length; index++) {
      if (item.id === itemsInCart[index].id) {
        return true;
      }
    }
    const itemToAdd = { ...item, duplex: duplex, anillado: anillado }
    dispatch(setCartItems(itemToAdd))
    let guardaEnStorage = [...itemsInCart]
    guardaEnStorage.push(itemToAdd)
    window.localStorage.setItem("itemsInCard", JSON.stringify(guardaEnStorage))
  }

  useEffect(() => {
    const precioAnillado = usePricesAnillados(item.pages, duplex)
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
        <img src={`./../../assets/firstPageFiles/${item.image}`} />
      </ImgContainer>
      <Titulo>
        <ContainerPrecio>
          <span>{
            !duplex
              ? precioSimple
              : precioDoble
          }</span>
        </ContainerPrecio>
        <NameFile name={item.name} />
        <ContainerCarillas>
          <p>{`Carillas: ${item.pages}`}</p>
        </ContainerCarillas>
        <OpcionesDeImpresion />
        <OpcionDuplexAnillado id={item.id} setDuplex={setDuplex} setAnillado={setAnillado} />
        <ContainerEncargar>
          <ButtonRelative>
            <button>
              <WhatsappLogo />
              <label>Encargar</label>
            </button>
          </ButtonRelative>
          <ButtonRelative>
            <button onClick={(e) => handleEncargar(e)}>
              <LogoCarrito />
              <label className={`item_${item.id}`}>Agregar</label>
            </button>
          </ButtonRelative>
        </ContainerEncargar>
      </Titulo>
    </CardContainer>
  )
}