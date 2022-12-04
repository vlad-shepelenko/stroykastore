import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { AllBrands } from "../../components/AllBrands";
import { Footer } from "../../components/Footer";
import "./brandspage.scss";

const Brands = () => {
  return (
    <>
      <div className="allbrands_page">
        <Navbar />
        <Header />
        <AllBrands />
        <Footer />
      </div>
    </>
  );
};

export default Brands;
