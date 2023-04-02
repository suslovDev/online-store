import classes from "./Accordeon.module.css";
import { IAccordeon } from "./IAccordeaon";
import { FC, useState } from "react";

const Accordeon: FC<IAccordeon> = ({ title, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const accordeonClasses = `${className} ${
    classes.header ? classes.header : ""
  } `;

  return (
    <>
      <button className={classes.accordeon}>
        <div className={accordeonClasses} onClick={handleToggleOpen}>
          {title}
          <img
            src='/drop-img.png'
            alt=''
            width={7}
            className={`${classes.btn} ${isOpen ? classes.opened : ""}`}
          />
        </div>
        {isOpen && <div className={classes.body}>{children}</div>}
      </button>
    </>
  );
};

export default Accordeon;
