import { FC, useState } from "react";
import Button from "../components/UI/Button";
import CartItem from "../components/Cart/CartItem";
import Container from "../components/Layout/Container";
import Price from "../components/UI/Price";
import HorisontalGap from "../components/Layout/HorisontalGap";
import classes from "./CartPage.module.css";

import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import Crumbs from "../components/Layout/Crumbs";
import ThanksOrderModal from "../components/Cart/ThanksOrderModal";
import { clearCart } from "../store/cart-slice";

export const CartPage: FC = () => {
  const { cart, total } = useAppSelector((state) => state.cart);
  const [isOpen, setIsopen] = useState(false);

  const dispatch = useAppDispatch();

  const params = [
    { url: "", name: "Главная" },
    { url: "cart", name: "Корзина" },
  ];
  const totalValue = total.toFixed(2);
  const handleOrderDone = () => {
    setIsopen(false);
    dispatch(clearCart());
  };

  return (
    <Container>
      {isOpen && <ThanksOrderModal onClick={handleOrderDone} />}
      <Crumbs params={params} />
      <h2 className={classes.heading}>{`Корзина ${
        cart.length ? "" : "пуста!"
      }`}</h2>
      <HorisontalGap gap='50px' />
      <ul>
        {cart.map((item) => (
          <li>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
      {cart.length !== 0 && (
        <div className={classes.checkout}>
          <Button variant='standart' onClick={() => setIsopen(true)}>
            Оформить заказ
          </Button>
          <Price currency='KZT' type='large' value={+totalValue} />
        </div>
      )}
    </Container>
  );
};