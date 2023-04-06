import { FC } from "react";
import classes from "./Footer.module.css";
import Container from "../Container/Container";
import Button from "../../UI/button/Button";

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes["footer-content"]}>
          <div className={classes["left-column"]}>
            <img src='./logo_Sultan.png' alt='' width={156} />
            <p className='description'>
              Компания «Султан» — снабжаем розничные магазины товарами "под
              ключ" в Кокчетаве и Акмолинской области
            </p>
            <span className={classes.subscribe}>
              Подпишись на скидки и акции
            </span>
          </div>
          <div className={classes.column}>
            <h5>Меню сайта:</h5>
            <ul>
              <li>
                <a href=''>О компании</a>
              </li>
              <li>
                <a href=''>Доставка и оплата</a>
              </li>
              <li>
                <a href=''>Возврат</a>
              </li>
              <li>
                <a href=''>Контакты</a>
              </li>
            </ul>
          </div>
          <div className={classes.column}>
            <h5>Категории:</h5>
            <ul>
              <li>
                <a href=''>Бытовая химия</a>
              </li>
              <li>
                <a href=''>Косметика и гигиена</a>
              </li>
              <li>
                <a href=''>Товары для дома</a>
              </li>
              <li>
                <a href=''>Товары для детей и мам</a>
              </li>
              <li>
                <a href=''>Посуда</a>
              </li>
            </ul>
          </div>
          <div className={classes.column}>
            <h5>Скачать прайс-лист:</h5>
            <ul>
              <li>
                <Button variant='download'>Прайс-лист</Button>
              </li>
              <li>
                <a href=''>Связь в мессенджерах:</a>
              </li>
              <li className={classes.images}>
                <a href='#'>
                  <img src='./wsp-img.png' alt='' width={39} />
                </a>
                <a href='#'>
                  <img src='./tlg-img.png' alt='' width={39} />
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.column}>
            <h5>Контакты:</h5>
            <ul>
              <li className={classes.call}>
                <p>+7 (777) 490-00-91</p>
                <p>время работы: 9:00-20:00</p>
                <p>
                  <a href=''>Заказать звонок</a>
                </p>
              </li>
              <li>
                <b className={classes.accent}>opt.sultan@mail.ru</b>
                <br />
                На связи в любое время
              </li>
              <li className={classes.images}>
                <a href='#'>
                  <img src='./visa-img.png' alt='' width={61} />
                </a>
                <a href='#'>
                  <img src='./mcard-img.png' alt='' width={61} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
