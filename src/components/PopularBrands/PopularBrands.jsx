import "./popularbrands.scss";
import { popularBrandsData } from "../../assets/data";
import { useNavigate } from "react-router-dom";

const PopularBrands = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="popularBrands_container">
        <div className="header_brands">
          <h2 className="title_brands">Популярные бренды</h2>
          <button
            onClick={() => navigate("/brands")}
            className="all_brands_button"
          >
            Все бренды
          </button>
        </div>
        <div className="cart_brands_container">
          {popularBrandsData.map((el) => (
            <div className="brand_cart" key={el.id}>
              <img src={el.image} alt="bever" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularBrands;
