import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { ILayout } from "./ILayout";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartPage } from "../../pages/CartPage";
import VerticalGap from "./HorisontalGap";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
