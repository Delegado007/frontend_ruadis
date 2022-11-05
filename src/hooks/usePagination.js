import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPagination, setNextPage, setPrevPage } from "../slices/paginatioSlice";


export const usePagination = () => {
  const dispatch = useDispatch();

  const { pagination: { paginationValues }, files: { count } }
    = useSelector((state) => state)

  // console.log(renderArray)
  const handleChangePagination = (numberButton) => {

    // window.localStorage.setItem('pagePoke', JSON.stringify({ limit: newLimit, offset: newOffset }))
  }

  const handleNextPage = () => {
    const newOffset = paginationValues.offset + 12;
    dispatch(setPagination({ limit: 12, offset: newOffset }));
  }

  const handlePrevPage = () => {
    const newOffset = paginationValues.offset - 12;
    dispatch(setPagination({ limit: 12, offset: newOffset }));
  }
  // useEffect(() => {
  //   const localPage = JSON.parse(window.localStorage.getItem('pagePoke')) || { limit: 12, offset: 0 };
  //   dispatch(setPagination(localPage));
  // }, [])

  return {
    handleChangePagination,
    handlePrevPage,
    handleNextPage,
  }
}
