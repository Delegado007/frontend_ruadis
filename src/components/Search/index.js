import React, { useState } from "react";
import { LogoSearch } from "../LogoSearch";
import { getWhitSearch } from "../../api";
import { useDispatch } from "react-redux";
import { setFiles, setCount, setIsSearch, setValueInputSearch, setIsEmptyResult, setIsLoading } from "../../slices/filesSlice";
import { setPagination, setActualPage } from "../../slices/paginatioSlice";
import { SearchForm, ButtonSearch, Form, Input } from "./styles";
export const SearchInput = () => {

  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()

  const handleSearch = async (e) => {
    e.preventDefault()
    const initPagination = {
      offset: 0,
      limit: 12
    }
    if (searchValue === undefined || searchValue === "") return true;
    dispatch(setIsLoading(true))
    const searchResult = await getWhitSearch(searchValue, initPagination.offset, initPagination.limit);
    if (searchResult.rows.length === 0) {
      console.log(searchResult.rows.length === 0)
      dispatch(setIsEmptyResult(true));
    } else {
      dispatch(setIsEmptyResult(false));
    }
    dispatch(setFiles(searchResult.rows))
    dispatch(setCount(searchResult.count))
    dispatch(setPagination(initPagination))
    dispatch(setActualPage(1))
    dispatch(setIsSearch(true))
    dispatch(setValueInputSearch(searchValue))
    dispatch(setIsLoading(false))
  }
  return (
    <SearchForm>
      <Form onSubmit={handleSearch}>
        <LogoSearch />
        <Input type="text" placeholder="Buscar por Título" id="search" onChange={({ target }) => setSearchValue(target.value)} />
        <ButtonSearch type="submit">Buscar</ButtonSearch>
      </Form>
    </SearchForm>
  )
}