import { FC, useState, useEffect } from "react";
import classes from "./CareFilterTop.module.css";
import { ICareFilterTop } from "./ICareFilterTop";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setCurrent } from "../../store/ui-slice";
import { filterProducts, setFilter } from "../../store/products-slice";

const CareFilterTop: FC<ICareFilterTop> = ({ selected, list, onSelect }) => {
  const [clickedId, setClickedId] = useState<number>(0);
  const filter = useAppSelector((state) => state.products.filter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter]);

  const handleClick = (id: number) => {
    if (id === clickedId) {
      setClickedId(0);
      dispatch(setFilter({ ...filter, care: "" }));
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
