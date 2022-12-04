import React, { useState } from "react";
// imports de componentes
import { OpcionesDeImpresion } from "../../elements/Card/OpcionesDeImpresion";
import { NameFile } from "../../elements/Card/NameFile";
import { OpcionDuplexAnillado } from "../../elements/Card/OpcionDuplexAnillado";
import { DeleteItemCart } from "../../elements/Card/DeleteItemCart";
// imports reducer 
import { setDeleteItem } from "../../slices/cartShop";
import { useDispatch, useSelector } from "react-redux";
// imports de stilos
import {
  Img,
  ContainerItem,
  ContainerImg,
  ContainerOpciones,
  ButtonDelete,
  ContainerPurchase,
} from './styles';
import { ThemeProvider } from "styled-components";
import { json } from "react-router-dom";

export const ItemShopCart = ({ item }) => {
  const [duplex, setDuplex] = useState(false)
  const [anillado, setAnillado] = useState(false)
  const [cantidadCopias, setCantidadCopias] = useState(1)
  const dispatch = useDispatch()
  const itemsInRedux = useSelector((state) => state.shopCart.cartItems)
  console.log(itemsInRedux)

  const theme = {
    height: "19px",
    heightSwhitch: "67px",
    fx_direction: "column"
  }

  const handleDelete = () => {
    console.log("borrado item " + item.name)
    const newItemsInLocalStorage = itemsInRedux.filter(elem => elem.id !== item.id)
    console.log(newItemsInLocalStorage)
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
          <input type="number" min={0} max={10} value={cantidadCopias} step={1} onChange={(e) => { setCantidadCopias(e.target.value) }}></input>
          <OpcionDuplexAnillado id={item.id} duplex={item.duplex} anillado={item.anillado} setDuplex={setDuplex} setAnillado={setAnillado} />
        </ContainerOpciones>
        <ButtonDelete onClick={() => handleDelete()}>
          <DeleteItemCart />
        </ButtonDelete>
      </ContainerItem>

    </ThemeProvider>
  )
}