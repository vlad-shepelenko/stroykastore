import "./popularproducts.scss";
import { popularProductsData } from "../../assets/data";

const PopularProducts = () => {
  return (
    <>
      <section className="popularProducts_container">
        <div className="header_popularProducts">
          <h2 className="popularProducts_title">Популярные товары</h2>
        </div>
        <div className="cart_products_container">
          {popularProductsData.map((el) => (
            <div className="cart_product" key={el.id}>
              <div className="product_image_container">
                <img className="product_image" src={el.image} alt="stoneware" />
              </div>
              <div className="cart_description_container">
                <div className="cart_description">
                  <div className="product_name">{el.name}</div>
                  <div className="product_price">899 P</div>
                </div>
                <div className="cart_button">
                  <button className="button_toCart">В корзину</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
