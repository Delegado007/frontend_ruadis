import React, { useEffect, useState } from "react";
import { OpcionDuplexAnillado } from "../../elements/Card/OpcionDuplexAnillado";
import { NameFile } from "../../elements/Card/NameFile";
import { OpcionesDeImpresion } from "../../elements/Card/OpcionesDeImpresion";
import { WhatsappLogo } from "../WhatsappLogo";
import { LogoCarrito } from "../LogoCarrito";
import { itemAgregado, itemYaExistente } from "../../hooks/useToast";
import { useFormatPrices } from "../../hooks/usePriceFormat";
import { setCartItems } from "../../slices/cartShop";
import { useDispatch, useSelector } from "react-redux";
import { useCalculatedPrice } from "../../hooks/useCalculatedPrice";
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
  const dispatch = useDispatch()

  const { precioSimple, precioDoble } = useCalculatedPrice(
    item.pages,
    item.prices,
    duplex, anillado
  )
  const priceWhitFormatSimple = useFormatPrices(precioSimple)
  const priceWhitFormatDoble = useFormatPrices(precioDoble)

  const handleEncargar = (e) => {
    for (let index = 0; index < itemsInCart.length; index++) {
      if (item.id === itemsInCart[index].id) {
        itemYaExistente("El item ya existe en el carrito")
        return true;
      }
    }
    itemAgregado("Agregado correctamente")
    const itemToAdd = { ...item, duplex: duplex, anillado: anillado }
    dispatch(setCartItems(itemToAdd))
    let guardaEnStorage = [...itemsInCart]
    guardaEnStorage.push(itemToAdd)
    window.localStorage.setItem("itemsInCard", JSON.stringify(guardaEnStorage))
  }

  return (
    <CardContainer>
      <ImgContainer>
        <img src={`./../../assets/firstPageFiles/${item.image}`} />
      </ImgContainer>
      <Titulo>
        <ContainerPrecio>
          <span>{
            !duplex
              ? priceWhitFormatSimple
              : priceWhitFormatDoble
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