import React, { useState } from "react";
// imports de componentes
import { OpcionesDeImpresion } from "../../elements/Card/OpcionesDeImpresion";
import { NameFile } from "../../elements/Card/NameFile";
import { OpcionDuplexAnillado } from "../../elements/Card/OpcionDuplexAnillado";
import { DeleteItemCart } from "../../elements/Card/DeleteItemCart";
// imports reducer 
import { setDeleteItem } from "../../slices/cartShop";
import { useDispatch } from "react-redux";
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

export const ItemShopCart = ({ item }) => {
  const [duplex, setDuplex] = useState(false)
  const [anillado, setAnillado] = useState(false)
  const [cantidadCopias, setCantidadCopias] = useState(1)
  const dispatch = useDispatch()

  const theme = {
    height: "19px",
    heightSwhitch: "67px",
    fx_direction: "column"
  }

  const handleDelete = () => {
    console.log("borrado item " + item.name)
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
          <OpcionDuplexAnillado id={item.id} setDuplex={setDuplex} setAnillado={setAnillado} />
        </ContainerOpciones>
        <ButtonDelete onClick={() => handleDelete()}>
          <DeleteItemCart />
        </ButtonDelete>
      </ContainerItem>

    </ThemeProvider>
  )
}