import "./header.scss";
import {
  logo,
  profile,
  orders,
  cart,
  catalog,
  mapcheck,
} from "../../assets/images";
import { useState, useEffect, useRef } from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect } from "react";
import { Modal, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Context } from "../../index";
import { useContext } from "react";
import { toJS } from "mobx";
import CartService from "../../service/CartService";
import ProductService from "../../service/ProductService";
import OrderService from "../../service/OrderService";

const useSize = (target) => {
  const [size, setSize] = useState();
  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailRegistration, setEmailRegistration] = useState("");
  const [passwordRegistration, setPasswordRegistration] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrarion, setRegistration] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [showSlider, setShowSlider] = useState(true);
  const [ordersData, setOrdersData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const target = useRef(null);
  const size = useSize(target);
  const { store } = useContext(Context);

  const handleGoToOrders = async () => {
    const user = toJS(store.user);
    const response = await OrderService.getOrdersById(user.id);
    setOrdersData(response.data);
    navigate("/orders", { state: { data: ordersData } });
  };

  const searchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const response = await ProductService.getSearchProducts(searchName);
      const dataProducts = response.data;
      navigate("/category", { state: { products: dataProducts } });
    }
  };

  const handleCancel = () => {
    setLogin(false);
  };

  const handldeCancelRegistraton = () => {
    setRegistration(false);
  };

  useEffect(() => {
    if (size !== undefined && size.width < 1000 && size.width > 768) {
      setShowMenu(false);
    }
    if (size !== undefined && size.width > 1024) {
      setShowMenu(true);
    }
  }, [size]);
  const handleClick = () => {
    if (size.width !== undefined && size.width < 768 && showMenu) {
      setShowMenu(false);
      setShowSlider(true);
    } else {
      setShowMenu(true);
      setShowSlider(false);
    }
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content:
        "???????? ?????????? ???? ????????????????????????! ?????????????????? ??????????????????, ?????????????? ???????????? ?????? ???? ??????????!",
    });
  };

  const handleLogin = async () => {
    let { data } = await store.login(email, password);
    if (data.user.isActivated === true) {
      navigate("/profile");
    } else {
      error();
    }
    console.log(data.user.isActivated);
  };

  const handleRegistration = () => {
    if (passwordRegistration === confirmPassword) {
      store.registration(emailRegistration, passwordRegistration);
    }
  };

  const handleGoToCart = async () => {
    try {
      const user = toJS(store.user);
      const response = await CartService.getCartById(user.id);
      navigate("/cart" /*, {state: {data: response.data}}*/);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {contextHolder}
      <header ref={target}>
        <section className="header_mobile">
          <section className="header_pc">
            <img
              src={catalog}
              className="burger_menu"
              onClick={handleClick}
              alt="catalog"
            />
            <section onClick={handleClick} className="logo">
              <span onClick={() => navigate("/home")}>
                <img
                  className="logo_image"
                  onClick={() => navigate("/home")}
                  src={logo}
                  alt="Logo"
                />
              </span>
            </section>
            <section className="buttons">
              <div
                onClick={() => navigate("/catalog")}
                className="button_catalog"
              >
                <object
                  data={catalog}
                  type="image/svg+xml"
                  className="button_unit_image"
                >
                  Catalog
                </object>
                <span className="catalog">??????????????</span>
              </div>
              <input
                id="search_button_pc"
                type="text"
                placeholder="??????????"
                className="search_button"
                value={searchName}
                onKeyDown={handleKeyDown}
                onChange={searchChange}
              ></input>
              <div className="buttons_section">
                <div onClick={() => setLogin(true)} className="button_unit">
                  <img
                    onClick={() => setLogin(true)}
                    src={profile}
                    className="button_unit_image"
                    alt="profile"
                  />
                  <span
                    className="button_unit_text"
                    onClick={() => setLogin(true)}
                  >
                    ??????????????
                  </span>
                </div>
                <div onClick={handleGoToOrders} className="button_unit">
                  <img
                    src={orders}
                    className="button_unit_image"
                    alt="orders"
                  />
                  <span className="button_unit_text">????????????</span>
                </div>
                <div onClick={handleGoToCart} className="button_unit">
                  <img src={cart} className="button_unit_image" alt="cart" />
                  <span className="button_unit_text">??????????????</span>
                </div>
              </div>
            </section>
            <img
              onClick={handleGoToCart}
              src={cart}
              alt="cart"
              className="cart"
            />
          </section>
        </section>
        <section className="search_button_mob_section">
          <input
            id="search_button_mobile"
            type="text"
            placeholder="??????????"
            className="search_button"
          ></input>
        </section>
        <hr className="dividing_line" />
        <section
          style={{ display: showMenu ? "block" : "none" }}
          className="opened_menu"
        >
          <section className="mobile_menu">
            <div
              onClick={() => navigate("/catalog")}
              className="button_catalog"
            >
              <object
                data={catalog}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Catalog
              </object>
              <span className="catalog">??????????????</span>
            </div>
            <div onClick={() => setLogin(true)} className="button_unit">
              <object
                data={profile}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Profile
              </object>
              <span className="button_unit_text">??????????????</span>
            </div>
            <div onClick={() => navigate("/orders")} className="button_unit">
              <img src={orders} alt="orders" className="button_unit_image" />
              <span className="button_unit_text">????????????</span>
            </div>
          </section>
          <section className="city_menu_section">
            <div className="city_menu">
              <span>
                <object data={mapcheck} type="image/svg+xml">
                  Location
                </object>
              </span>
              <span>??????????</span>
            </div>
          </section>
          <hr className="dividing_line incomplete" />
          <section className="nav_menu">
            <ul>
              <li>??????????</li>
              <li>???????????????????????? ??????????????????</li>
              <li>???????????????????????? ????????????</li>
              <li>????????????</li>
              <li>????????????????????</li>
              <li>?????????????????? ????????????????</li>
              <li>??????????????????????</li>
              <li>????????</li>
              <li>????????</li>
            </ul>
          </section>
          <hr className="dividing_line incomplete" />
          <section className="nav_menu_header">
            <ul>
              <li onClick={() => navigate("/brands")}>????????????</li>
              <li onClick={() => navigate("/delivery")}>????????????????</li>
              <li onClick={() => navigate("/refunds")}>??????????????</li>
              <li onClick={() => navigate("/documentation")}>????????????????????????</li>
              <li onClick={() => navigate("/contacts")}>????????????????</li>
            </ul>
          </section>
        </section>
        <hr className="dividing_line" />
      </header>
      <Modal
        centered
        open={login}
        onCancel={handleCancel}
        width={size !== undefined && size.width < 768 ? 316 : 376}
      >
        <h2 className="login_title">????????</h2>
        <div className="login_section">
          <span className="input_label">E-mail</span>
          <input
            className="input_email"
            type="email"
            placeholder="yourmail@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="password_section">
          <span className="input_label">????????????</span>
          <input
            className="input_password"
            type="password"
            placeholder="????????????"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="login_buttons_section">
          <button className="login_button_enter" onClick={handleLogin}>
            ??????????
          </button>
          <button
            onClick={() => setRegistration(true)}
            className="login_button_create"
          >
            ?????????????? ?????????????? ????????????
          </button>
        </div>
      </Modal>
      <Modal
        centered
        open={registrarion}
        onCancel={handldeCancelRegistraton}
        width={size !== undefined && size.width < 768 ? 316 : 572}
      >
        <h2 className="registration_title">??????????????????????</h2>
        <div className="registration_section">
          <div className="registation long">
            <span className="input_label long">E-mail</span>
            <input
              className="input_registration long"
              type="email"
              placeholder="yourmail@mail.com"
              onChange={(e) => setEmailRegistration(e.target.value)}
              value={emailRegistration}
            />
          </div>
        </div>
        <div className="registration_section">
          <div className="registation">
            <span className="input_label">?????????? ????????????</span>
            <input
              className="input_registration"
              type="password"
              placeholder="????????????"
              onChange={(e) => setPasswordRegistration(e.target.value)}
              value={passwordRegistration}
            />
          </div>
          <div className="registation">
            <span className="input_label">?????????????????????????? ????????????</span>
            <input
              className="input_registration"
              type="password"
              placeholder="????????????"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>
        <div className="login_buttons_section">
          <button
            className="registration_button_enter"
            onClick={handleRegistration}
          >
            ????????????????????????????????????
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Header;
