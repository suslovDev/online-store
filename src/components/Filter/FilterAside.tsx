import classes from "./FilterAside.module.css";
import { FC, useEffect } from "react";
import SearchForm from "../UI/SearchForm";
import CareList from "./CareList";
import { CARE } from "../../data/care";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setCurrent } from "../../store/ui-slice";

import Checkboxes from "./Checkboxes";
import PriceFilter from "./PriceFilter";
import { filterProducts, setFilter } from "../../store/products-slice";

import { useFilter } from "./use-filter";

const FilterAside: FC = () => {
  const selectedCare = useAppSelector((state) => state.ui.currentCare);
  //const filter = useAppSelector((state) => state.products.filter);

  const dispatch = useAppDispatch();

  /*   useEffect(() => {
    dispatch(filterProducts(filter));
  }, [filter]); */
  let careType: string | undefined = "";

  const filterByCare = useFilter();
  const filterBySubstr = useFilter();

  const handleSelect = (id: number) => {
    careType = CARE.find((item) => item.id === id)?.heading.toLowerCase();
    if (!careType) return;
    // dispatch(setFilter({ ...filter, care: careType }));
    filterByCare({ care: careType });
    dispatch(setCurrent(id));
  };

  const handleSubmit = (val: string) => {
    filterBySubstr({substr: val})
  }

  return (
    <div className={classes.filter}>
      <h3 className={classes.header}>Подбор по параметрам</h3>
      <PriceFilter />
      <div className={classes.params}>
        <h4>Производитель</h4>
        <SearchForm
          placeholder='Поиск...'
          onSubmit={handleSubmit}
        />
        <Checkboxes />
        {CARE.map((item) => {
          return (
            <CareList
              id={item.id}
              selected={selectedCare}
              title={item.heading}
              key={Math.random().toString(16)}>
              {item.links.map((link) => {
                return (
                  <li
                    key={Math.random().toString(16)}
                    onClick={handleSelect.bind(null, item.id)}>
                    {link}
                  </li>
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
