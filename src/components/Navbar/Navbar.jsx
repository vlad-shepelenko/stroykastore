import "./navbar.scss";
import { mapcheck } from "../../assets/images";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="city">
          <span>
            <object type="image/svg+xml" data={mapcheck}>
              <img className="cityImg" src={mapcheck} alt="Город" />
            </object>
          </span>
          <a href="google.com">Город</a>
        </div>
        <div className="navigation">
          <a href="google.com">Бренды</a>
          <a href="google.com">Доставка</a>
          <a href="google.com">Возврат</a>
          <a href="google.com">Документация</a>
          <a href="google.com">Контакты</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
