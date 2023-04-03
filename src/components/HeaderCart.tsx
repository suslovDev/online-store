import classes from "./HeaderCart.module.css";
import { IHeaderCart } from "./IHeaderCart";
import { FC, useEffect, useState } from "react";
import Price from "./Price";
import { useNavigate } from "react-router-dom";

const HeaderCart: FC<IHeaderCart> = ({ items, total }) => {
  const navigate = useNavigate();
  const [isHighlighted, setIsHighlighted] = useState(false);
  const badgeClasses = `${classes.badge} ${isHighlighted ? classes.beat : ""}`;
  useEffect(() => {
    if (items.length === 0) return;
    setIsHighlighted(true);
    let timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button
      className={classes.button}
      onClick={() => {
        navigate("cart");
      }}>
      <div className={classes.icon}>
        <div>
          <img src='./cart-img.png' alt='' />
        </div>
        <span className={badgeClasses}>{items.length}</span>
      </div>
      <div className={classes.texts}>
        <span className={classes.title}>Корзина</span>
        <Price currency='KZT' value={total} type='small' />
      </div>
    </button>
  );
};

export default HeaderCart;
