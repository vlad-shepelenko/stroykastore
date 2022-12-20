import { useLocation, useNavigate } from "react-router-dom";
import { productCategory, deliveryProduct } from "../../assets/images";
import "./product.scss";

const ProductComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state.product;
  const supplier = location.state.supplier;

  return (
    <>
      <section className="product_section">
        <span className="product_section_navigation">
          Главная → Каталог → Стройматериалы → Сухие смеси → Шпатлевка
          масляно-клеевая 3кг Л-С
        </span>
        <section className="product_general_container">
          <img
            className="product_general_image"
            src={productCategory}
            alt="product"
          />
          <div className="product_general_description">
            <h2 className="product_general_description_name">
              {product.productName}
            </h2>
            <span className="product_availability">{product.productAvailability ? "В наличии" : "Нет в наличии"}</span>
            <span className="product_general_description_price">{product.productPrice}</span>
            <div className="product_buttons_section">
              <button className="product_tocart">В корзину</button>
              <div className="product_count_section">
                <button className="product_count_button">+</button>
                <input
                  type="text"
                  className="prodcut_count_input"
                  placeholder="99"
                ></input>
                <button className="product_count_button">-</button>
              </div>
            </div>
            <span className="product_provider">Поставщик: {supplier}</span>
            <div className="product_delivery_section">
              <img src={deliveryProduct} alt="delivery" />
              <span className="product_delivery">
                Доставка осуществляется курьерами поставщика или службой
                курьеров Достависта. Также товар можно забрать самостоятельно от
                поставщика
              </span>
            </div>
          </div>
        </section>
        <section className="product_additional_description">
          <h2 className="product_additional_description_title">Описание</h2>
          <div className="product_additional_description_text">
            {product.productDescription}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductComponent;
