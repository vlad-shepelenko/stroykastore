import "./contacts.scss";

const ContactsComponent = () => {
  return (
    <>
      <section className="contacts_section">
        <div className="contacts_header">
          <span className="contacts_navigation">Главная → Контакты</span>
          <h2 className="contacts_title">Контакты</h2>
        </div>
        <div className="contacts_map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.1038383077826!2d37.651048716167836!3d55.72194758054517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b25d1cf4449%3A0x3e1b2027b737140a!2z0JTQtdGA0LHQtdC90LXQstGB0LrQsNGPINC90LDQsS4sIDcg0YHRgtGA0L7QtdC90LjQtSA4LCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE1MTE0!5e0!3m2!1sru!2sby!4v1670182548927!5m2!1sru!2sby"
            width="1160"
            height="340"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contacts_company_properties">
          <h2 className="contacts_company_name">ООО «СтройкаСтор»</h2>
          <div className="contacts_company_properties_container">
            <span className="contacts_company_address">
              115114, г. Москва, Дербеневская <br />
              набережная, д. 7, стр. 8
              <br />
              <br />
              Павелецкая <br />
              Автобусы 13, 106, 158, 184, 632 <br />
              Остановка «Дербеневская наб., д. 7»
            </span>
            <span className="contacts_company_bank_properties">
              ОГРН: 1047796688554 <br />
              ИНН 7703528301 <br />
              КПП 774850001 <br />
              ОКТМО 45380000 ОГРН 1047796688554 <br />
              Расчетный рублевый счет: 40702810900001403352 <br />
              Банк: АО «Сбербанк» г. Москва <br />
              Корреспондентский счет: 30101810200000000700 <br />
              БИК: 044525700
            </span>
            <span className="contacts_client_support">
              Поддержка клиентов <br />
              info@stroykastore.ru
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsComponent;
