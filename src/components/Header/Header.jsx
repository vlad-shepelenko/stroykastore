import "./header.scss";
import {
  logo,
  profile,
  orders,
  cart,
  catalog,
  mapcheck,
} from "../../assets/images";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);
  return (
    <>
      <header>
        <section className="header_mobile">
          <section className="header_pc">
            <object
              onClick={() => {
                showMenu === false ? setShowMenu(true) : setShowMenu(false);
              }}
              data={catalog}
              type="image/svg+xml"
              className="burger_menu"
            >
              Menu
            </object>
            <section className="logo">
              <span>
                <object data={logo} type="image/svg+xml">
                  Logo
                </object>
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
                <div className="button_unit">
                  <object
                    data={profile}
                    type="image/svg+xml"
                    className="button_unit_image"
                  >
                    Profile
                  </object>
                  <span>Профиль</span>
                </div>
                <div className="button_unit">
                  <object
                    data={orders}
                    type="image/svg+xml"
                    className="button_unit_image"
                  >
                    Orders
                  </object>
                  <span>Заказы</span>
                </div>
                <div className="button_unit">
                  <object
                    data={cart}
                    type="image/svg+xml"
                    className="button_unit_image"
                  >
                    Cart
                  </object>
                  <span>Корзина</span>
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
        <section className="opened_menu">
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
            <div className="button_unit">
              <object
                data={profile}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Profile
              </object>
              <span>Профиль</span>
            </div>
            <div className="button_unit">
              <object
                data={orders}
                type="image/svg+xml"
                className="button_unit_image"
              >
                Orders
              </object>
              <span>Заказы</span>
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
              <li>Бренды</li>
              <li>Доставка</li>
              <li>Возврат</li>
              <li>Документация</li>
              <li>Контакты</li>
            </ul>
          </section>
        </section>
        <hr className="dividing_line" />
      </header>
    </>
  );
};
export default Header;
