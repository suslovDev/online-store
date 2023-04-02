import classes from "./ProductFeautere.module.css";
import { IProductFeature } from "./IProductFeature";
import { FC } from "react";

const ProductFeautere: FC<IProductFeature> = ({ name, value }) => {
  return (
    <div className={classes.feature}>
      <span className={classes.name}>{`${name} : `}</span>
      <span className={classes.value}>{value}</span>
    </div>
  );
};

export default ProductFeautere;
