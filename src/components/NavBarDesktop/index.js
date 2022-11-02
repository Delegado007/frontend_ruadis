import React from "react";
import { Logo } from "../Logo";
import { LogoSearch } from "../LogoSearch";
import { LogoCarrito } from "../LogoCarrito";
import {
  ContainerNav,
  ResizeContainerNav,
  Logotipo,
  ContainerSearch,
  Search,
  ButtonSearch,
  ContainerUsuario,
  ContainerCategorias,
  ListaMenu,
} from "./styles";

export const NavBarDesktop = () => {
  return (
    <>
      <ContainerNav>
        <ResizeContainerNav>
          <Logotipo>
            <Logo />
          </Logotipo>

          <ContainerSearch>
            <Search>
              <form>
                <LogoSearch />
                <input type="text" placeholder="Buscar por Título" id="search" />
                <ButtonSearch type="submit">Buscar</ButtonSearch>
              </form>
            </Search>

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