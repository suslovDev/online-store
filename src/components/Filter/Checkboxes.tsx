import classes from "./Checkboxes.module.css";
import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filterProducts, setFilter } from "../../store/products-slice";
import { TItem, getPair } from "../../helpers/get-pair";
import Item from "./Item";

const Checkboxes: FC = () => {
  const dispatch = useAppDispatch();

  const { products, originProducts } = useAppSelector(
    (state) => state.products
  );
  const { manufacturer } = useAppSelector((state) => state.products.filter);
  const filter = useAppSelector((state) => state.products.filter);
  const [showAll, setShowAll] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState<TItem[]>();

  useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter]);

  let listAll = getPair(products);

  const listShow = listAll.slice(0, 4);

  let showList = showAll ? listAll : listShow;

  const predicate = (arr: string[], str: string) => {
    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) return true;
    }
    return false;
  };

  const handleCheck = (manufact: any) => {
    if (manufacturer.includes(manufact)) {
      console.log("уже есть");
      dispatch(
        setFilter({
          ...filter,
          manufacturer: manufacturer.filter((m) => m !== manufact),
        })
      );
    } else {
      console.log("еще нет");
      dispatch(
        setFilter({ ...filter, manufacturer: [...manufacturer, manufact] })
      );
    }
  };

  return (
    <div>
      <div className={classes.chkboxes}>
        {showList.map((item) => {
          return (
            <Item item={item} onClick={handleCheck} key={item.manufacturer} />
            /*       <label key={item.manufacturer}>
              <input
                checked={predicate(manufacturer, item.manufacturer)}
                type='checkbox'
                onClick={handleCheck.bind(null, item.manufacturer)}
              />
              {`${item.manufacturer}(${item.count})`}
            </label> */
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
