import { FC, useState } from "react";
import classes from "./Checkboxes.module.css";
import { useAppSelector } from "../../hooks/hooks";
import { useFilter } from "./use-filter";
import { TItem, getPair } from "../../helpers/get-pair";
import Item from "./Item";

const Checkboxes: FC = () => {
  const { products, originProducts } = useAppSelector(
    (state) => state.products
  );
  const { manufacturer } = useAppSelector((state) => state.products.filter);
  const [showAll, setShowAll] = useState(false);
  const [show, setShow] = useState<TItem[]>();

  const filterHasManufact = useFilter();
  const filterNotManufact = useFilter();

  let listAll = getPair(products);

  const listShow = listAll.slice(0, 4);

  let showList = showAll ? listAll : listShow;

  const handleCheck = (manufact: string) => {
    if (manufacturer.includes(manufact)) {
      console.log("уже есть");
      filterHasManufact({
        manufacturer: manufacturer.filter((m) => m !== manufact),
      });
    } else {
      console.log("еще нет");
      filterNotManufact({ manufacturer: [...manufacturer, manufact] });
    }
  };

  return (
    <div>
      <div className={classes.chkboxes}>
        {showList.map((item) => {
          return (
            <Item item={item} onClick={handleCheck} key={item.manufacturer} />
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
