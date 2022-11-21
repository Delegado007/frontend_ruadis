import React from "react";
import { Logo } from "../Logo";
import { SearchInput } from "../Search";
import { LogoCarrito } from "../LogoCarrito";
import { Router, Link } from "react-router-dom";

import {
  ContainerNav,
  ResizeContainerNav,
  Logotipo,
  ContainerSearch,
  ContainerUsuario,
  ContainerCategorias,
  ListaMenu,
} from "./styles";

export const NavBarDesktop = () => {
  return (
    <>
      <ContainerNav id="header">
        <ResizeContainerNav>
          <Logotipo>
            <Link to="/">
              <Logo />
            </Link>
          </Logotipo>
          <ContainerSearch>
            <SearchInput />
          </ContainerSearch>
          <ContainerUsuario>
            <Link to="ingresar">
              <button>Ingresa</button>
            </Link>
            <Link to="registrate">
              <button>Registrate</button>
            </Link>
            <Link to="shopcart">
              <button>
                <LogoCarrito />
              </button>
            </Link>
          </ContainerUsuario>
        </ResizeContainerNav>
        <ContainerCategorias>
          <ListaMenu>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="escuelas">
              <li>Escuelas</li>
            </Link>
            <Link to="institutos">
              <li>Institutos</li>
            </Link>
            <Link to="libros">
              <li>Libros</li>
            </Link>
            <Link to="universidades">
              <li>Universidades</li>
            </Link>
            <Link to="varios">
              <li>Varios</li>
            </Link>
          </ListaMenu>
        </ContainerCategorias>
      </ContainerNav>
    </>
  )
}