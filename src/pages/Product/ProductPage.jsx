import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ProductComponent } from "../../components/Product";
import { Footer } from "../../components/Footer";
import {observer} from "mobx-react-lite";
import "./productpage.scss";

const ProductPage = () => {
  return (
    <>
      <div className="product_page">
        <Navbar />
        <Header />
        <ProductComponent />
        <Footer />
      </div>
    </>
  );
};

export default observer(ProductPage);
