import React, { useEffect } from "react";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ShopCart } from "./pages/shopCart";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "./slices/filesSlice";
import { setCartItems } from "./slices/cartShop";
import { GlobalStyles } from "./styles/GlobalStyles";
import { NavBarPhone } from "./components/NavBarPhone";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

export const App = () => {
  const pagination = useSelector((state) => state.pagination.paginationValues)
  const dispatch = useDispatch();
  const itemsInCardLocal = JSON.parse(window.localStorage.getItem("itemsInCard"))

  useEffect(() => {
    dispatch(fetchFiles(pagination))
    if (itemsInCardLocal) {
      for (let index = 0; index < itemsInCardLocal.length; index++) {
        dispatch(setCartItems(itemsInCardLocal[index]))
      }
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <GlobalStyles />
      <div id="app">
        <NavBarPhone />
        <NavBarDesktop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ingresar' element={<Login />} />
          <Route path='/registrate' element={<Register />} />
          <Route path='/shopcart' element={<ShopCart />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

