import { FC } from "react";
import classes from "./Container.module.css";
import { IContainer } from "./IContainer";

const Container: FC<IContainer> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
