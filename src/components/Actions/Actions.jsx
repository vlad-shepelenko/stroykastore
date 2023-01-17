import { arrow } from "../../assets/images";
import "./actions.scss";
import { message } from "antd";
import { useState, useContext, useEffect } from "react";
import ActionService from '../../service/ActionService';
import CartService from "../../service/CartService";
import { Context } from "../..";
import { toJS } from "mobx";

const Actions = () => {
  const { store } = useContext(Context);
  const [actions, setActions] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const [auth, setAuth] = useState("");

  useEffect(() => {
    getActions();
  }, [])

  const getActions = async () => {
    const actArray = await ActionService.getActions();
    setActions(actArray.data);
  }

  useEffect(() => {
    setAuth(store.isAuth);
  }, []);

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
      <section id="actions" className="actions_container">
        <div className="header_actions">
          <h2 className="title_actions">Акции</h2>
          <button className="all_actions">
            <div>Все акции</div>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="content_actions">
          {actions ? actions.map((el) => (
            <div className="cart_action" key={el.action._id}>
              <div className="image_action_container">
                <div className="action_amount">-{el.action.actionPercent}%</div>
                <img className="image_action" src={el.product.productImage} alt={el.product.productName} />
              </div>
              <div className="cart_action_container">
                <div className="cart_action_desccription">
                  <div className="cart_action_name">{el.product.productName}</div>
                  <div className="cart_action_price">
                    <div className="cart_action_newprice">{el.newPrice} руб.</div>
                    <div className="cart_action_oldprice">{el.product.productPrice} руб.</div>
                  </div>
                </div>
                <div className="cart_action_button">
                  <button onClick={(e) => handleAddToCart(e, el.product._id)} className="cart_butoon">В корзину</button>
                </div>
              </div>
            </div>
          )) : null}
        </div>
      </section>
    </>
  );
};

export default Actions;
