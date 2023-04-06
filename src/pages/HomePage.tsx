import Container from "../components/Layout/Container";
import Crumbs from "../components/Layout/Crumbs";
import HorisontalGap from "../components/Layout/HorisontalGap";

const params = [
  { url: "", name: "Главная" },
  { url: "catalog", name: "Каталог" },
  { url: "cart", name: "Корзина" },
  { url: "admin", name: "Админка" },
  { url: "", name: "" },
];

export const HomePage = () => {
  return (
    <Container>
      <Crumbs params={params} />
      <h1>Home Page</h1>
      <p>Походите по ссылкам выше)</p>
      <HorisontalGap gap='50px' />
    </Container>
  );
};
