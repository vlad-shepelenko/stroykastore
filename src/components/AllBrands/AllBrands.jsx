import "./allbrands.scss";
import BrandsService from "../../service/BrandsService";
import { useEffect } from "react";
import { useState } from "react";

const AllBrands = () => {
  const [firstLetter, setFirstLetter] = useState("");
  const [firstLetterHeader, setFirstLetterHeader] = useState("");
  const [filteredArray, setFitleredArray] = useState("");

  useEffect(() => {
    getBrandsFirstLetter();
  }, []);

  async function getBrandsFirstLetter() {
    try {
      const response = await BrandsService.getBrandsFirstLetter();
      setFirstLetter(response.data);
      setFirstLetterHeader(response.data);
      setFitleredArray(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChangeLetter = (e) => {
    const letter = e.target.value;
    if (letter === "Все") {
      setFitleredArray(firstLetter);
    } else {
      const filteredMap = firstLetter.filter(
        (array) => Object.keys(array)[0] === letter
      );
      setFitleredArray(filteredMap);
    }
  };

  return (
    <>
      <section className="allbrands_section">
        <div className="banner_allbrands">
          <span className="banner_navigation_text">Главная → Все бренды</span>
          <h1 className="all_brands_text">Все бренды</h1>
        </div>
        <div className="brands_container">
          <div className="brands_letters_container">
            <button
              onClick={(e) => handleChangeLetter(e, "value")}
              value="Все"
              className="button_all_brands"
            >
              Все
            </button>
            {firstLetterHeader
              ? firstLetterHeader.map((el) => (
                  <button
                    onClick={(e) => handleChangeLetter(e, "value")}
                    value={Object.keys(el)[0]}
                    className="button_letter_brandes"
                  >
                    {Object.keys(el)[0]}
                  </button>
                ))
              : null}
          </div>
          {filteredArray
            ? filteredArray.map((el) => (
                <>
                  <div className="brands_letter_container">
                    <div>
                      <h2 className="title_letter_text">
                        {Object.keys(el)[0]}
                      </h2>
                    </div>
                    <div className="brands_name_container">
                      {Object.values(el).map((brand) =>
                        brand.map((element) => (
                          <span className="brand_name_text">{element}</span>
                        ))
                      )}
                    </div>
                  </div>
                  <hr className="brands_divider" />
                </>
              ))
            : null}
        </div>
      </section>
    </>
  );
};

export default AllBrands;
