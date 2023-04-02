import { FC } from "react";

import Button from "./Button";
import classes from "./EditProductItem.module.css";
import { IProductItem } from "./IProductItem";

import ProductSize from "./ProductSize";

import { useAppDispatch, useAppSelector } from "../hooks";

const EditProductItem: FC<{ item: IProductItem }> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={item.url} alt='' className={classes.img} />

        <div className={classes.actions}>
          <Button variant='remove' onClick={() => {}} />
        </div>
      </div>

      <div className={classes.content}>
        <label>
          Штрихкод:
          <input type='text' value={item.barcode} />
        </label>
        <label>
          Бренд:
          <input type='text' value={item.brand} />
        </label>
        <label>
          Описание:
          <input type='text' value={item.description} />
        </label>
        <label>
          Произ-ль:
          <input type='text' value={item.manufacturer} />
        </label>
        <label>
          Цена:
          <input type='text' value={item.price} />
        </label>
        <label>
          Размер:
          <input type='text' value={item.size} />
        </label>
        <label>
          Тип раз-ра:
          <input type='text' value={item.sizeType} />
        </label>
        <label>
          Название:
          <input type='text' value={item.title} />
        </label>
        <label>
          Url:
          <input type='text' value={item.url} />
        </label>
      </div>
    </div>
  );
};

export default EditProductItem;
