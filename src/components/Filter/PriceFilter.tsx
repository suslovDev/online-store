import classes from "./PriceFilter.module.css";
import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filterProducts, setFilter } from "../../store/products-slice";

import { useFilter } from "./use-filter";

const PriceFilter: FC = () => {
  const [from, setFrom] = useState<any>(0);
  const [to, setTo] = useState<any>(10000);

  /* const filter = useAppSelector((state) => state.products.filter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter]);
 */

  const filterByPrice  = useFilter();

  const handleBlure = () => {
    //dispatch(setFilter({ ...filter, priceRange: { from, to } }));
    filterByPrice({priceRange: { from, to }});
  };
  return (
    <>
      <div className={classes.price}>
        <span>Цена</span>
        <span>Р</span>
      </div>
      <div className={classes.range}>
        <input
          type='number'
          value={from}
          onBlur={handleBlure}
          onChange={(e) => setFrom(e.target.value)}
        />
        -
        <input
          type='number'
          value={to}
          onBlur={handleBlure}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
    </>
  );
};

export default PriceFilter;
