import { FC } from "react";
import classes from "./CareList.module.css";
import { ICarelist } from "./ICareList";

const CareList: FC<ICarelist> = ({ id, selected, title, children }) => {
  const headingClasses = `${classes.heading} ${
    id === selected ? classes.selected : ""
  }`;

  return (
    <div className={classes.care}>
      <h3 className={headingClasses}>{title}</h3>
      <ul className={classes.list}>{children}</ul>
    </div>
  );
};

export default CareList;
