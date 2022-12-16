import "./notfound.scss";

const NotFoundComponent = () => {
  return (
    <>
    <section className = "notfound_container">
    <section className="notfound_section">
        <div className="notfound_text_container">
          <h1 className="notfound_title">404</h1>
          <h2 className="notfound_title_description">Страница не найдена</h2>
          <span className="notfound_text">
            Неправильно набран адрес или такая страница больше не существует
          </span>
        </div>
        <div className="notfound_button_container">
          <button className="notfound_button">Перейти на главную</button>
        </div>
      </section>
    </section>
    </>
  );
};

export default NotFoundComponent;
