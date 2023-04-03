import { FC } from "react";
import { IHorisontalGap } from "./IHorisontalGap";

const HorisontalGap: FC<IHorisontalGap> = ({ gap }) => {
  return <div style={{ marginBottom: `${gap}` }} />;
};

export default HorisontalGap;
