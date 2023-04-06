import { FC, useState } from "react";
import classes from "./CareFilterTop.module.css";
import { ICareFilterTop } from "./ICareFilterTop";
import { useAppDispatch } from "../../../hooks/hooks";
import { setCurrent } from "../../../store/ui-slice";
import { useFilter } from "../../../hooks/use-filter";

const CareFilterTop: FC<ICareFilterTop> = ({ selected, list, onSelect }) => {
  const [clickedId, setClickedId] = useState<number>(0);

  const filterByCare = useFilter();
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    if (id === clickedId) {
      setClickedId(0);
      filterByCare({ care: "" });
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
