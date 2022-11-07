import React from "react";
import { Logo } from "../Logo";
import { Search } from "../Search";
import { LogoCarrito } from "../LogoCarrito";

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
            <a href="http://localhost:3006/">
              <Logo />
            </a>
          </Logotipo>

          <ContainerSearch>
            <Search />
          </ContainerSearch>
          <ContainerUsuario>
            <button>Ingresa</button>
            <button>Registrate</button>
            <LogoCarrito />
          </ContainerUsuario>
        </ResizeContainerNav>
        <ContainerCategorias>
          <ListaMenu>
            <li>Libros</li>
            <li>Escuelas</li>
            <li>Institutos</li>
            <li>Universidades</li>
            <li>Varios</li>
          </ListaMenu>
        </ContainerCategorias>
      </ContainerNav>
    </>
  )
}