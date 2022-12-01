import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { PopularCategories } from "../../components/PopularCategories";
import { PopularProducts } from "../../components/PopularProducts";
import { PopularBrands } from "../../components/PopularBrands";
import { Reviews } from "../../components/Reviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PopularCategories />
      <PopularProducts />
      <PopularBrands />
      <Reviews />
    </>
  );
};

export default Home;
