import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { CartComponent } from "../../components/Cart";
import { Footer } from "../../components/Footer";
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

export default CartPage;
