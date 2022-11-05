import React, { useState } from "react";
import { Logo } from "../Logo";
import { LogoSearch } from "../LogoSearch";
import { LogoCarrito } from "../LogoCarrito";
import { getWhitSearch } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { setFiles, setCount, setIsSearch, setValueInputSearch } from "../../slices/filesSlice";
import { setPagination } from "../../slices/paginatioSlice";
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
    const initPagination = {
      offset: 0,
      limit: 12
    }
    e.preventDefault()
    if (searchValue === undefined || searchValue === "") return true;
    console.log(initPagination.limit);
    const searchResult = await getWhitSearch(searchValue, initPagination.offset, initPagination.limit);
    dispatch(setFiles(searchResult.rows))
    dispatch(setCount(searchResult.count))
    dispatch(setPagination(initPagination))
    dispatch(setIsSearch(true))
    dispatch(setValueInputSearch(e.target[0].value))
  }
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