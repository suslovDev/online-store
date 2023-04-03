import { FC } from "react";
import classes from "./ThanksOrderModal.module.css";
import { IThankOrder } from "./IThanksOrder";

const ThanksOrderModal: FC<IThankOrder> = ({ onClick }) => {
  return (
    <div className={classes.wrap}>
      <div className={classes.overlay} />
      <div className={classes.modal}>
        <div className={classes.content}>
          <button onClick={onClick}>
            <img src='/close-img.png' alt='' />
          </button>
          <div className={classes.done}></div>
          <h2>СПАСИБО ЗА ЗАКАЗ</h2>
          <p>Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
      </div>
    </div>
  );
};

export default ThanksOrderModal;
