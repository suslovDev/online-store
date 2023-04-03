import classes from "./PriceFilter.module.css";
import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { filterByPrace } from "../../store/products-slice";

const PriceFilter: FC = () => {
  const [from, setFrom] = useState<any>(0);
  const [to, setTo] = useState<any>(10000);

  const dispatch = useAppDispatch();

  const handleBlure = () => {
    dispatch(filterByPrace({ from, to }));
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
