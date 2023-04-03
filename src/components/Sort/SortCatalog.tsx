import classes from "./SortCatalog.module.css";
import { useEffect } from "react";
import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { sortProds, setOrderType, setOrder } from "../../store/products-slice";

const SortCatalog: FC = () => {
  const { order, type } = useAppSelector((state) => state.products.order);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(sortProds());
  }, [type, order, dispatch]);

  return (
    <form className={classes.form}>
      <label className={classes.label}>
        <span className={classes.dropdown}>Сортировать по:</span>
        <select
          value={type}
          onChange={(e) =>
            dispatch(setOrderType({ type: e.target.value, order: order }))
          }
          className={classes.select}>
          <option value='price'>Цена</option>
          <option value='name'>Название</option>
        </select>
        <span className={classes.arrow} />
      </label>
      <label className={classes.label}>
        <select
          value={order}
          onChange={(e) =>
            dispatch(setOrder({ type: type, order: e.target.value }))
          }
          className={classes.select}>
          <option value='increase'>Возрастание</option>
          <option value='decrease'>Убывание</option>
        </select>
        <span className={classes.arrow} />
      </label>
    </form>
  );
};

export default SortCatalog;
