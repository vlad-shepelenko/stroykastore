import "./popularcategories.scss";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../service/CategoryService";
import { useState } from "react";
import { useEffect } from "react";
import ProductService from "../../service/ProductService";

const PopularCategories = () => {
  const navigate = useNavigate();
  const [popularCategory, setPopularCategory] = useState("");

  useEffect(() => {
    getPopularCategories();
  }, []);
  async function getPopularCategories() {
    try {
      const response = await CategoryService.getPopularCategory();
      setPopularCategory(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleGoToCategory = async (id) => {
    const products = await ProductService.getProductsByCategoryId(id)
    navigate("/category", {state: {products: products.data}})
  }

  return (
    <>
      <section className="popularCategories_container">
        <div className="header_categories">
          <h2 className="title_categories">Популярные категории</h2>
          <button
            onClick={() => navigate("/catalog")}
            className="all_categories_button"
          >
            Все категории
          </button>
        </div>
        <div className="cart_categories_container">
          {popularCategory
            ? popularCategory.map((el) => (
                <div className="cart_categories" onClick={() => handleGoToCategory(el._id)} key={el._id}>
                  <div className="cart_categories_name">{el.categoryName}</div>
                  <div className="cart_categories_iamge">
                    <img
                      className="cart_image"
                      src={el.categoryImage}
                      alt={el.categoryName}
                    />
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default PopularCategories;
