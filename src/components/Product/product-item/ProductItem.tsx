import { FC } from "react";
import classes from "./ProductItem.module.css";
import { IProductItem } from "./IProductItem";
import { useNavigate } from "react-router-dom";
import ProductFeautere from "../product-feature/ProductFeature";
import ProductSize from "../product-size/ProductSize";
import Button from "../../UI/button/Button";
import Price from "../../UI/price/Price";

const ProductItem: FC<{ item: IProductItem; onBtnClick?: any }> = ({
  item,
  onBtnClick,
}) => {
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
      <div className={classes.header}>
        <img src={url} alt='' className={classes.img} />
      </div>
      <div className={classes.content}>
        <ProductSize type={sizeType} value={size} />
        <h3 className={classes.title} onClick={() => navigate(`${barcode}`)}>
          <span date-testid='title' className={classes.accent}>
            {title}
          </span>
          {description}
        </h3>
        <ProductFeautere name='Штрихкод' value={barcode} />
        <ProductFeautere name='Производитель' value={manufacturer} />
        <ProductFeautere name='Бренд' value={brand} />
      </div>
      <div className={classes.footer}>
        <Price currency='KZT' value={price} />
        <Button onClick={onBtnClick} variant='buy'>
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
