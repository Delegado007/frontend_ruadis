import React, { useState } from "react";
import { SearchInput } from './../Search'
import { Logo } from './../Logo'
import { LogoCarrito } from './../LogoCarrito'
import { Router, Link } from "react-router-dom";
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
          <Link to="shopcart">
            <button>
              <LogoCarrito />
              <ItemsInCarro>
                <p>2</p>
              </ItemsInCarro>
            </button>
          </Link>
        </Carrito>
      </ContainerMenu>
      <ContainerSearch>
        <SearchInput />
      </ContainerSearch>
      {open &&
        <ContainerOpenMenu>
          <Ul>
            <Link to="/" onClick={handleOpneMenu}>
              <Li>Inicio</Li>
            </Link>
            <Link to="escuelas" onClick={handleOpneMenu}>
              <Li>Escuelas</Li>
            </Link>
            <Link to="institutos" onClick={handleOpneMenu}>
              <Li>Institutos</Li>
            </Link>
            <Link to="libros" onClick={handleOpneMenu}>
              <Li>Libros</Li>
            </Link>
            <Link to="universidades" onClick={handleOpneMenu}>
              <Li>Universidades</Li>
            </Link>
            <Link to="varios" onClick={handleOpneMenu}>
              <Li>Varios</Li>
            </Link>
          </Ul>
        </ContainerOpenMenu>
      }
    </ContainerNavBarPhone>
  )
}