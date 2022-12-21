import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deliveryProduct, orders, productCategory } from "../../assets/images";
import { message } from "antd";
import CartService from "../../service/CartService";
import "./cart.scss";
import axios from "axios";

const CartComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [inc, setInc] = useState(0)
  const [messageApi, contextHolder] = message.useMessage();
  let data = location.state.data
  console.log(data)

  let count = 0;
  let price = 0;
  data.map((el) => {
    count = count + el.info.count
    price = price + (el.info.count * el.product.productPrice)
  })
  console.log(price.toFixed(2))
  console.log(count)
  const handleIncrement = (id) => {
    data.map((el) => {
      if(el.info.product == id){
        el.info.count = el.info.count + 1
        if(el.info.count < 0){
          el.info.count = 0
        }
        setInc(inc+1)
      }
    })
    console.log(data)
  }

  const handleDecrement = (id) => {
    data.map((el) => {
      if(el.info.product == id){
        el.info.count = el.info.count - 1
        if(el.info.count < 0){
          el.info.count = 0
        }
        setInc(inc-1)
      }
    })
  }

  const handleDeleteProduct = async (id) => {
    try{
      console.log(id)
      const response = axios.delete(`http://localhost:5000/api/deleteCartProductById/${id}`)
      successDelete()
      data = location.state.data
    }catch(e){
      console.log(e)
    }
  }

  const successDelete = () => {
    messageApi.open({
      type: "success",
      content: 
        "Товар успешно удален из корзины!"
    })
  }

  return (
    <>
    {contextHolder}
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
                <span className="cart_text">{count} шт.</span>
              </div>
              <div className="cart_content_container">
                <span className="cart_text">Товаров на сумму</span>
                <span className="cart_text">{price.toFixed(2)}</span>
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
            <div style={{display: "none"}}>{inc}</div>
            {data ? data.map((el) => (
              <div className="cart_product_container">
              <img
                className="cart_product_image"
                src={el.product.productImage}
                alt="cart product"
              />
              <div className="cart_product_name_container">
                <div className="cart_product_description">
                  <span className="cart_product_name">
                    {el.product.productName}
                  </span>
                  <span className="cart_prodcut_price">{el.product.productPrice}</span>
                </div>
                <div className="cart_product_count_buttons">
                  <button onClick={() => handleIncrement(el.product._id)} className="cart_button_count">+</button>
                  <input
                    className="cart_input_count"
                    type="number"
                    placeholder="99"
                    value={el.info.count} 
                  ></input>
                  <button onClick={() => handleDecrement(el.product._id)} className="cart_button_count">-</button>
                </div>
              </div>
              <div className="cart_product_id_container">
                <span className="cart_product_id">
                  Код товара: <br />
                  {el.product._id}
                </span>
                <div className="cart_product_count_buttons">
                  <button onClick={() => handleDeleteProduct(el.info._id)} className="cart_button_delete_product">
                    Удалить товар
                  </button>
                </div>
              </div>
            </div>
            )) : <h1>В корзине пока пусто</h1>}
            {/*<div className="cart_product_container">
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
            </div>*/}
          </section>
        </section>
      </section>
    </>
  );
};

export default CartComponent;
