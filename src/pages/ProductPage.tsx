import classes from "./ProductPage.module.css";
import { FC } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import ProductSelf from "../components/Product/ProductSelf";
import { useAppSelector } from "../hooks/hooks";
import Crumbs from "../components/Layout/Crumbs";

export const ProductPage: FC = () => {
  const { id } = useParams();
  const products = useAppSelector((state) => state.products.products);
  const productItem = products.find((product) => product.barcode == id);
  if (!productItem) return <></>;

  const params = [
    { url: "", name: "Главная" },
    { url: "catalog", name: "Каталог" },
    { url: `${productItem.barcode}`, name: `${productItem.title}` },
  ];
  return (
    <Container>
      <Crumbs params={params} />
      <h1>Product Page</h1>
      <ProductSelf product={productItem} />
    </Container>
  );
};
