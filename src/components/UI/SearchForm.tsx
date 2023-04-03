import Button from "./Button";
import { ISearchForm } from "./ISearchForm";
import classes from "./SearchForm.module.css";
import { FC, useRef } from "react";

const SearchForm: FC<ISearchForm> = ({ onSubmit, placeholder }) => {
  const inputRef = useRef(null);

  const handleSubmit = (curr: any) => {
    if (!onSubmit) return;
    onSubmit(curr.value);
  };
  return (
    <div className={classes.form}>
      <div className={classes.wrap}>
        <input
          className={classes.input}
          type='text'
          placeholder={placeholder}
          ref={inputRef}
        />
      </div>
      <div className={classes.button}>
        <Button
          variant='search'
          onClick={handleSubmit.bind(null, inputRef.current)}
        />
      </div>
    </div>
  );
};

export default SearchForm;
