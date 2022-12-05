import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { CatalogComponent } from "../../components/Catalog";
import { Footer } from "../../components/Footer";
import "./catalogpage.scss";

const Catalog = () => {
  return (
    <>
      <div className="catalog_page">
        <Navbar />
        <Header />
        <CatalogComponent />
        <Footer />
      </div>
    </>
  );
};

export default Catalog;
