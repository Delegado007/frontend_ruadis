import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ItemShopCart } from "../ItemShopCart";
import { useFormatPrices } from "./../../hooks/usePriceFormat"
import { useNavigate } from "react-router-dom";
import {
  ContainerShopCart,
  ContainerPurchase,
  ContainerPriceTotal,
  Button,
  ButtonSeguirComparndo,
  ContainerSeguirComprando,
} from './styles';

export const ShopCartComponent = () => {
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const inCart = useSelector((state) => state.shopCart.cartItems)
  const priceWhitFormat = useFormatPrices(total)
  useEffect(() => {
    let subTotal = 0
    inCart.map((elem) => {
      subTotal = subTotal + elem.priceToBuy
    })
    setTotal(subTotal)
  }, [inCart])

  return (
    <>
      <ContainerShopCart>
        {inCart.map(item => (
          <ItemShopCart key={item.id} item={item} />
        ))
        }
        <ContainerPriceTotal>
          <p>{`Total: ${priceWhitFormat}`}</p>
        </ContainerPriceTotal>
        <ContainerPurchase>
          <Button>Pagar con MP</Button>
          <Button>Realiza tu pedido</Button>
        </ContainerPurchase>
      </ContainerShopCart>
      <ContainerSeguirComprando>
        <ButtonSeguirComparndo onClick={() => navigate("/")}>
          Seguir Comprando
        </ButtonSeguirComparndo>
      </ContainerSeguirComprando>
    </>
  )
}
