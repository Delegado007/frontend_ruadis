import React, { useEffect } from "react";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { GridCard } from "./components/GridCards";
import { Pagination } from "./components/Pagination";
import { EmptyResult } from "./components/EmpyResult";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "./slices/filesSlice";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBarPhone } from "./components/NavBarPhone";
import { Loading } from "./components/Loading";


export const App = () => {
  const pagination = useSelector((state) => state.pagination.paginationValues)
  const results = useSelector((state) => state.files.files)
  const isloading = useSelector((state) => state.files.isLoading)
  const isEmptyResults = useSelector((state) => state.files.isEmptyResult)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiles(pagination))
  }, [dispatch])
  // console.log(isEmptyResults)
  return (
    <>
      <GlobalStyles />
      <div id="app">
        <NavBarPhone />
        <NavBarDesktop />
        {isEmptyResults && <EmptyResult />}
        {results.length > 0 &&
          <>
            <GridCard />
            <Pagination />
          </>
        }
        {isloading && <Loading />}




      </div>
    </>
  );
}

