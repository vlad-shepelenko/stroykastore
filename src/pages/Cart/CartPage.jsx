import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { CartComponent } from "../../components/Cart";
import { Footer } from "../../components/Footer";
import {observer} from "mobx-react-lite";
import "./cartpage.scss";

const CartPage = () => {
  return (
    <>
      <div className="cart_page">
        <Navbar />
        <Header />
        <CartComponent />
        <Footer />
      </div>
    </>
  );
};

export default observer(CartPage);
