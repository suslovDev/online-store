import { FC } from "react";
import classes from "./Crumbs.module.css";
import { Link } from "react-router-dom";
import { ICrumbs } from "./ICrumbs";
import VerticalGap from "./HorisontalGap";

const Crumbs: FC<ICrumbs> = ({ params }) => {
  return (
    <>
      <VerticalGap gap='45px' />
      <nav>
        <ul className={classes.crumbs}>
          {params.map((link) => {
            return (
              <li key={link.url}>
                <Link to={`/${link.url}`}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <VerticalGap gap='65px' />
    </>
  );
};

export default Crumbs;
