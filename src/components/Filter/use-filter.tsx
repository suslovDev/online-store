import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filterProducts, setFilter } from "../../store/products-slice";

export const useFilter = () => {
  const filter = useAppSelector((state) => state.products.filter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter]);

  const filterProd = (p: any) => {
    let finalFilter = { ...filter, ...p };
    dispatch(setFilter(finalFilter));
  };
  return filterProd;
};
