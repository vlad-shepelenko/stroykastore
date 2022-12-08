import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { OrdersComponent } from "../../components/Orders";
import { Footer } from "../../components/Footer";
import "./orderspage.scss";

const OrdersPage = () => {
  return (
    <>
      <div className="orders_page">
        <Navbar />
        <Header />
        <OrdersComponent />
        <Footer />
      </div>
    </>
  );
};

export default OrdersPage;
