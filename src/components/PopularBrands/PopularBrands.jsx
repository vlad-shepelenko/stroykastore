import "./popularbrands.scss";
import { popularBrandsData } from "../../assets/data";
import { useNavigate } from "react-router-dom";
import BrandsService from "../../service/BrandsService";
import ProductService from "../../service/ProductService";
import { useState, useEffect } from "react";

const PopularBrands = () => {
  const navigate = useNavigate();
  const [popularBrandsData, setPopularBrandsData] = useState('');
 
  useEffect(() => {
    getPopularBrands();
  }, [])

  const getPopularBrands = async () => {
    try{
      const response = await BrandsService.getPopularBrands();
      setPopularBrandsData(response.data);
    }
    catch(e){
      console.log(e);
    }
  }

  const handleGoToCategory = async (id) => {
    const products = await ProductService.getProductsByBrandId(id)
    navigate("/category", {state: {products: products.data}})
  }

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
          {popularBrandsData ? popularBrandsData.map((el) => (
            <div onClick={() => {handleGoToCategory(el._id)}} className="brand_cart" key={el._id}>
              <img className="brand_cart_image" src={el.brandImage} title={el.brandName} alt={el.brandName} />
            </div>
          )) : null}
        </div>
      </section>
    </>
  );
};

export default PopularBrands;
