import Button from "./components/Button";
import HeaderCart from "./components/HeaderCart";
import { IProductItem } from "./components/IProductItem";
import ProductItem from "./components/ProductItem";

const DUMMY_ITEM: IProductItem = {
  url: "prod_1.png",
  title: "Товар номер один",
  sizeType: "weight",
  size: 190,
  barcode: 123456789,
  manufacturer: "ManDan",
  brand: "Brand",
  description: "Это описание первого ттовара",
  price: 48.76,
};

const ITEMS: IProductItem[] = [
  {
    url: "prod_1.png",
    title: "Товар номер один",
    sizeType: "value",
    size: 190,
    barcode: 123456789,
    manufacturer: "ManDan",
    brand: "Brand",
    description: "Это описание первого ттовара",
    price: 48.76,
  },
  {
    url: "prod_2.png",
    title: "Товар номер один",
    sizeType: "weight",
    size: 190,
    barcode: 123456789,
    manufacturer: "ManDan",
    brand: "Brand",
    description: "Это описание первого ттовара",
    price: 48.76,
  },
  {
    url: "prod_1.png",
    title: "Товар номер один",
    sizeType: "value",
    size: 190,
    barcode: 123456789,
    manufacturer: "ManDan",
    brand: "Brand",
    description: "Это описание первого ттовара",
    price: 48.76,
  },
  {
    url: "prod_3.png",
    title: "Товар номер один",
    sizeType: "weight",
    size: 190,
    barcode: 123456789,
    manufacturer: "ManDan",
    brand: "Brand",
    description: "Это описание первого ттовара",
    price: 48.76,
  },
];

const App = (): JSX.Element => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: "#e5e5e5",
          display: "flex",
          justifyContent: "space-evenly",
        }}>
        {ITEMS.map((item) => {
          return <ProductItem item={item} />;
        })}
      </div>
      <div>
        <Button onClick={() => {}} variant='search' />
        <Button onClick={() => {}} variant='buy'>
          Купить
        </Button>
        <Button onClick={() => {}} variant='catalog '>
          Каталог
        </Button>
        <Button onClick={() => {}} variant='download'>
          Прайс-лист
        </Button>
        <Button onClick={() => {}} variant='remove' />
        <HeaderCart items={[1, 2, 3, 4]} total={1200} />
      </div>
    </>
  );
};

export default App;
