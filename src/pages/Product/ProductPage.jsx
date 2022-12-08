import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ProductComponent } from "../../components/Product";
import { Footer } from "../../components/Footer";
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

export default ProductPage;
