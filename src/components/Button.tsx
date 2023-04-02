import { FC } from "react";
import { IButton } from "./IButton";
import classes from "./Button.module.css";

const Button: FC<IButton> = ({ variant, onClick, children }) => {
  return (
    <>
      {variant === "buy" && (
        <button className={classes.button} onClick={onClick}>
          {children}
          <img src='./buy-img.png' width={27} alt='' />
        </button>
      )}
      {variant === "catalog " && (
        <button
          className={`${classes.button} ${classes.standart}`}
          onClick={onClick}>
          {children}
          <img src='./catalog-img.png' width={27} alt='' />
        </button>
      )}
      {variant === "search" && (
        <button
          className={`${classes.button} ${classes.round}`}
          onClick={onClick}>
          {children}
          <img src='./search-img.png' width={18} alt='' />
        </button>
      )}
      {variant === "download" && (
        <button
          className={`${classes.button} ${classes.large}`}
          onClick={onClick}>
          {children}
          <img src='./dwld-img.png' width={27} alt='' />
        </button>
      )}
      {variant === "remove" && (
        <button
          className={`${classes.button} ${classes["round-large"]}`}
          onClick={onClick}>
          {children}
          <img src='./remove-img.png' width={27} alt='' />
        </button>
      )}
    </>
  );
};

export default Button;
