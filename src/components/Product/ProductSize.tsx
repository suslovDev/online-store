import classes from "./ProductSize.module.css";
import { IProductSize } from "./IProductSize";
import { FC } from "react";

const ProductSize: FC<IProductSize> = ({ type, value }) => {
  const typeMap = new Map([
    ["weight", "гр."],
    ["value", "мл."],
  ]);
  return (
    <div className={classes.wrap}>
      <img src={`/${type}-img.png`} alt='' className={classes.img} />
      <span className={classes.value}>{`${value} ${typeMap.get(type)}`}</span>
    </div>
  );
};

export default ProductSize;
