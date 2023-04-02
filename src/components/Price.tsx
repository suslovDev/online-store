import classes from "./Price.module.css";
import { IPrice } from "./IPrice";
import { FC } from "react";

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
    <span className={finalClass}>{`${value} ${currencyMap.get(
      currency
    )}`}</span>
  );
};

export default Price;
