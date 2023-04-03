import { FC, useState, useEffect } from "react";

import Button from "./Button";
import classes from "./EditProductItem.module.css";
import { IProductItem } from "./IProductItem";

import ProductSize from "./ProductSize";

import { useAppDispatch, useAppSelector } from "../hooks";
import { removeProduct, replaceProduct } from "../store/products-slice";

const EditProductItem: FC<{ item: IProductItem; id: number }> = ({
  item,
  id,
}) => {
  const dispatch = useAppDispatch();

  const [barcode, setBarcode] = useState(item.barcode);
  const [brand, setBrand] = useState(item.brand);
  const [description, setDescription] = useState(item.description);
  const [manufacturer, setManufacturer] = useState(item.manufacturer);
  const [price, setPrice] = useState(item.price);
  const [size, setSize] = useState(item.size);
  const [title, setTitle] = useState(item.title);
  const [url, setUrl] = useState(item.url);

  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) return;
    const replacement = {
      ...item,
      barcode,
      brand,
      description,
      manufacturer,
      price,
      size,
      title,
      url,
    };
    console.log(replacement);
    dispatch(replaceProduct(replacement));
  }, [barcode, brand, description, manufacturer, price, size, title, url]);

  useEffect(() => {
    setInit(true);
  }, []);
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={item.url} alt='' className={classes.img} />

        <div className={classes.actions}>
          <Button
            variant='remove'
            onClick={() => {
              console.log(id);
             dispatch(removeProduct(id));
            }}
          />
        </div>
      </div>

      <div className={classes.content}>
        <label>
          Штрихкод:
          <input
            type='text'
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
        </label>
        <label>
          Бренд:
          <input
            type='text'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </label>
        <label>
          Описание:
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Произ-ль:
          <input
            type='text'
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </label>
        <label>
          Цена:
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </label>
        <label>
          Размер:
          <input
            type='number'
            value={size}
            onChange={(e) => setSize(+e.target.value)}
          />
        </label>
        <label>
          Название:
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Url:
          <input
            type='text'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default EditProductItem;
