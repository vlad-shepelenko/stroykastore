import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider";
import { Actions } from "../../components/Actions";
import { PopularCategories } from "../../components/PopularCategories";
import { PopularProducts } from "../../components/PopularProducts";
import { PopularBrands } from "../../components/PopularBrands";
import { Reviews } from "../../components/Reviews";
import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import "./homepage.scss";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <Header />
        <Slider />
        <div className="popular_section_container">
          <Actions />
          <PopularCategories />
          <PopularProducts />
          <PopularBrands />
          <Reviews />
        </div>
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Home;
