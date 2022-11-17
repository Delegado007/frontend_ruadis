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
  ContainerOpenMenu,
  Ul,
  Li,
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
          <a href="http://localhost:3006/">
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
      {open &&
        <ContainerOpenMenu>
          <Ul>
            <Li>Inicio</Li>
            <Li>Escuelas</Li>
            <Li>Institutos</Li>
            <Li>Libros</Li>
            <Li>Universidades</Li>
            <Li>Varios</Li>
          </Ul>
        </ContainerOpenMenu>
      }
    </ContainerNavBarPhone>
  )
}