import { FC } from "react";
import classes from "./ProductList.module.css";
import { useAppDispatch } from "../../hooks/hooks";
import { IProductList } from "./IProductList";
import ProductItem from "../Product/product-item/ProductItem";
import { plusToCart } from "../../store/cart-slice";

const ProductList: FC<IProductList> = ({ products }) => {
  //const dispatch = useAppDispatch();
  return (
    <div data-testid='list' className={classes.list}>
      {products.map((product) => {
        return (
          <ProductItem
            item={product}
           // onBtnClick={dispatch(plusToCart({ product: product, quantity: 1 }))}
            key={product.barcode}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
