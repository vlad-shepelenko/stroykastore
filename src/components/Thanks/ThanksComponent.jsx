import { checkThanks } from "../../assets/images";
import "./thanks.scss";

const ThanksComponent = () => {
  return (
    <>
    <section className="thanks_container">
    <section className="thanks_section">
        <div className="thanks_text_container">
          <img className="thanks_image" src={checkThanks} alt="thanks" />
          <h1 className="thanks_title">Спасибо!</h1>
          <span className="thanks_text">
            Ваша заявка принята. Мы свяжемся с вами <br /> в ближайшее время
          </span>
        </div>
        <div className="thanks_button_container">
          <button className="thanks_button">Перейти на главную</button>
        </div>
      </section>
    </section>
    </>
  );
};

export default ThanksComponent;
