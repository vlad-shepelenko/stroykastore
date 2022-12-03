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
const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="footer_nav_container">
          <div className="footer_company">
            <div className="footer_contacts">
              <img className="footer_logo" src={footer_logo} alt="Logo"></img>
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
          <div className="footer_navigation">
            <div className="footer_column">
              <a className="footer_text" href="google.com">
                Личный кабинет
              </a>
              <a className="footer_text" href="google.com">
                Заказы
              </a>
              <a className="footer_text" href="google.com">
                Корзина
              </a>
              <a className="footer_text" href="google.com">
                Каталог
              </a>
            </div>
            <div className="footer_column">
              <a className="footer_text" href="google.com">
                Акции
              </a>
              <a className="footer_text" href="google.com">
                Бренды
              </a>
              <a className="footer_text" href="google.com">
                Контакты
              </a>
              <a className="footer_text" href="google.com">
                Доставка
              </a>
            </div>
            <div className="footer_column">
              <a className="footer_text" href="google.com">
                Возврат
              </a>
              <a className="footer_text" href="google.com">
                Документация
              </a>
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
