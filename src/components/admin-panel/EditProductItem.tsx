import { FC, useState, useEffect, useRef } from "react";
import { CARE } from "../../data/care";
import Button from "../UI/Button";
import classes from "./EditProductItem.module.css";
import { IProductItem } from "../Product/IProductItem";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { removeProduct, replaceProduct } from "../../store/products-slice";

const EditProductItem: FC<{ item: IProductItem; id?: number }> = ({
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
  const [care, setCare] = useState<any>(item.care);

  const [sizeType, setSizeType] = useState<any>(item.sizeType);

  const [init, setInit] = useState(false);

  useEffect(() => {
    setBarcode(item.barcode);
    setBrand(item.brand);
    setDescription(item.description);
    setManufacturer(item.manufacturer);
    setPrice(item.price);
    setSize(item.size);
    setTitle(item.title);
    setUrl(item.url);
    setCare(item.care);
    setSizeType(item.sizeType);
  }, [item]);

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
      sizeType,
      title,
      url,
      care,
    };
    console.log(replacement);
    dispatch(replaceProduct({ replacement, id }));
  }, [
    barcode,
    brand,
    description,
    manufacturer,
    price,
    size,
    sizeType,
    title,
    url,
    care,
  ]);

  useEffect(() => {
    setInit(true);
  }, []);

  let careItemClasses;

  const handleAddCare = (careItem: string) => {
    careItem = careItem.toLocaleLowerCase();
    for (let i = 0; i < item.care.length; i++) {
      if (item.care[i] === careItem) {
        setCare([...care].filter((i) => i !== careItem));
        careItemClasses = classes.selected;
        return;
      }
      setCare([...care, careItem]);
      console.log(care);
    }
  };

  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={item.url} alt='' className={classes.img} />
        <div className={classes.actions}>
          <Button
            variant='remove'
            onClick={() => {
              console.log(id);
              dispatch(removeProduct(item.barcode));
            }}
          />
        </div>
      </div>
      <div className={classes.content}>
        <label>
          Штрихкод:
          <input
            type='number'
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
          Тип размера:
          <select
            onChange={(e) => setSizeType(e.target.value)}
            value={sizeType}>
            <option value='weight'>Вес</option>
            <option value='value'>Объем</option>
          </select>
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
        <div className={classes.care}>
          {CARE.map((i) => (
            <p
              className={classes["care-item"]}
              onClick={handleAddCare.bind(null, i.heading)}>
              {i.heading}
              <span
                className={
                  care.includes(i.heading.toLocaleLowerCase())
                    ? classes.selected
                    : ""
                }
              />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditProductItem;
