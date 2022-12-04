import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ItemShopCart } from "../ItemShopCart";
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
  const [itemsCart, setItemCart] = useState([])
  const navigate = useNavigate()
  const inCart = useSelector((state) => state.shopCart.cartItems)
  return (
    <>
      <ContainerShopCart>
        {inCart.map(item => (
          <ItemShopCart key={item.id} item={item} />
        ))
        }
        <ContainerPriceTotal>
          <p>Total: $4.500,50</p>
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
