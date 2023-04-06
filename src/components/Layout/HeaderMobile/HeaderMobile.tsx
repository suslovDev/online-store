import { FC } from "react";
import classes from "./HeaderMobile.module.css";
import { iHeaderMobile } from "./IHeaderMobile";
import HeaderCart from "../../Cart/header_cart-button/HeaderCart";
import Container from "../Container/Container";

const HeaderMobile: FC<iHeaderMobile> = ({ cart, total }) => {
  return (
    <Container>
      <div className={classes.top}>
        <div>
          <button className={classes["menu-mobile"]}>
            <img src='./burger-img.png' alt='' width={12} />
          </button>
        </div>
        <div>
          <img src='./header_logo-img.png' alt='' width={97} />
        </div>
        <div>
          <HeaderCart items={cart} total={total} />
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
    </Container>
  );
};

export default HeaderMobile;
