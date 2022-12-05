import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { CategoryComponent } from "../../components/Category";
import { Footer } from "../../components/Footer";
import "./categorypage.scss";

const CategoryPage = () => {
  return (
    <>
      <div className="category_page">
        <Navbar />
        <Header />
        <CategoryComponent />
        <Footer />
      </div>
    </>
  );
};

export default CategoryPage;
