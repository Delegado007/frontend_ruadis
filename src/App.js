import React, { useEffect } from "react";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { GridCard } from "./components/GridCards";
import { Pagination } from "./components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "./slices/filesSlice";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBarPhone } from "./components/NavBarPhone";


export const App = () => {
  const pagination = useSelector((state) => state.pagination.paginationValues)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiles(pagination))
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <div id="app">
        <NavBarPhone />
        <NavBarDesktop />
        <GridCard />
        <Pagination />
      </div>
    </>
  );
}

