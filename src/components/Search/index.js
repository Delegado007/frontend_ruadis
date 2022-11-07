import React, { useState } from "react";
import { LogoSearch } from "../LogoSearch";
import { SearchForm, ButtonSearch } from "./styles";
import { getWhitSearch } from "../../api";
import { useDispatch } from "react-redux";
import { setFiles, setCount, setIsSearch, setValueInputSearch } from "../../slices/filesSlice";
import { setPagination } from "../../slices/paginatioSlice";
export const Search = () => {

  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    e.preventDefault()
    const initPagination = {
      offset: 0,
      limit: 12
    }
    if (searchValue === undefined || searchValue === "") return true;
    const searchResult = await getWhitSearch(searchValue, initPagination.offset, initPagination.limit);
    dispatch(setFiles(searchResult.rows))
    dispatch(setCount(searchResult.count))
    dispatch(setPagination(initPagination))
    dispatch(setIsSearch(true))
    dispatch(setValueInputSearch(searchValue))
  }
  return (
    <SearchForm>
      <form onSubmit={handleSearch}>
        <LogoSearch />
        <input type="text" placeholder="Buscar por Título" id="search" onChange={({ target }) => setSearchValue(target.value)} />
        <ButtonSearch type="submit">Buscar</ButtonSearch>
      </form>
    </SearchForm>
  )
}