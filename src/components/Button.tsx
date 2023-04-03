import { FC } from "react";
import { IButton } from "./IButton";
import classes from "./Button.module.css";

const Button: FC<IButton> = ({ variant, type, onClick, children }) => {
  return (
    <>
      {variant === "standart" && (
        <button
          type={type}
          className={`${classes.button} ${classes.large}`}
          onClick={onClick}>
          {children}
        </button>
      )}
      {variant === "buy" && (
        <button type={type} className={classes.button} onClick={onClick}>
          {children}
          <img src='./buy-img.png' width={27} alt='' />
        </button>
      )}
      {variant === "buy-large" && (
        <button
          type={type}
          className={`${classes.button} ${classes.large}`}
          onClick={onClick}>
          {children}
          <img src='./buy-img.png' width={27} alt='' />
        </button>
      )}
      {variant === "catalog " && (
        <button
          type={type}
          className={`${classes.button} ${classes.standart}`}
          onClick={onClick}>
          {children}
          <img src='./catalog-img.png' width={15} alt='' />
        </button>
      )}
      {variant === "search" && (
        <button
          type={type}
          className={`${classes.button} ${classes.round}`}
          onClick={onClick}>
          {children}
          <img src='./search-img.png' width={18} alt='' />
        </button>
      )}
      {variant === "download" && (
        <button
          type={type}
          className={`${classes.button} ${classes.large}`}
          onClick={onClick}>
          {children}
          <img src='./dwld-img.png' width={17} alt='' />
        </button>
      )}
      {variant === "remove" && (
        <button
          type={type}
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
