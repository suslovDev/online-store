import { FC } from "react";
import classes from "./CartItem.module.css";
import AmountControl from "../UI/AmountControl";
import Button from "../UI/Button";
import Price from "../UI/Price";
import ProductSize from "../Product/ProductSize";
import { IProductItem } from "../Product/IProductItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  plusToCart,
  minusFromCart,
  removeFromCart,
} from "../../store/cart-slice";

const CartItem: FC<{ item: IProductItem }> = ({ item }) => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  let currentCartItem = cart.find((i) => i.barcode == item.barcode);

  let initialAmount = currentCartItem ? currentCartItem.quantity : 1;

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={item.url} alt='' />
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <ProductSize type={item.sizeType} value={item.size} />
          <p className={classes.title}>{`${item.title} ${item.description}`}</p>
          <p className={classes.description}>{`${item.description}`}</p>
        </div>
        <div className={classes.actions}>
          <div className={classes.wrap}>
            <AmountControl
              startWith={initialAmount}
              onPlus={() => {
                dispatch(plusToCart({ product: item, quantity: 1 }));
              }}
              onMinus={() => {
                dispatch(minusFromCart({ id: item.barcode }));
              }}
            />
          </div>
          <div className={classes.wrap}>
            <Price currency='KZT' value={item.price} type='large' />
          </div>
          <div className={classes.wrap}>
            <Button
              variant='remove'
              onClick={() => dispatch(removeFromCart({ id: item.barcode }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
