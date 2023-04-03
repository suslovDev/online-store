import classes from "./ProductItem.module.css";
import { IProductItem } from "./IProductItem";
import { FC } from "react";
import ProductFeautere from "./ProductFeature";
import Price from "../UI/Price";
import Button from "../UI/Button";
import ProductSize from "./ProductSize";
import { Navigate, useNavigate } from "react-router-dom";

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

  return (
    <div className={classes.product}>
      <div className={classes.header} onClick={() => navigate(`${barcode}`)}>
        <img src={url} alt='' className={classes.img} />
      </div>
      <div className={classes.content}>
        <ProductSize type={sizeType} value={size} />
        <h3 className={classes.title}>
          <span className={classes.accent}>{title} </span>
          {description}
        </h3>

        <ProductFeautere name='Штрихкод' value={barcode} />
        <ProductFeautere name='Производитель' value={manufacturer} />
        <ProductFeautere name='Бренд' value={brand} />
      </div>
      <div className={classes.footer}>
        <Price currency='KZT' value={price} />
        <Button onClick={() => {}} variant='buy'>
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
