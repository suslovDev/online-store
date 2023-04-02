import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { CartPage } from "./pages/CartPage";
import { CatalogPage } from "./pages/CatalogPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { useAppDispatch } from "./hooks";
import { initProds } from "./store/products-slice";
import products from "./products.json";
import { AdminPage } from "./pages/AdminPage";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.products && localStorage.products.length) {
      console.log("Заполняю из localStorage");
      dispatch(initProds(JSON.parse(localStorage.products)));
    } else {
      console.log("Заполняю из json");
      dispatch(initProds(products));
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='catalog' element={<CatalogPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='catalog/:id' element={<ProductPage />} />
        <Route path='admin' element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

export default App;
