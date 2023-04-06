import { FC, useState } from "react";
import classes from "./CartPage.module.css";
import { clearCart } from "../store/cart-slice";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import Button from "../components/UI/Button";
import CartItem from "../components/Cart/cart-item/CartItem";
import Container from "../components/Layout/Container/Container";
import Crumbs from "../components/Layout/Crumbs/Crumbs";
import HorisontalGap from "../components/Layout/HorisontalGap/HorisontalGap";
import ThanksOrderModal from "../components/Cart/modal/ThanksOrderModal";
import Price from "../components/UI/Price";

const params = [
  { url: "", name: "Главная" },
  { url: "cart", name: "Корзина" },
];

export const CartPage: FC = () => {
  const { cart, total } = useAppSelector((state) => state.cart);
  const [isOpen, setIsopen] = useState(false);

  const dispatch = useAppDispatch();

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
