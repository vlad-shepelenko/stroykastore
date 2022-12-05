import "./profile.scss";

const ProfileComponent = () => {
  return (
    <>
      <section className="profile_container">
        <div className="profile_title_container">
          <h1 className="profile_title">Личный кабинет</h1>
        </div>
        <div className="profile_container_content">
          <div className="profile_title_content">
            <h2 className="profile_container_title">Личная информация</h2>
          </div>
          <div className="profile_user_information_container">
            <div className="profile_user_general_content">
              <div className="profile_user_container">
                <label className="profile_text">Имя</label>
                <input className="medium_input" type="text" placeholder="Имя" />
              </div>
              <div className="profile_user_container">
                <label className="profile_text">Фамилия</label>
                <input
                  className="medium_input"
                  type="text"
                  placeholder="Фамилия"
                />
              </div>
            </div>
            <div className="profile_user_additional_content">
              <div className="profile_user_container">
                <label className="profile_text">Дата рождения</label>
                <input
                  className="medium_input"
                  type="text"
                  placeholder="01.01.2000"
                />
              </div>
              <div className="profile_user_container">
                <label className="profile_text">Телефон</label>
                <input
                  className="medium_input"
                  type="text"
                  placeholder="+375(44)592-45-21"
                />
              </div>
            </div>
            <div className="profile_user_email_content">
              <div className="profile_user_container">
                <label className="profile_text">E-mail</label>
                <input
                  className="large_input"
                  type="text"
                  placeholder="yourmail@mail.com"
                />
              </div>
            </div>
            <div className="profile_user_password_content">
              <div className="profile_user_container">
                <label className="profile_text">Новый пароль</label>
                <input
                  className="medium_input"
                  type="password"
                  placeholder="пароль   "
                />
              </div>
              <div className="profile_user_container">
                <label className="profile_text">Подтверждение пароля</label>
                <input
                  className="medium_input"
                  type="password"
                  placeholder="пароль"
                />
              </div>
            </div>
            <div className="profile_user_button_content">
              <div className="profile_user_container">
                <button className="profile_user_savechanges">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileComponent;
