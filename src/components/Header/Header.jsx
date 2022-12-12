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
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

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
  const [registrarion, setRegistration] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showSlider, setShowSlider] = useState(true);
  const target = useRef(null);
  const size = useSize(target);

  const handleCancel = () => {
    setLogin(false);
  };

  const handldeCancelRegistraton = () => {
    setRegistration(false);
  };

  useEffect(() => {
    if (size !== undefined && size.width < 1000 && size.width > 680) {
      setShowMenu(false);
    }
    if (size !== undefined && size.width > 1024) {
      setShowMenu(true);
    }
  }, [size]);
  const handleClick = () => {
    if (size.width !== undefined && size.width < 680 && showMenu) {
      setShowMenu(false);
      setShowSlider(true);
    } else {
      setShowMenu(true);
      setShowSlider(false);
    }
  };
  return (
    <>
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
              <div className="button_catalog">
                <object
                  data={catalog}
                  type="image/svg+xml"
                  className="button_unit_image"
                >
                  Catalog
                </object>
                <span className="catalog">Каталог</span>
              </div>
              <input
                id="search_button_pc"
                type="text"
                placeholder="Поиск"
                className="search_button"
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
                    Профиль
                  </span>
                </div>
                <div className="button_unit">
                  <img
                    src={orders}
                    className="button_unit_image"
                    alt="orders"
                  />
                  <span className="button_unit_text">Заказы</span>
                </div>
                <div className="button_unit">
                  <img src={cart} className="button_unit_image" alt="cart" />
                  <span className="button_unit_text">Корзина</span>
                </div>
              </div>
            </section>
            <object data={cart} type="image/svg+xml" className="cart">
              Cart
            </object>
          </section>
        </section>
        <section>
          <input
            id="search_button_mobile"
            type="text"
            placeholder="Поиск"
            className="search_button"
          ></input>
        </section>
        <hr className="dividing_line" />
        <section
          style={{ display: showMenu ? "block" : "none" }}
          className="opened_menu"
        >
          <section className="mobile_menu">
            <div className="button_catalog">
              <object
                data={catalog}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Catalog
              </object>
              <span className="catalog">Каталог</span>
            </div>
            <div onClick={() => setLogin(true)} className="button_unit">
              <object
                data={profile}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Profile
              </object>
              <span className="button_unit_text">Профиль</span>
            </div>
            <div className="button_unit">
              <object
                data={orders}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Orders
              </object>
              <span className="button_unit_text">Заказы</span>
            </div>
          </section>
          <section className="city_menu_section">
            <div className="city_menu">
              <span>
                <object data={mapcheck} type="image/svg+xml">
                  Location
                </object>
              </span>
              <a href="google.com">Город</a>
            </div>
          </section>
          <hr className="dividing_line incomplete" />
          <section className="nav_menu">
            <ul>
              <li>Акции</li>
              <li>Строительные материалы</li>
              <li>Керамическая плитка</li>
              <li>Краски</li>
              <li>Сантехника</li>
              <li>Напольные покрытия</li>
              <li>Инструменты</li>
              <li>Обои</li>
              <li>Окна</li>
            </ul>
          </section>
          <hr className="dividing_line incomplete" />
          <section className="nav_menu_header">
            <ul>
              <li onClick={() => navigate("/brands")}>Бренды</li>
              <li onClick={() => navigate("/delivery")}>Доставка</li>
              <li onClick={() => navigate("/refunds")}>Возврат</li>
              <li onClick={() => navigate("/documentation")}>Документация</li>
              <li onClick={() => navigate("/contacts")}>Контакты</li>
            </ul>
          </section>
        </section>
        <hr className="dividing_line" />
      </header>
      <Modal centered open={login} onCancel={handleCancel} width={376}>
        <h2 className="login_title">Вход</h2>
        <div className="login_section">
          <span className="input_label">E-mail</span>
          <input
            className="input_email"
            type="email"
            placeholder="yourmail@mail.com"
          />
        </div>
        <div className="password_section">
          <span className="input_label">Пароль</span>
          <input
            className="input_password"
            type="password"
            placeholder="пароль"
          />
        </div>
        <div className="login_buttons_section">
          <button className="login_button_enter">Войти</button>
          <button
            onClick={() => setRegistration(true)}
            className="login_button_create"
          >
            Создать учетную запись
          </button>
        </div>
      </Modal>
      <Modal
        centered
        open={registrarion}
        onCancel={handldeCancelRegistraton}
        width={572}
      >
        <h2 className="registration_title">Регистрация</h2>
        <div className="registration_section">
          <div className="registation">
            <span className="input_label">Имя</span>
            <input
              className="input_registration"
              type="text"
              placeholder="Иннокентий"
            />
          </div>
          <div className="registation">
            <span className="input_label">E-mail</span>
            <input
              className="input_registration"
              type="email"
              placeholder="yourmail@mail.com"
            />
          </div>
        </div>
        <div className="registration_section">
          <div className="registation">
            <span className="input_label">Новый пароль</span>
            <input
              className="input_registration"
              type="password"
              placeholder="пароль"
            />
          </div>
          <div className="registation">
            <span className="input_label">Подтверждение пароля</span>
            <input
              className="input_registration"
              type="password"
              placeholder="пароль"
            />
          </div>
        </div>
        <div className="login_buttons_section">
          <button className="registration_button_enter">
            Зарегистрироваться
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Header;
