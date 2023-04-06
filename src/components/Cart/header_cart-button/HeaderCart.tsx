import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IHeaderCart } from "./IHeaderCart";
import classes from "./HeaderCart.module.css";
import Price from "../../UI/Price";

const HeaderCart: FC<IHeaderCart> = ({ items, total }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const badgeClasses = `${classes.badge} ${isHighlighted ? classes.beat : ""}`;

  const navigate = useNavigate();

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
