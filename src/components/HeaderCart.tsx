import classes from "./HeaderCart.module.css";
import { IHeaderCart } from "./IHeaderCart";
import { FC } from "react";
import Price from "./Price";

const HeaderCart: FC<IHeaderCart> = ({ items, total }) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.images}>
        <div>
          <img src='./cart-img.png' alt='' />
        </div>
        <span className={classes.total}>{items.length}</span>
      </div>
      <div className={classes.texts}>
        <span className={classes.title}>Корзина</span>
        <Price currency='KZT' value={total} type='small' />
      </div>
    </div>
  );
};

export default HeaderCart;
