import classes from "./Container.module.css";
import { IContainer } from "./IContainer";
import { FC } from "react";

const Container: FC<IContainer> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
