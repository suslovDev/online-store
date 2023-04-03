import classes from "./Checkboxes.module.css";
import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { filterByManufact } from "../store/products-slice";
import { TItem, getPair } from "../helpers/get-pair";

const Checkboxes: FC = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.products.filter);
  const { manufacturer } = useAppSelector((state) => state.products.filter);
  const [showAll, setShowAll] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState<TItem[]>();

  let listAll = show ? show : getPair(products);

  const listShow = listAll.slice(0, 4);

  console.log(listAll);

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

  const handleClick = () => {
    console.log(inputValue);
    const list = [];
    for (let i = 0; i < listAll.length; i++) {
      if (listAll[i].manufacturer.includes(inputValue)) {
        list.push(listAll[i]);
      }
    }
    setShow([...list]);
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div onClick={handleClick}>подтвердить</div>
      <div className={classes.chkboxes}>
        {showList.map((item) => {
          return (
            <label>
              <input
                //checked={manufacturer.includes(item.manufacturer)}
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
        Показать все
        <img
          src='/drop-img.png'
          alt=''
          width={7}
          className={`${classes.btn} ${showAll ? classes.opened : ""}`}
        />
      </button>
    </div>
  );
};

export default Checkboxes;
