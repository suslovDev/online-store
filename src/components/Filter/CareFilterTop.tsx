import classes from "./CareFilterTop.module.css";
import { FC, useState } from "react";
import { ICareFilterTop } from "./ICareFilterTop";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filterByCare } from "../../store/products-slice";
import { setCurrent } from "../../store/ui-slice";

const CareFilterTop: FC<ICareFilterTop> = ({ selected, list, onSelect }) => {
  const { currentCare } = useAppSelector((state) => state.ui);
  const [clickedId, setClickedId] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    if (id === clickedId) {
      setClickedId(0);
      dispatch(filterByCare({ value: "" }));
      dispatch(setCurrent(0));
    } else {
      setClickedId(id);
      onSelect(id);
    }
  };
  return (
    <ul className={classes.care}>
      {list.map((item) => {
        return (
          <li
            key={item.id}
            onClick={handleClick.bind(null, item.id)}
            className={`${item.id === selected ? classes.selected : ""}`}>
            {item.heading}
          </li>
        );
      })}
    </ul>
  );
};

export default CareFilterTop;
