import { FC } from "react";
import classes from "./Header.module.css";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import HeaderCart from "../../Cart/header_cart-button/HeaderCart";
import SearchForm from "../../UI/search/SearchForm";
import Container from "../Container/Container";
import Button from "../../UI/button/Button";
import { useAppSelector } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { cart, total } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const totalvalue = +total.toFixed(2);
  return (
    <>
      <header className={classes.header}>
        <Container>
          <div className={classes.content}>
            <div className={classes.navigation}>
              <div className={classes.contacts}>
                <img src='./location-img.png' alt='' width={20} height={20} />
                <p>
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                  <span>(Рынок Восточный)</span>
                </p>
                <div className={classes["item-wrap"]}>
                  <img src='./envelop-img.png' alt='' width={17} height={13} />
                  <p>
                    opt.sultan@mail.ru
                    <span>На связи в любое время</span>
                  </p>
                </div>
              </div>
              <ul className={classes.menu}>
                <li>
                  <a href='#'>О компании</a>
                </li>
                <li>
                  <a href='#'>Доставка и оплата</a>
                </li>
                <li>
                  <a href='#'>Возврат</a>
                </li>
                <li>
                  <a href='#'>Контакты</a>
                </li>
                <li>
                  <Link to='admin'>Админка</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className={classes.wrap}>
          <Container>
            <div className={classes.content}>
              <div>
                <img src='./header_logo-img.png' alt='' width={156} />
              </div>
              <div className={classes.search}>
                <Button variant='catalog ' onClick={() => navigate("catalog")}>
                  Каталог
                </Button>
                <div className={classes.input}>
                  <SearchForm placeholder='Поиск...' />
                </div>
              </div>
              <div className={classes.call}>
                <div className={classes.contacts}>
                  <p>
                    +7 (777) 490-00-91
                    <span>время работы: 9:00-20:00</span>
                    <span>
                      <a href='#'>Заказать звонок</a>
                    </span>
                  </p>
                  <img src='./call-img.png' alt='' height={92} />
                </div>
              </div>

              <div className={classes.button}>
                <Button variant='download'>Прайс-лист</Button>
              </div>

              <div className={classes.cart}>
                <HeaderCart items={cart} total={totalvalue} />
              </div>
            </div>
          </Container>
        </div>
      </header>
      <div className={classes.mobile}>
        <HeaderMobile cart={cart} total={totalvalue} />
      </div>
    </>
  );
};

export default Header;
