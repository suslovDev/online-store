import { FC } from "react";
import classes from "./ProductItem.module.css";
import { IProductItem } from "./IProductItem";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { plusToCart } from "../../store/cart-slice";
import ProductFeautere from "./ProductFeature";
import ProductSize from "./ProductSize";
import Button from "../UI/Button";
import Price from "../UI/Price";

const ProductItem: FC<{ item: IProductItem }> = ({ item }) => {
  let {
    url,
    title,
    sizeType,
    size,
    barcode,
    manufacturer,
    brand,
    description,
    price,
  } = item;
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  return (
    <div className={classes.product}>
      <div className={classes.header}>
        <img src={url} alt='' className={classes.img} />
      </div>
      <div className={classes.content}>
        <ProductSize type={sizeType} value={size} />
        <h3 className={classes.title} onClick={() => navigate(`${barcode}`)}>
          <span className={classes.accent}>{title} </span>
          {description}
        </h3>
        <ProductFeautere name='Штрихкод' value={barcode} />
        <ProductFeautere name='Производитель' value={manufacturer} />
        <ProductFeautere name='Бренд' value={brand} />
      </div>
      <div className={classes.footer}>
        <Price currency='KZT' value={price} />
        <Button
          onClick={() => {
            dispatch(plusToCart({ product: item, quantity: 1 }));
          }}
          variant='buy'>
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
