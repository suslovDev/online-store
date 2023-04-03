import classes from "./Pagination.module.css";
import { FC, useState, useEffect } from "react";
import { IPagination } from "./IPagination";

const Pagination: FC<IPagination> = ({ products, perPage, onShowSlice }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / perPage); i++) {
    pageNumbers.push(i);
  }

  const lastProdIndex = currentPage * perPage;
  const firstProdIndex = lastProdIndex - perPage;

  const currentProducts = products.slice(firstProdIndex, lastProdIndex);

  const handlePaginate = (number: number) => {
    setCurrentPage(number);
  };

  const handleNext = () => {
    if (currentPage === pageNumbers.length) return;
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    onShowSlice(currentProducts);
  }, [currentPage, products]);

  return (
    <div className={classes.pagination}>
      <button onClick={handlePrev} className={classes.prev}></button>
      {pageNumbers.map((number) => {
        return (
          <button
            key={Math.random().toString(16)}
            onClick={() => handlePaginate(number)}
            className={`${number === currentPage ? classes.current : ""}`}>
            {number}
          </button>
        );
      })}
      <button onClick={handleNext} className={classes.next}></button>
    </div>
  );
};

export default Pagination;
