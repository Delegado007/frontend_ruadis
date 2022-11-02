import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBarDesktop } from "./components/NavBarDesktop";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <div id="app">
        <NavBarDesktop />

      </div>
    </>
  );
}

