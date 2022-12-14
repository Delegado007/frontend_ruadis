import React, { useEffect, useState } from "react";
import { PaginationContainer, Ul, Li, Button } from './styles';
import { Previous } from "../Previous";
import { Next } from '../Next';
import { LastPage } from "../LastPage";
import { FirstPage } from "../FirstPage"
import { useSelector, useDispatch } from "react-redux";
import { setPrevPage, setNextPage, setActualPage, setPagination } from "../../slices/paginatioSlice";
import { fetchFiles, setFiles, setIsLoading } from "../../slices/filesSlice";
import { getWhitSearch, getFiles } from "../../api";

export const Pagination = () => {
  const [totalPages, setTotalPages] = useState(0)
  const dispatch = useDispatch();

  const { pagination: { paginationValues, actualPage, nextPage, prevPage }, files: { count, isSearch, valueInputSearch }, } = useSelector((state) => state)

  const getData = async (newOffset) => {
    dispatch(setIsLoading(true))
    if (isSearch) {
      const newResults = await getWhitSearch(valueInputSearch, newOffset, 12);
      dispatch(setFiles(newResults.rows))
    } else {
      const newResults = await getFiles(newOffset, 12)
      dispatch(setFiles(newResults.rows))
    }
    dispatch(setIsLoading(false))
  }

  const handleNexPage = async () => {
    if (actualPage !== totalPages) {
      const newOffset = 12 * (actualPage)
      dispatch(setPagination({ ...paginationValues, offset: newOffset }))
      dispatch(setActualPage(actualPage + 1))
      getData(newOffset)
    }
  }
  const handlePrevPage = async () => {
    if (actualPage !== 1) {
      const newOffset = 12 * (actualPage) - 24
      dispatch(setPagination({ ...paginationValues, offset: newOffset }))
      dispatch(setActualPage(actualPage - 1))
      getData(newOffset)
    }
  }


  const handleLastPage = () => {
    if (actualPage !== totalPages) {
      const newOffset = 12 * totalPages - 12;
      dispatch(setPagination({ ...paginationValues, offset: newOffset }))
      dispatch(setActualPage(totalPages))
      getData(newOffset);
    }
  }
  const handleFirstPage = () => {
    if (actualPage !== 1) {
      const newOffset = 0;
      dispatch(setPagination({ ...paginationValues, offset: newOffset }))
      dispatch(setActualPage(1))
      getData(newOffset);
    }

  }

  useEffect(() => {
    const totalPages = Math.ceil(count / 12)
    setTotalPages(totalPages);
    if (totalPages === actualPage) {
      dispatch(setNextPage(true))
    } else {
      dispatch(setNextPage(false))
    }
    if (actualPage === 1) {
      dispatch(setPrevPage(true))
    } else {
      dispatch(setPrevPage(false))
    }
    if (totalPages === 1) {
      dispatch(setNextPage(true))
    }
  }, [paginationValues, count])

  return (
    <PaginationContainer>
      <Ul>
        <Li className="svg-controller"><Button disabled={prevPage} onClick={handleFirstPage}><FirstPage /></Button></Li>
        <a href="#header">
          <Li className="svg-controller"><Button disabled={prevPage} onClick={handlePrevPage}><Previous /></Button></Li>
        </a>

        <Li className={`button_pag`}>{actualPage}</Li>
        <Li className={`button_pag`}>de</Li>
        <Li className={`button_pag`}>{totalPages}</Li>
        <a href="#header">
          <Li className="svg-controller"><Button disabled={nextPage} onClick={handleNexPage}><Next /></Button></Li>
        </a>
        <Li className="svg-controller"><Button disabled={nextPage} onClick={handleLastPage}><LastPage /></Button></Li>
      </Ul>
    </PaginationContainer>
  )
}
