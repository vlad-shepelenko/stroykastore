import "./popularproducts.scss";
import ProductService from "../../service/ProductService";
import { useState, useContext } from "react";
import { useEffect } from "react";
import CartService from "../../service/CartService";
import { Context } from "../..";
import { toJS } from "mobx";
import { message } from "antd";

const PopularProducts = () => {
  const [popularProductsData, setPopularProductData] = useState('');
  const { store } = useContext(Context);
  const [messageApi, contextHolder] = message.useMessage();
  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(store.isAuth);
  }, []);
  
  useEffect(() => {
    getPopularProducts();
  }, [])

  const getPopularProducts = async () => {
    try{
      const response = await ProductService.getPopularProducts();
      setPopularProductData(response.data);
    }
    catch(e){
      console.log(e);
    }
  }

  const handleAddToCart = async (e, product) => {
    e.stopPropagation();
    if (auth) {
      try {
        const user = toJS(store.user);
        const response = await CartService.setCart(user.id, product, 1);
        successAuthorization();
        return response.data;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("not authorized");
      errorAuthorization();
    }
    console.log("buttonClick");
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

  return (
    <>
    {contextHolder}
      <section className="popularProducts_container">
        <div className="header_popularProducts">
          <h2 className="popularProducts_title">Популярные товары</h2>
        </div>
        <div className="cart_products_container">
          {popularProductsData ? popularProductsData.map((el) => (
            <div className="cart_product" key={el._id}>
              <div className="product_image_container">
                <img className="product_image" src={el.productImage} alt="stoneware" />
              </div>
              <div className="cart_description_container">
                <div className="cart_description">
                  <div className="product_name">{el.productName}</div>
                  <div className="product_price">{el.productPrice} руб.</div>
                </div>
                <div className="cart_button">
                  <button onClick={(e) => handleAddToCart(e, el._id)} className="button_toCart">В корзину</button>
                </div>
              </div>
            </div>
          )): null}
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
