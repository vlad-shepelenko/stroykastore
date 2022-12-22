import { productCategory } from "../../assets/images";
import "./orders.scss";
import { Context } from "../../index";
import { useContext } from "react";
import { toJS } from "mobx";
import { useEffect, useState } from "react";
import OrderService from "../../service/OrderService";
import { useLocation, useNavigation } from "react-router-dom";

const OrdersComponent = () => {
  const location = useLocation();
  console.log(location.state.data)
  const { store } = useContext(Context);
  const [data, setData] = useState([]);
  const user = toJS(store.user);
  console.log(user)
  console.log(data);

  useEffect(() => {
    getOrdersById(user.id)
  },[])

  const getOrdersById = async (user) => {
    const response = await OrderService.getOrdersById(user);
    setData(response.data);
  }
  console.log(data);
  return (
    <>
      <section className="orders_section">
        <div className="orders_banner">
          <span className="orders_navigations">Главная → Заказы</span>
          <h1 className="orders_banner_title">Заказы</h1>
        </div>
        <section className="orders_content_section">
          {data ? data.map((el) => (
            <div className="order">
              <div className="order_product_section">
              {el? el.products.map((product) => (
                <div className="order not_marg">
                  <img className="order_image" src={product[1]} alt="product" />
                  <div className="order_description">
                    <span className="order_name">
                      {product[0]}
                    </span>
                    <span className="order_price">{product[2]}</span>
                    <span className="order_count">{product[3]} шт.</span>
                  </div>
                </div>
              )) : null

              }
              </div>
            <div className="order_status_container">
              <div className="order_section">
                <span className="order_date">Заказ от {
                el.date.split('T')[0]
                }</span>
                <span className="order_id">{el._id}</span>
              </div>
              <div className="order_status_section">
                <span className="order_status_title">Статус</span>
                <span className="order_status_result">{el.status}</span>
              </div>
            </div>
          </div>
          )) : null}
        </section>
      </section>
    </>
  );
};

export default OrdersComponent;
