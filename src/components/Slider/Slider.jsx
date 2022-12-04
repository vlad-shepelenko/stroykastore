import "./slider.scss";
import ImageSlider, { Slide } from "react-auto-image-slider";
import { specialoffers, sale } from "../../assets/images";

const Slider = () => {
  return (
    <>
      <div id="slider_component" className="slider_container">
        <ImageSlider effectDelay={500} autoPlayDelay={5000}>
          <Slide>
            <div className="container_image">
              <div className="slider_container_text">
                <div className="slider_text">
                  <h1 className="slider_title">
                    Специальные <br /> предложения
                  </h1>
                  <span className="slider_title_description">
                    на строительные материалы <br /> и товары для ремонта
                  </span>
                </div>
                <button className="slider_button_more">Подробнее</button>
              </div>
              <img className="slider_image" src={specialoffers} alt="special" />
            </div>
          </Slide>
          <Slide>
            <div className="container_image">
              <div className="slider_container_text">
                <div className="slider_text">
                  <h1 className="slider_title">
                    Распродажа <br /> инструментов
                  </h1>
                  <span className="slider_title_description">
                    "СтрокаСтор" стремится сделать условия покупки{" "}
                    <br className="split_line_none" />
                    максимально выгодными для каждого покупателя, поэтому{" "}
                    <br className="split_line_none" /> на сайте регулярно
                    появляются товары со скидкой
                  </span>
                </div>
                <button className="slider_button_more">Подробнее</button>
              </div>
              <img className="slider_image" src={sale} alt="sale" />
            </div>
          </Slide>
        </ImageSlider>
      </div>
    </>
  );
};

export default Slider;
