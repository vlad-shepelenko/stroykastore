import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { Actions } from "../../components/Actions";
import { PopularCategories } from "../../components/PopularCategories";
import { PopularProducts } from "../../components/PopularProducts";
import { PopularBrands } from "../../components/PopularBrands";
import { Reviews } from "../../components/Reviews";
import { About } from "../../components/About";
import { Footer } from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Actions />
      <PopularCategories />
      <PopularProducts />
      <PopularBrands />
      <Reviews />
      <About />
      <Footer />
    </>
  );
};

export default Home;
