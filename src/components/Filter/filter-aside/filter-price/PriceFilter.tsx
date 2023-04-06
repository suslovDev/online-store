import { FC, useState } from "react";
import classes from "./PriceFilter.module.css";
import { useFilter } from "../../../../hooks/use-filter";

const PriceFilter: FC = () => {
  const filterByPrice = useFilter();
  const [from, setFrom] = useState<string | number>(0);
  const [to, setTo] = useState<string | number>(10000);

  const handleBlure = () => {
    filterByPrice({ priceRange: { from, to } });
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
