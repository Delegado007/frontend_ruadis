import React, { useEffect, useState } from "react";
import { PaginationContainer, ButtonPagination, Ul } from './styles';
import { Previous } from "../Previous";
import { Next } from '../Next';
import { LastPage } from "../LastPage";
import { FirstPage } from "../FirstPage"
import { useSelector, useDispatch } from "react-redux";
import { setPrevPage, setNextPage, setActualPage, setPagination } from "../../slices/paginatioSlice";
import { fetchFiles, setFiles } from "../../slices/filesSlice";
import { getWhitSearch, getFiles } from "../../api";

export const Pagination = () => {
  const [renderArray, setRenderArray] = useState([])

  const dispatch = useDispatch();
  const { pagination: { paginationValues, actualPage }, files: { count, isSearch, valueInputSearch }, }
    = useSelector((state) => state)

  const handlePagination = async (target, number) => {
    const buttons = document.querySelectorAll(`.button_pag`);
    const buttonsAsArray = [...buttons];
    buttonsAsArray.map((itemInArray) => {
      if (itemInArray === target) {
        itemInArray.className += ' active';
      } else {
        itemInArray.classList.remove("active");
      }
    })
    const numberPagination = parseInt(target.innerHTML);
    dispatch(setActualPage(numberPagination))
    const newOffset = 12 * (numberPagination - 1)
    console.log(newOffset)
    dispatch(setPagination({ limit: 12, offset: newOffset }));
    if (isSearch) {
      console.log(paginationValues)
      const searchResult = await getWhitSearch(valueInputSearch, newOffset, 12);
      dispatch(setFiles(searchResult.rows))
    } else {
      const searchResult = await getFiles(newOffset, 12)
      dispatch(setFiles(searchResult.rows))
    }
  }


  useEffect(() => {
    const totalPages = Math.ceil(count / 12);
    const arrayPagination = Array.from({ length: totalPages }, (v, i) => i + 1)

    if (totalPages <= 5) {
      setRenderArray(arrayPagination);
      dispatch(setPrevPage(true))
      dispatch(setNextPage(true))
    } else {
      if (actualPage != 1 & actualPage != totalPages) {
        if (arrayPagination.length > 4) {
          if (actualPage === 2) {
            setRenderArray(arrayPagination.slice(actualPage - 2, actualPage + 3))
          }
          if (actualPage + 1 === totalPages) {
            setRenderArray(arrayPagination.slice(actualPage - 4, actualPage + 1))
          }
          if (actualPage !== 2 & actualPage !== totalPages - 1) {
            setRenderArray(arrayPagination.slice(actualPage - 3, actualPage + 2))
          }
        }
        dispatch(setPrevPage(false))
        dispatch(setNextPage(false))
      }
      if (totalPages === actualPage) {
        setRenderArray(arrayPagination.slice(-5));
        dispatch(setNextPage(true))
      }
      if (actualPage === 1) {
        setRenderArray(arrayPagination.slice(0, 5));

        dispatch(setPrevPage(true))
      }
    }

  }, [paginationValues, count])
  useEffect(() => {
    if (renderArray.length > 1) {
      const buttons = document.querySelectorAll(`.button_pag`);

      const buttonsAsArray = [...buttons];
      buttonsAsArray.map((itemInArray) => {
        if (itemInArray.innerHTML == actualPage) {
          itemInArray.className += ' active';
        } else {
          itemInArray.classList.remove("active");
        }
      })
    }
  }, [renderArray])

  return (
    <PaginationContainer>
      <Ul>
        <li className="svg-controller"><FirstPage /></li>
        <li className="svg-controller"><Previous /></li>
        {renderArray.map((item) => (
          <li key={item} className={`button_pag`} onClick={(event) => handlePagination(event.target, item)}>{item}</li>
        ))}
        <li className="svg-controller"><Next /></li>
        <li className="svg-controller"><LastPage /></li>
      </Ul>
    </PaginationContainer>
  )
}