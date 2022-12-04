import "./allbrands.scss";

const AllBrands = () => {
  const filterSymbols = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "J",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Z",
    "А",
    "Б",
    "Г",
    "Д",
    "Е",
    "Ж",
    "З",
    "И",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Ш",
    "Э",
    "Я",
  ];
  return (
    <>
      <section className="allbrands_section">
        <div className="banner_allbrands">
          <span className="banner_navigation_text">Главная → Все бренды</span>
          <h1 className="all_brands_text">Все бренды</h1>
        </div>
        <div className="brands_container">
          <div className="brands_letters_container">
            <button className="button_all_brands">Все</button>
            {filterSymbols.map((el) => (
              <button className="button_letter_brandes">{el}</button>
            ))}
          </div>
          <div className="brands_letter_container">
            <div className="brand_letter_container">
              <div>
                <h2 className="title_letter_text">A</h2>
              </div>
              <div className="brands_name_container">
                <span className="brand_name_text">ASB-Woodline</span>
                <span className="brand_name_text">AVS</span>
                <span className="brand_name_text">Alma Ceramica</span>
                <span className="brand_name_text">Alvaro-Banos</span>
                <span className="brand_name_text">Am.Pm</span>
                <span className="brand_name_text">Apecs</span>
                <span className="brand_name_text">Appetite</span>
                <span className="brand_name_text">Attribute</span>
                <span className="brand_name_text">Auto Standart</span>
                <span className="brand_name_text">Axima</span>
                <span className="brand_name_text">Azario</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBrands;
