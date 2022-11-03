import React, { useEffect } from "react";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { GridCard } from "./components/GridCards";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useDispatch } from "react-redux";
import { fetchFiles } from "./slices/filesSlice";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFiles())
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <div id="app">
        <NavBarDesktop />
        <GridCard />
      </div>
    </>
  );
}

