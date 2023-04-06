import { FC, useRef, useState } from "react";
import classes from "./AdminPage.module.css";
import Container from "../components/Layout/Container";
import { useAppDispatch } from "../hooks/hooks";
import { useInit } from "../hooks/use-init";
import { addProduct } from "../store/products-slice";
import Button from "../components/UI/Button";
import Crumbs from "../components/Layout/Crumbs";
import EditProductItem from "../components/admin-panel/EditProductItem";
import HorisontalGap from "../components/Layout/HorisontalGap";

const params = [
  { url: "", name: "Главная" },
  { url: "admin", name: "Админка" },
];

const careList = [
  "Уход за телом",
  "Уход за руками",
  "Уход за ногами",
  " Уход за лицом",
  "Уход за волосами",
  "Средства для загара",
  "Средства для бритья",
  "Подарочные наборы",
  "Гигиеническая продукция",
  "Гигиена полости рта",
  "Бумажная продукция",
];

export const AdminPage: FC = () => {
  const [care, setCare] = useState<any>([]);
  const products = useInit();
  const dispatch = useAppDispatch();

  const urlRef = useRef<HTMLInputElement | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const sizeTypeRef = useRef<HTMLSelectElement | null>(null);
  const sizeRef = useRef<HTMLInputElement | null>(null);
  const barcodeRef = useRef<HTMLInputElement | null>(null);
  const manufactRef = useRef<HTMLInputElement | null>(null);
  const brandRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);

  const createProduct = () => {
    const product = {
      url: urlRef.current?.value,
      title: titleRef.current?.value,
      sizeType: sizeTypeRef.current?.value,
      size: sizeRef.current?.value ? +sizeRef.current?.value : null,
      barcode: barcodeRef.current?.value ? +barcodeRef.current?.value : null,
      manufacturer: manufactRef.current?.value,
      brand: brandRef.current?.value,
      description: descriptionRef.current?.value,
      price: priceRef.current?.value ? +priceRef.current?.value : null,
      care: care,
      id: Math.random().toString(16),
    };
    return product;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    let product = createProduct();
    dispatch(addProduct(product));
    setCare([]);
  };

  return (
    <Container>
      <Crumbs params={params} />
      <h2 className={classes.heading}>Добавление товара:</h2>
      <HorisontalGap gap='50px' />
      <form onSubmit={handleSubmit}>
        <label>url:</label>
        <input type='text' placeholder='url изображения' ref={urlRef} />
        <label>Название:</label>
        <input type='text' placeholder='название товара' ref={titleRef} />
        <label className={classes.label}>
          Тип размера:
          <select ref={sizeTypeRef}>
            <option value='weight'>Вес</option>
            <option value='value'>Объем</option>
          </select>
        </label>
        <label>Размер:</label>
        <input type='number' min={1} placeholder='размер' ref={sizeRef} />
        <label>Штрихкод:</label>
        <input type='number' placeholder='штрихкод' ref={barcodeRef} />
        <label>Производитель:</label>
        <input type='text' placeholder='производитель' ref={manufactRef} />
        <label>Бренд:</label>
        <input type='text' placeholder='бренд' ref={brandRef} />
        <label>Описание:</label>
        <textarea
          name='description'
          placeholder='описание товара'
          ref={descriptionRef}></textarea>
        <label>Цена:</label>
        <input type='number' placeholder='цена' ref={priceRef} />
        Тип ухода:
        <div className={classes.care}>
          {careList.map((item) => (
            <label onClick={() => setCare([...care, item.toLowerCase()])}>
              <input type='checkbox' />
              {item}
            </label>
          ))}
        </div>
        <Button type='submit' variant='standart'>
          Добавить товар
        </Button>
      </form>
      <HorisontalGap gap='50px' />
      <h2 className={classes.heading}>Редактирование товаров:</h2>
      <HorisontalGap gap='50px' />
      <div className={classes.wrap}>
        {products.map((prod) => (
          <EditProductItem item={prod} id={prod.id} />
        ))}
      </div>
      <HorisontalGap gap='50px' />
    </Container>
  );
};
