import classes from "./ProductList.module.css";
import { FC } from "react";
import { IProductList } from "./IProductList";
import ProductItem from "../Product/ProductItem";

const ProductList: FC<IProductList> = ({ products }) => {
  return (
    <div className={classes.list}>
      {products.map((product) => {
        return <ProductItem item={product} key={product.barcode} />;
      })}
    </div>
  );
};

export default ProductList;
