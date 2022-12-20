import { catalogData } from "../../assets/data";
import "./catalog.scss";
import CatalogService from "../../service/CatalogService";
import { useState } from "react";
import { useEffect } from "react";

const CatalogComponent = () => {
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

  return (
    <>
      <section className="catalog_section">
        <div className="catalog_banner">
          <span className="catalog_navigation">Главная → Каталог</span>
          <h1 className="catalog_title">Каталог</h1>
        </div>
        <div className="catalog_categories_container">
          {catalog
            ? catalog.map((el) => (
                <div className="catalog_cart_container">
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
                    {Object.values(el)[0].map((ctg) => (
                      <span className="catalog_category_text">{ctg}</span>
                    ))}
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default CatalogComponent;
