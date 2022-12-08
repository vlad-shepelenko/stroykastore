import { productCategory } from "../../assets/images";
import "./orders.scss";

const OrdersComponent = () => {
  return (
    <>
      <section className="orders_section">
        <div className="orders_banner">
          <span className="orders_navigations">Главная → Заказы</span>
          <h1 className="orders_banner_title">Заказы</h1>
        </div>
        <section className="orders_content_section">
          <div className="order">
            <img className="order_image" src={productCategory} alt="product" />
            <div className="order_description">
              <span className="order_name">
                Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
              </span>
              <span className="order_price">995 ₽</span>
              <span className="order_count">2 шт.</span>
            </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от 24 мая</span>
                <span className="order_id">34078988-0047</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">Оплачен</span>
              </div>
            </div>
          </div>

          <div className="order">
            <img className="order_image" src={productCategory} alt="product" />
            <div className="order_description">
              <span className="order_name">
                Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
              </span>
              <span className="order_price">995 ₽</span>
              <span className="order_count">2 шт.</span>
            </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от 24 мая</span>
                <span className="order_id">34078988-0047</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">Оплачен</span>
              </div>
            </div>
          </div>
          <div className="order">
            <img className="order_image" src={productCategory} alt="product" />
            <div className="order_description">
              <span className="order_name">
                Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
              </span>
              <span className="order_price">995 ₽</span>
              <span className="order_count">2 шт.</span>
            </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от 24 мая</span>
                <span className="order_id">34078988-0047</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">Оплачен</span>
              </div>
            </div>
          </div>
          <div className="order">
            <img className="order_image" src={productCategory} alt="product" />
            <div className="order_description">
              <span className="order_name">
                Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
              </span>
              <span className="order_price">995 ₽</span>
              <span className="order_count">2 шт.</span>
            </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от 24 мая</span>
                <span className="order_id">34078988-0047</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">Оплачен</span>
              </div>
            </div>
          </div>
          <div className="order">
            <img className="order_image" src={productCategory} alt="product" />
            <div className="order_description">
              <span className="order_name">
                Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
              </span>
              <span className="order_price">995 ₽</span>
              <span className="order_count">2 шт.</span>
            </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от 24 мая</span>
                <span className="order_id">34078988-0047</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">Оплачен</span>
              </div>
            </div>
          </div>
          <div className="order">
            <img className="order_image" src={productCategory} alt="product" />
            <div className="order_description">
              <span className="order_name">
                Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
              </span>
              <span className="order_price">995 ₽</span>
              <span className="order_count">2 шт.</span>
            </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от 24 мая</span>
                <span className="order_id">34078988-0047</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">Оплачен</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OrdersComponent;
