import React from "react";
import { Logo } from "../Logo";
import { SearchInput } from "../Search";
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
            <SearchInput />
          </ContainerSearch>
          <ContainerUsuario>
            <button>Ingresa</button>
            <button>Registrate</button>
            <button>
              <LogoCarrito />
            </button>
          </ContainerUsuario>
        </ResizeContainerNav>
        <ContainerCategorias>
          <ListaMenu>
            <li>Inicio</li>
            <li>Escuelas</li>
            <li>Institutos</li>
            <li>Libros</li>
            <li>Universidades</li>
            <li>Varios</li>
          </ListaMenu>
        </ContainerCategorias>
      </ContainerNav>
    </>
  )
}