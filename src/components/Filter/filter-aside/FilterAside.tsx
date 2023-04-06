import { FC } from "react";
import classes from "./FilterAside.module.css";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { useFilter } from "../../../hooks/use-filter";
import { setCurrent } from "../../../store/ui-slice";
import { CARE } from "../../../data/care";
import CareList from "../CareList";
import Checkboxes from "./filter-check/Checkboxes";
import PriceFilter from "./filter-price/PriceFilter";
import SearchForm from "../../UI/search/SearchForm";

const FilterAside: FC = () => {
  const selectedCare = useAppSelector((state) => state.ui.currentCare);

  const dispatch = useAppDispatch();
  const filterByCare = useFilter();
  const filterBySubstr = useFilter();

  let careType: string | undefined = "";

  const handleSelect = (id: number) => {
    careType = CARE.find((item) => item.id === id)?.heading.toLowerCase();
    if (!careType) return;
    filterByCare({ care: careType });
    dispatch(setCurrent(id));
  };

  const handleSubmit = (val: string) => {
    filterBySubstr({ substr: val });
  };

  return (
    <div className={classes.filter}>
      <h3 className={classes.header}>Подбор по параметрам</h3>
      <PriceFilter />
      <div className={classes.params}>
        <h4>Производитель</h4>
        <SearchForm placeholder='Поиск...' onSubmit={handleSubmit} />
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
