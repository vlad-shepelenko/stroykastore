import "./documentation.scss";
import { safedeal, privacypolicy, oferta } from "../../assets/images";

const DocumentationComponent = () => {
  const handleGoTo = async (url) => {
    window.location.assign(url)
  }

  return (
    <>
      <section className="documentation_container">
        <span className="documentation_navigation">Главная → Документация</span>
        <h2 className="documentation_title">Документация</h2>
        <div className="documentation_carts_container">
          <div className="documentation_cart">
            <div className="documentation_image">
              <img
                className="content_image_documentation"
                src={safedeal}
                alt="Оферта безопасная сделка"
              />
            </div>
            <div className="documentation_description">
              <span className="documentation_name">
                Оферта «Безопасная сделка»
              </span>
              <span className="documentation_size">PDF · 10 МБ</span>
              <button onClick={() => handleGoTo('https://static.qiwi.com/ru/doc/oferta_safe-deal.pdf')} className="download_documentation">Скачать</button>
            </div>
          </div>
          <div className="documentation_cart">
            <div className="documentation_image">
              <img
                className="content_image_documentation"
                src={privacypolicy}
                alt="Политика конфиденциальности"
              />
            </div>
            <div className="documentation_description">
              <span className="documentation_name">
                Политика конфиденциальности
              </span>
              <span className="documentation_size">PDF · 10 МБ</span>
              <button onClick={() => handleGoTo('https://zodbel.by/sites/default/files/confident/confident.pdf')} className="download_documentation">Скачать</button>
            </div>
          </div>
          <div className="documentation_cart">
            <div className="documentation_image">
              <img
                className="content_image_documentation"
                src={oferta}
                alt="Оферта"
              />
            </div>
            <div className="documentation_description">
              <span className="documentation_name">Оферта доставки</span>
              <span className="documentation_size">PDF · 10 МБ</span>
              <button onClick={() => handleGoTo('https://atex-gr.ru/upload/Dogovor_oferty_U.pdf')} className="download_documentation">Скачать</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentationComponent;
