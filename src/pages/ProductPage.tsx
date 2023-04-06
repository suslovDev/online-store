import { FC } from "react";
import { useAppSelector } from "../hooks/hooks";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Layout/Container";
import Crumbs from "../components/Layout/Crumbs";
import ProductSelf from "../components/Product/ProductSelf";

export const ProductPage: FC = () => {
  const { id } = useParams();
  const products = useAppSelector((state) => state.products.products);
  const productItem = products.find((product) => product.barcode == id);
  if (!productItem) return <></>; // нужно что-то более внятное

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
