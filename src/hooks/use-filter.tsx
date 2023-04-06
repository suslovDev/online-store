import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { filterProducts, setFilter } from "../store/products-slice";

export const useFilter = () => {
  const filter = useAppSelector((state) => state.products.filter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter, dispatch]);

  const filterProd = (p: any) => { //не забыть описать типы!
    let finalFilter = { ...filter, ...p };
    dispatch(setFilter(finalFilter));
  };
  return filterProd;
};
