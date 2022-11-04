import React, { useState } from "react";
import { Logo } from "../Logo";
import { LogoSearch } from "../LogoSearch";
import { LogoCarrito } from "../LogoCarrito";
import { getWhitSearch } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../../slices/filesSlice";
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
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()
  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchValue === undefined || searchValue === "") return true;
    const searchResult = await getWhitSearch(searchValue);
    dispatch(setFiles(searchResult))
    console.log(searchResult)
  }
  console.log(searchValue)
  return (
    <>
      <ContainerNav>
        <ResizeContainerNav>
          <Logotipo>
            <a href="http://localhost:3006/">
              <Logo />
            </a>
          </Logotipo>

          <ContainerSearch>
            <Search>
              <form onSubmit={handleSearch}>
                <LogoSearch />
                <input type="text" placeholder="Buscar por Título" id="search" onChange={({ target }) => setSearchValue(target.value)} />
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