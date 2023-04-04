import Button from "../UI/Button";
import Container from "./Container";
import classes from "./Header.module.css";
import HeaderCart from "../Cart/HeaderCart";
import SearchForm from "../UI/SearchForm";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
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

      <Container>
        <div className={classes.mobile}>
          <div className={classes.top}>
            <div>
              <button className={classes.menu}>
                <img src='./burger-img.png' alt='' width={12} />
              </button>
            </div>
            <div>
              <img src='./header_logo-img.png' alt='' width={97} />
            </div>
            <div>
              <HeaderCart items={cart} total={totalvalue} />
            </div>
          </div>
          <div className={classes.bottom}>
            <div>
              <img src='./cat-mobile-img.png' alt='' />
              Каталог
            </div>
            <div>
              <img src='./search=mobile-img' alt='' />
              Поиск
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
