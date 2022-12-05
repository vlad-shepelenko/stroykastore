import { catalogData } from "../../assets/data";
import "./catalog.scss";

const CatalogComponent = () => {
  return (
    <>
      <section className="catalog_section">
        <div className="catalog_banner">
          <span className="catalog_navigation">Главная → Каталог</span>
          <h1 className="catalog_title">Каталог</h1>
        </div>
        <div className="catalog_categories_container">
          {catalogData.map((el) => (
            <div className="catalog_cart_container">
              <div className="catalog_image_container" key={el.id}>
                <span className="catalog_category_title">{el.name}</span>
                <img
                  className="catalog_category_image"
                  src={el.image}
                  alt="category"
                />
              </div>
              <div className="catalog_categories">
                {el.categories.map((ctg) => (
                  <span className="catalog_category_text">{ctg}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CatalogComponent;
