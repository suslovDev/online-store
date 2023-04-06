import { FC, useState } from "react";
import classes from "./CatalogPage.module.css";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { useFilter } from "../hooks/use-filter";
import { setCurrent } from "../store/ui-slice";
import { CARE } from "../data/care";
import CareFilterTop from "../components/Filter/filter-top/CareFilterTop";
import Container from "../components/Layout/Container/Container";
import Crumbs from "../components/Layout/Crumbs/Crumbs";
import FilterAside from "../components/Filter/filter-aside/FilterAside";
import HorisontalGap from "../components/Layout/HorisontalGap/HorisontalGap";
import Pagination from "../components/UI/Pagination";
import ProductList from "../components/Products/ProductList";
import SortCatalog from "../components/Sort/SortCatalog";

const params = [
  { url: "", name: "Главная" },
  { url: "catalog", name: "Каталог" },
];

export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const filterByCare = useFilter();
  const products = useAppSelector((state) => state.products.products);
  const selectedCare = useAppSelector((state) => state.ui.currentCare);
  const [displayProducts, setDisplayProducts] = useState([]);

  const handleSetSlice = (prods: []) => {
    setDisplayProducts(prods);
  };

  const handleSelect = (id: number) => {
    const careType = CARE.find((item) => item.id === id)?.heading.toLowerCase();
    if (!careType) return;
    filterByCare({ care: careType });
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
