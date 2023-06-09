import { FC } from "react";
import classes from "./CartItem.module.css";
import AmountControl from "../../UI/amount-control/AmountControl";
import Button from "../../UI/button/Button";
import Price from "../../UI/price/Price";
import ProductSize from "../../Product/product-size/ProductSize";
import { IProductItem } from "../../Product/product-item/IProductItem";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  plusToCart,
  minusFromCart,
  removeFromCart,
} from "../../../store/cart-slice";

const CartItem: FC<{ item: IProductItem }> = ({ item }) => {
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  let alreadyInCart = cart.find((i) => i.barcode === item.barcode);

  let initialAmount = alreadyInCart ? alreadyInCart.quantity : 1;

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
          <div className={classes.wrap} data-testid='remove'>
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
