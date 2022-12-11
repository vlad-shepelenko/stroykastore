import "./footer.scss";
import {
  footer_location,
  footer_logo,
  footer_message,
  visa,
  mastercard,
  maestro,
  mir,
} from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="footer_section">
        <div className="footer_nav_container">
          <div className="footer_company">
            <div className="footer_contacts">
              <img className="footer_logo" src={footer_logo} alt="Logo"></img>
              <div className="footer_tablet">
                <div className="footer_mail">
                  <img src={footer_message} alt="e-mail"></img>
                  <span className="footer_text">info@stroykastore.ru</span>
                </div>
                <div className="footer_location">
                  <img src={footer_location} alt="location"></img>
                  <span className="footer_text">Москва, ул. Камушкина 10</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_navigation">
            <div className="footer_column">
              <span
                onClick={() => navigate("/profile")}
                className="footer_text"
              >
                Личный кабинет
              </span>
              <span onClick={() => navigate("/orders")} className="footer_text">
                Заказы
              </span>
              <span onClick={() => navigate("/cart")} className="footer_text">
                Корзина
              </span>
              <span
                onClick={() => navigate("/catalog")}
                className="footer_text"
              >
                Каталог
              </span>
            </div>
            <div className="footer_column">
              <span onClick={() => navigate("/brands")} className="footer_text">
                Бренды
              </span>
              <span
                onClick={() => navigate("/contacts")}
                className="footer_text"
              >
                Контакты
              </span>
              <span
                onClick={() => navigate("/delivery")}
                className="footer_text"
              >
                Доставка
              </span>
              <span
                onClick={() => navigate("/refunds")}
                className="footer_text"
              >
                Возврат
              </span>
            </div>
            <div className="footer_column">
              <span
                onClick={() => navigate("/documentation")}
                className="footer_text"
              >
                Документация
              </span>
            </div>
          </div>
        </div>
        <hr className="footer_divide_line" />
        <div className="footer_info">
          <span className="footer_text">© СтройкаСтор</span>
          <div className="footer_payments">
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={maestro} alt="maestro" />
            <img src={mir} alt="mir" />
          </div>
          <span className="footer_text">Разработал Влад Шепеленко</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
