import { useState, useEffect, useContext } from "react";
import { message } from "antd";
import { Context } from "../..";
import UserService from "../../service/UserService";
import { toJS } from "mobx";
import "./profile.scss";

const ProfileComponent = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [submpass, setSubmpass] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const [userId, setUserId] = useState("");
  const [auth, setAuth] = useState("");
  const { store } = useContext(Context);

  useEffect(() => {
    setAuth(store.isAuth);
    getUserdata();
  }, []);

  const noDigits = (event) => {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }

  let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"

  let rusletter = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"

  const noSymbols = (event) => {
    if(letter.indexOf(event.nativeEvent.key) !== -1){
      event.preventDefault();
    }
  }

  const noRusSymbols = (event) => {
    if(rusletter.indexOf(event.nativeEvent.key) !== -1){
      event.preventDefault();
    }
  }

  const handleSetName = (e) => {
    setName(e.target.value)
  }

  const handleSetSurname = (e) => {
    setSurname(e.target.value)
  }

  const handleSetDate = (e) => {
    setDate(e.target.value)
  }

  const handleSetPhone = (e) => {
    setPhone(e.target.value)
  }

  const handleSetMail = (e) => {
    setMail(e.target.value)
  }

  const handleSetPass = (e) => {
    setPass(e.target.value)
  }

  const handleSetSubmpass = (e) => {
    setSubmpass(e.target.value)
  }

  const handleSubmit = () => {
    if(pass === submpass){
      setUserdata();
    }
    else{
      errorPassw()
    }
  }

  const errorPassw = () => {
    messageApi.open({
      type: "error",
      content:
        "Пароли не совпадают! Повторите попытку!",
    });
  };

  async function setUserdata(){
    const user = toJS(store.user);
    await UserService.setUserdata(user.id, name, surname, date, phone, mail, pass)
  }

  async function getUserdata(){
    const user = toJS(store.user);
    const response = await UserService.getUserdata(user.id)
    setName(response.data[0].name)
    setSurname(response.data[0].surname)
    let date = response.data[0].bday;
    date = date.split('.').reverse().join('-')
    setDate(date)
    setPhone(response.data[0].phone)
    setMail(response.data[0].mail)
  }

  return (
    <>
    {contextHolder}
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
                <input onKeyPress={(e) => noDigits(e)} value={name} onChange={(e) => {handleSetName(e)}} className="medium_input" type="text" placeholder="Имя" />
              </div>
              <div className="profile_user_container">
                <label className="profile_text">Фамилия</label>
                <input onKeyPress={(e) => noDigits(e)}
                  className="medium_input"
                  type="text"
                  placeholder="Фамилия"
                  value={surname}
                  onChange={(e) => {handleSetSurname(e)}}
                />
              </div>
            </div>
            <div className="profile_user_additional_content">
              <div className="profile_user_container">
                <label className="profile_text">Дата рождения</label>
                <input style={{textIndent: "8px"}}
                  className="medium_input"
                  type="date"
                  placeholder="01.01.2000"
                  value={date}
                  onChange={(e) => {handleSetDate(e)}}
                />
              </div>
              <div className="profile_user_container">
                <label className="profile_text">Телефон</label>
                <input
                  pattern="[\+]375\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}d"
                  onKeyPress={(e) => noSymbols(e)}
                  className="medium_input"
                  type="text"
                  placeholder="+375(44)592-45-21"
                  value={phone}
                  onChange={(e) => {handleSetPhone(e)}}
                />
              </div>
            </div>
            <div className="profile_user_email_content">
              <div className="profile_user_container">
                <label className="profile_text">E-mail</label>
                <input
                  onKeyPress={(e) => noRusSymbols(e)}
                  className="large_input"
                  type="text"
                  placeholder="yourmail@mail.com"
                  value={mail}
                  onChange={(e) => {handleSetMail(e)}}
                />
              </div>
            </div>
            <div className="profile_user_password_content">
              <div className="profile_user_container">
                <label className="profile_text">Новый пароль</label>
                <input
                  className="medium_input"
                  type="password"
                  placeholder="пароль"
                  value={pass}
                  onChange={(e) => {handleSetPass(e)}}
                />
              </div>
              <div className="profile_user_container">
                <label className="profile_text">Подтверждение пароля</label>
                <input
                  className="medium_input"
                  type="password"
                  placeholder="пароль"
                  value={submpass}
                  onChange={(e) => {handleSetSubmpass(e)}}
                />
              </div>
            </div>
            <div className="profile_user_button_content">
              <div className="profile_user_container">
                <button onClick={handleSubmit} className="profile_user_savechanges">Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileComponent;
