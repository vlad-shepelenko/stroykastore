import "./catalog.scss";
import CatalogService from "../../service/CatalogService";
import ProductService from "../../service/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

const CatalogComponent = () => {
  const navigate = useNavigate();
  const [catalog, setCatalog] = useState("");

  useEffect(() => {
    getCatalog();
  }, []);

  async function getCatalog() {
    try {
      const response = await CatalogService.getCatalog();
      setCatalog(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChangeSubcategory = async (e) => {
    const subcategory = e.currentTarget.innerText;
    const dataProducts = await getSubcategoryProduct(subcategory);

    navigate("/category", {
      state: { subs: subcategory, products: dataProducts },
    });
  };

  async function getSubcategoryProduct(sub) {
    try {
      const response = await ProductService.getSubcategoryProducts(sub);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <section className="catalog_section">
        <div className="catalog_banner">
          <span className="catalog_navigation">Главная → Каталог</span>
          <h1 className="catalog_title">Каталог</h1>
        </div>
        <div className="catalog_categories_container">
          {catalog ? (
            catalog.map((el) => (
              <div key={Object.keys(el)[0]} className="catalog_cart_container">
                <div
                  className="catalog_image_container"
                  key={Object.keys(el)[0]}
                >
                  <span className="catalog_category_title">
                    {Object.keys(el)[0]}
                  </span>
                  <img
                    className="catalog_category_image"
                    src={Object.values(el)[1]}
                    alt="category"
                  />
                </div>
                <div className="catalog_categories">
                  {catalog
                    ? Object.values(el)[0].map((ctg) => (
                        <span
                          onClick={(e) => handleChangeSubcategory(e)}
                          className="catalog_category_text"
                        >
                          {ctg}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="spin_container">
                <Spin className="spin" tip="Загрузка" size="large" />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CatalogComponent;
