import classes from "./CatalogPage.module.css";
import { FC, useState } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import ProductList from "../components/Products/ProductList";
import Crumbs from "../components/Layout/Crumbs";
import Container from "../components/Layout/Container";
import SortCatalog from "../components/Sort/SortCatalog";
import HorisontalGap from "../components/Layout/HorisontalGap";
import FilterAside from "../components/Filter/FilterAside";
import Pagination from "../components/UI/Pagination";
import { CARE } from "../data/care";
import { setCurrent } from "../store/ui-slice";
import CareFilterTop from "../components/Filter/CareFilterTop";
import { filterByCare } from "../store/products-slice";

const params = [
  { url: "", name: "Главная" },
  { url: "catalog", name: "Каталог" },
];

export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const selectedCare = useAppSelector((state) => state.ui.currentCare);

  const [displayProducts, setDisplayProducts] = useState([]);

  const handleSetSlice = (prods: []) => {
    setDisplayProducts(prods);
  };

  const handleSelect = (id: number) => {
    const careType = CARE.find((item) => item.id === id)?.heading.toLowerCase();
    if (!careType) return;
    dispatch(
      filterByCare({
        value: careType,
      })
    );
    dispatch(setCurrent(id));
  };

  return (
    <Container>
      <Crumbs params={params} />
    
      <div className={classes.header}>
        <div className={classes.top}>
          <h2 className={classes.heading}>Косметика и гигиена</h2>
          <SortCatalog />
        </div>
        <CareFilterTop
          selected={selectedCare}
          list={CARE}
          onSelect={handleSelect}
        />
      </div>
      <HorisontalGap gap='30px' />
      <div className={classes.bottom}>
        <aside>
          <FilterAside />
        </aside>
        <div className={classes.products}>
          <ProductList products={displayProducts} />
          <Pagination
            products={products}
            perPage={15}
            onShowSlice={handleSetSlice}
          />
        </div>
      </div>
      <HorisontalGap gap='100px' />
    </Container>
  );
};
