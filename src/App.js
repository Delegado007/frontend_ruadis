import React, { useEffect } from "react";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { GridCard } from "./components/GridCards";
import { Pagination } from "./components/Pagination";
import { EmptyResult } from "./components/EmpyResult";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ShopCart } from "./pages/shopCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "./slices/filesSlice";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBarPhone } from "./components/NavBarPhone";
import { Loading } from "./components/Loading";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";


export const App = () => {
  const pagination = useSelector((state) => state.pagination.paginationValues)



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFiles(pagination))
  }, [dispatch])
  // console.log(isEmptyResults)
  return (

    <BrowserRouter>
      <GlobalStyles />
      <div id="app">
        <NavBarPhone />
        <NavBarDesktop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shopcart' element={<ShopCart />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

