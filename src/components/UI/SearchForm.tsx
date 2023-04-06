import { FC, useRef } from "react";
import classes from "./SearchForm.module.css";
import { ISearchForm } from "./ISearchForm";
import Button from "./Button";

const SearchForm: FC<ISearchForm> = ({ onSubmit, placeholder }) => {
  const inputRef = useRef(null);

  const handleSubmit = (curr: HTMLInputElement) => {
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
          onClick={handleSubmit.bind(null, inputRef.current as any)}
        />
      </div>
    </div>
  );
};

export default SearchForm;
