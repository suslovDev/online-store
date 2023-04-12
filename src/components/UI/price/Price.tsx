import { FC } from "react";
import classes from "./Price.module.css";
import { IPrice } from "./IPrice";

const currencyMap = new Map([
  ["KZT", "₸"],
  ["RUB", "₽"],
]);

const Price: FC<IPrice> = ({ value, currency, type }) => {
  let finalClass = `${
    type === "large"
      ? classes.large
      : type === "small"
      ? classes.small
      : classes.standart
  }`;

  return (
    <span data-testid="price" className={finalClass}>{`${value} ${currencyMap.get(
      currency
    )}`}</span>
  );
};

export default Price;
