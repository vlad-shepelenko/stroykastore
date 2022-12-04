import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { RefundsComponent } from "../../components/Refunds";
import { Footer } from "../../components/Footer";
import "./refundspage.scss";

const Delivery = () => {
  return (
    <>
      <div className="refunds_page">
        <Navbar />
        <Header />
        <RefundsComponent />
        <Footer />
      </div>
    </>
  );
};

export default Delivery;
