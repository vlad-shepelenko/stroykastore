import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import { Context } from "../..";
import { productCategory, deliveryProduct } from "../../assets/images";
import CartService from "../../service/CartService";
import { toJS } from "mobx";
import "./product.scss";

const ProductComponent = () => {
  const [count, setCount] = useState(1)
  const location = useLocation();
  const [auth, setAuth] = useState("");
  const { store } = useContext(Context);
  const product = location.state.product;
  const [messageApi, contextHolder] = message.useMessage();
  const supplier = location.state.supplier;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  useEffect(() => {
    setAuth(store.isAuth);
  }, []);

  const handleAddToCart = async (e, product) => {
    e.stopPropagation();
    if (auth) {
      try {
        const user = toJS(store.user);
        const response = await CartService.setCart(user.id, product, count);
        successAuthorization();
        return response.data;
      } catch (e) {
        console.log(e);
      }
    } else {
      errorAuthorization();
    }
  };

  const errorAuthorization = () => {
    messageApi.open({
      type: "error",
      content:
        "Вы не авторизованы! Для добавления товара в корзину авторизуйтесь!",
    });
  };

  const successAuthorization = () => {
    messageApi.open({
      type: "success",
      content: "Товар успешно добавлен в корзину!",
    });
  };

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if(count == 1){
      setCount(1)
    }
    else{
      setCount(count - 1)
    }
  }

  return (
    <>
    {contextHolder}
      <section className="product_section">
        <span className="product_section_navigation">
          Главная → Каталог → {product.productName}
        </span>
        <section className="product_general_container">
          <img
            className="product_general_image"
            src={product.productImage}
            alt="product"
          />
          <div className="product_general_description">
            <h2 className="product_general_description_name">
              {product.productName}
            </h2>
            <span className="product_availability">
              {product.productAvailability ? "В наличии" : "Нет в наличии"}
            </span>
            <span className="product_general_description_price">
              {product.productPrice}
            </span>
            <div className="product_buttons_section">
              <button onClick={(e) => handleAddToCart(e, product._id)}  className="product_tocart">В корзину</button>
              <div className="product_count_section">
                <button onClick={handleIncrement} className="product_count_button">+</button>
                <input
                  type="text"
                  className="prodcut_count_input"
                  placeholder="99"
                  value={count}
                ></input>
                <button onClick={handleDecrement} className="product_count_button">-</button>
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
