import { deliveryProduct, orders, productCategory } from "../../assets/images";
import "./cart.scss";

const CartComponent = () => {
  return (
    <>
      <section className="section_cart">
        <div className="cart_banner">
          <span className="cart_navigation">Главная → Корзина</span>
          <h1 className="cart_title">Корзина</h1>
        </div>
        <section className="section_cart_content">
          <div className="cart_total_container">
            <div className="cart_total">
              <span className="cart_total_title">Итого</span>
              <div className="cart_content_container">
                <span className="cart_text">Количество товара</span>
                <span className="cart_text">3 шт.</span>
              </div>
              <div className="cart_content_container">
                <span className="cart_text">Товаров на сумму</span>
                <span className="cart_text">3 160 ₽</span>
              </div>
              <div className="cart_button_container">
                <button className="cart_button">Оформить заказ</button>
              </div>
            </div>
            <div className="cart_information">
              <div className="cart_information_container">
                <img
                  className="cart_information_img"
                  src={deliveryProduct}
                  alt="delivery"
                />
                <span className="cart_information_text">
                  Доставка осуществляется курьерами поставщика или службой
                  курьеров Достависта. Также товар можно забрать самостоятельно
                  от поставщика
                </span>
              </div>
              <div className="cart_information_container">
                <img
                  className="cart_information_img"
                  src={orders}
                  alt="orders"
                />
                <span className="cart_information_text">
                  Точная сумма доставки будет определена после после
                  подтверждения заказа
                </span>
              </div>
            </div>
          </div>
          <section className="cart_product_section">
            <div className="cart_product_container">
              <img
                className="cart_product_image"
                src={productCategory}
                alt="cart product"
              />
              <div className="cart_product_name_container">
                <div className="cart_product_description">
                  <span className="cart_product_name">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </span>
                  <span className="cart_prodcut_price">449 ₽</span>
                </div>
                <div className="cart_product_count_buttons">
                  <button className="cart_button_count">+</button>
                  <input
                    className="cart_input_count"
                    type="text"
                    placeholder="99"
                  ></input>
                  <button className="cart_button_count">-</button>
                </div>
              </div>
              <div className="cart_product_id_container">
                <span className="cart_product_id">
                  Код товара: <br />
                  34078988-0047
                </span>
                <div className="cart_product_count_buttons">
                  <button className="cart_button_delete_product">
                    Удалить товар
                  </button>
                </div>
              </div>
            </div>

            <div className="cart_product_container">
              <img
                className="cart_product_image"
                src={productCategory}
                alt="cart product"
              />
              <div className="cart_product_name_container">
                <div className="cart_product_description">
                  <span className="cart_product_name">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </span>
                  <span className="cart_prodcut_price">449 ₽</span>
                </div>
                <div className="cart_product_count_buttons">
                  <button className="cart_button_count">+</button>
                  <input
                    className="cart_input_count"
                    type="text"
                    placeholder="99"
                  ></input>
                  <button className="cart_button_count">-</button>
                </div>
              </div>
              <div className="cart_product_id_container">
                <span className="cart_product_id">
                  Код товара: <br />
                  34078988-0047
                </span>
                <div className="cart_product_count_buttons">
                  <button className="cart_button_delete_product">
                    Удалить товар
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default CartComponent;
