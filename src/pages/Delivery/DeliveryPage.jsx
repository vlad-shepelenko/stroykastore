import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { DeliveryComponent } from "../../components/Delivery";
import { Footer } from "../../components/Footer";
import "./deliverypage.scss";

const Delivery = () => {
  return (
    <>
      <div className="delivery_page">
        <Navbar />
        <Header />
        <DeliveryComponent />
        <Footer />
      </div>
    </>
  );
};

export default Delivery;
