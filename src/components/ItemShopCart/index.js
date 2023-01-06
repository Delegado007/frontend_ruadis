import React, { useEffect, useState } from "react";
// imports de componentes
import { OpcionesDeImpresion } from "../../elements/Card/OpcionesDeImpresion";
import { NameFile } from "../../elements/Card/NameFile";
import { OpcionDuplexAnillado } from "../../elements/Card/OpcionDuplexAnillado";
import { DeleteItemCart } from "../../elements/Card/DeleteItemCart";
// imports reducer 
import { setCartItems, setDeleteItem, setTotalAmount, setUpdateItem } from "../../slices/cartShop";
import { useDispatch, useSelector } from "react-redux";
// hooks
import { useCalculatedPrice } from "../../hooks/useCalculatedPrice";
import { useFormatPrices } from "../../hooks/usePriceFormat";
// imports de stilos
import {
  Img,
  ContainerItem,
  ContainerImg,
  ContainerOpciones,
  ButtonDelete,
  Span,
} from './styles';
import { ThemeProvider } from "styled-components";

export const ItemShopCart = ({ item }) => {
  const [duplex, setDuplex] = useState(item.duplex)
  const [anillado, setAnillado] = useState(item.anillado)
  const [cantidadCopias, setCantidadCopias] = useState(1)
  const dispatch = useDispatch()
  const itemsInRedux = useSelector((state) => state.shopCart.cartItems)

  const { precioSimple, precioDoble } = useCalculatedPrice(
    item.pages,
    item.prices,
    duplex,
    anillado
  )

  const priceWhitFormatSimple = useFormatPrices(precioSimple)
  const priceWhitFormatDoble = useFormatPrices(precioDoble)


  const setOpcion = (price) => {
    const filtrado = itemsInRedux.map(elem => {
      if (elem.id === item.id) {
        const newElement = {
          ...elem,
          anillado: anillado,
          duplex: duplex,
          priceToBuy: price
        }
        dispatch(setUpdateItem(newElement))
        return newElement
      } else {
        return elem
      }
    })

    return filtrado;
  }

  useEffect(() => {
    const filtrado = !duplex
      ? setOpcion(precioSimple)
      : setOpcion(precioDoble)

    window.localStorage.setItem("itemsInCard", JSON.stringify(filtrado))
  }, [duplex, anillado, precioSimple, precioDoble])

  const theme = {
    height: "19px",
    heightSwhitch: "67px",
    fx_direction: "column"
  }

  const handleDelete = () => {
    const newItemsInLocalStorage = itemsInRedux.filter(elem => elem.id !== item.id)
    window.localStorage.setItem("itemsInCard", JSON.stringify(newItemsInLocalStorage))
    dispatch(setDeleteItem(item))
  }


  return (
    <ThemeProvider theme={theme}>
      <ContainerItem>
        <ContainerImg>
          <Img src={`./../../assets/firstPageFiles/${item.image}`} />
        </ContainerImg>
        <ContainerOpciones>
          <NameFile name={item.name} />
          <OpcionesDeImpresion />
          <label>Copias:</label>
          <input type="number" min={1} max={10} value={cantidadCopias} step={1} onChange={(e) => { setCantidadCopias(e.target.value) }}></input>
          <OpcionDuplexAnillado id={item.id} duplex={item.duplex} anillado={item.anillado} setDuplex={setDuplex} setAnillado={setAnillado} />
        </ContainerOpciones>
        <ButtonDelete onClick={() => handleDelete()}>
          <DeleteItemCart />
        </ButtonDelete>
        <Span>{
          !duplex
            ? priceWhitFormatSimple
            : priceWhitFormatDoble
        }</Span>
      </ContainerItem>
    </ThemeProvider>
  )
}