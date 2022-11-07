import React, { useState } from "react";
import { SearchInput } from './../Search'
import { Logo } from './../Logo'
import { LogoCarrito } from './../LogoCarrito'
import {
  ContainerNavBarPhone,
  ContainerMenu,
  ContainerSearch,
  ContainerLogo,
  Menu,
  Carrito,
  ItemsInCarro,
} from "./styles";
export const NavBarPhone = () => {
  const [open, setOpen] = useState(false);
  const handleOpneMenu = () => {
    setOpen(!open)
  }
  return (
    <ContainerNavBarPhone>
      <ContainerMenu>
        <Menu open={open}>
          <button onClick={handleOpneMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </Menu>
        <ContainerLogo>
          <a>
            <Logo />
          </a>
        </ContainerLogo>
        <Carrito>
          <button>
            <LogoCarrito />
            <ItemsInCarro>
              <p>2</p>
            </ItemsInCarro>
          </button>
        </Carrito>
      </ContainerMenu>
      <ContainerSearch>
        <SearchInput />
      </ContainerSearch>
    </ContainerNavBarPhone>
  )
}