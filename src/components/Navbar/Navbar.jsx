import "./navbar.scss";
import { mapcheck } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <div id="city" className="city">
          <span>
            <object data={mapcheck} type="image/svg+xml">
              Location
            </object>
          </span>
          <span className="navigation_button">Минск</span>
        </div>
        <div className="navigation">
          <span
            className="navigation_button"
            onClick={() => navigate("/brands")}
          >
            Бренды
          </span>
          <span
            className="navigation_button"
            onClick={() => navigate("/delivery")}
          >
            Доставка
          </span>
          <span
            className="navigation_button"
            onClick={() => navigate("/refunds")}
          >
            Возврат
          </span>
          <span
            className="navigation_button"
            onClick={() => navigate("/documentation")}
          >
            Документация
          </span>
          <span
            className="navigation_button"
            onClick={() => navigate("/contacts")}
          >
            Контакты
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
