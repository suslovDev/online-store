import classes from "./Checkboxes.module.css";
import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filterByManufact } from "../../store/products-slice";
import { TItem, getPair } from "../../helpers/get-pair";

const Checkboxes: FC = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.products.filter);
  //const { originProducts } = useAppSelector((state) => state.products);
  const { manufacturer } = useAppSelector((state) => state.products.filter);
  const [showAll, setShowAll] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState<TItem[]>();

  let listAll = show ? show : getPair(products);

  const listShow = listAll.slice(0, 4);

  let showList = showAll ? listAll : listShow;

  const predicate = (arr: string[], str: string) => {
    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) return true;
    }
    return false;
  };

  const handleCheck = (manufact: string) => {
    dispatch(filterByManufact(manufact));
  };

  let list: TItem[] = [];
/*   const handleClick = () => {
    for (let i = 0; i < listAll.length; i++) {
      if (listAll[i].manufacturer.includes(inputValue)) {
        list.push(listAll[i]);
      }
    }
    setShow([...list]);
  }; */

  return (
    <div>
      <div className={classes.chkboxes}>
        {showList.map((item) => {
          return (
            <label key={item.manufacturer}>
              <input
                checked={predicate(manufacturer, item.manufacturer)}
                type='checkbox'
                onClick={handleCheck.bind(null, item.manufacturer)}
              />
              {`${item.manufacturer}(${item.count})`}
            </label>
          );
        })}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className={classes["show-btn"]}>
        {!showAll ? "Показать все" : "Свернуть"}
        <img
          src='./drop-img.png'
          alt=''
          width={7}
          className={`${classes.btn} ${showAll ? classes.opened : ""}`}
        />
      </button>
    </div>
  );
};

export default Checkboxes;
