import classes from "./FilterAside.module.css";
import { FC } from "react";
import SearchForm from "./SearchForm";
import CareList from "./CareList";
import { CARE } from "../data/care";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setCurrent } from "../store/ui-slice";

import Checkboxes from "./Checkboxes";
import PriceFilter from "./PriceFilter";
import { filterByCare } from "../store/products-slice";

const FilterAside: FC = () => {
  const selectedCare = useAppSelector((state) => state.ui.currentCare);

  const dispatch = useAppDispatch();

  const handleSelect = (id: number) => {
    const careType = CARE.find((item) => item.id === id)?.heading.toLowerCase();
    if (!careType) return;
    dispatch(
      filterByCare({
        value: careType,
      })
    );
    dispatch(setCurrent(id));
  };

  return (
    <div className={classes.filter}>
      <h3 className={classes.header}>Подбор по параметрам</h3>
      <PriceFilter />
      <div className={classes.params}>
        <h4>Производитель</h4>
        <SearchForm
          placeholder='Поиск...'
          /* onSubmit={(val) => dispatch(filterByManufact(val))} */
        />
        <Checkboxes />
        {CARE.map((item) => {
          return (
            <CareList id={item.id} selected={selectedCare} title={item.heading}>
              {item.links.map((link) => {
                return (
                  <li onClick={handleSelect.bind(null, item.id)}>{link}</li>
                );
              })}
            </CareList>
          );
        })}
      </div>
    </div>
  );
};

export default FilterAside;
