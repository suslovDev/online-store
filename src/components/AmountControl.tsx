import { FC, useState } from "react";
import classes from "./AmountControl.module.css";
import { IAmountControl } from "./IAmountControl";

const AmountControl: FC<IAmountControl> = ({ onPlus, onMinus, startWith }) => {
  const [amount, setAmount] = useState<number>(startWith);


  const handlePlus = (): void => {
    setAmount((prev) => (prev += 1));
    onPlus();
  };
  const handleMinus = (): void => {
    if (amount < 1) {
      setAmount(0);
      return;
    }
    setAmount((prev) => (prev -= 1));
    onMinus();
  };
  return (
    <div className={classes.amount}>
      <button onClick={handleMinus}>-</button>
      <span>{amount}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default AmountControl;
