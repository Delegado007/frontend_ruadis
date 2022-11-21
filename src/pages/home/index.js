import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../components/Loading";
import { EmptyResult } from "../../components/EmpyResult";
import { GridCard } from "../../components/GridCards";
import { Pagination } from "../../components/Pagination";

export const Home = () => {
  const isloading = useSelector((state) => state.files.isLoading)
  const results = useSelector((state) => state.files.files)
  const isEmptyResults = useSelector((state) => state.files.isEmptyResult)

  return (
    <>
      {isEmptyResults && <EmptyResult />}
      {results.length > 0 &&
        <>
          <GridCard />
          <Pagination />
        </>
      }
      {isloading && <Loading />}
    </>
  )
}