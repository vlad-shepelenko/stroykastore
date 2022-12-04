import "./delivery.scss";
import {
  deliverycart,
  deliverynotification,
  deliverybox,
  deliverymap,
} from "../../assets/images";
import { Collapse } from "antd";
const { Panel } = Collapse;
const DeliveryComponent = () => {
  return (
    <>
      <section className="delivery_section_container">
        <div className="delivery_banner">
          <span className="banner_delivery_text">Главная → Доставка</span>
          <h1 className="banner_delivery_title">Доставка</h1>
          <span className="banner_delivery_description">
            Доставка осуществляется курьерами поставщика или службой курьеров
            Достависта. Также товар можно забрать самостоятельно от поставщика
          </span>
        </div>
        <div className="delivery_howto_container">
          <h2 className="delivery_howto_title">
            Как сделать заказ: 4 простых шага
          </h2>
          <div className="delivery_howto_steps">
            <div className="delivery_howto_cart">
              <img
                className="delivery_image"
                src={deliverycart}
                alt="delivery cart"
              />
              <div className="delivery_howto_description">
                Добавьте нужные товары <br /> в корзину и оплатите заказ
              </div>
            </div>
            <div className="delivery_howto_cart">
              <img
                className="delivery_image"
                src={deliverynotification}
                alt="delivery notification"
              />
              <div className="delivery_howto_description">
                Получите уведомления <br /> о подтверждении вашего заказа
              </div>
            </div>
            <div className="delivery_howto_cart">
              <img
                className="delivery_image"
                src={deliverybox}
                alt="delivery box"
              />
              <div className="delivery_howto_description">
                После подтверждения <br /> мы сформируем ваш заказ
              </div>
            </div>
            <div className="delivery_howto_cart">
              <img
                className="delivery_image"
                src={deliverymap}
                alt="delivery map"
              />
              <div className="delivery_howto_description">
                Заберите из пунктов <br /> выдачи
              </div>
            </div>
          </div>
        </div>
        <div className="delivery_faq_container">
          <h2 className="deilvery_faq_title">Часто задаваемые вопросы</h2>
          <Collapse className="delivery_faq_content">
            <Panel
              header="Водитель уведомит меня о начале доставки доставки?"
              key="1"
            >
              <p className="delivery_answer">
                Есть товары, которые можно купить сразу на сервисе, и товары,
                для покупки которых нужно перейти на сайт магазина. Условия их
                получения отличаются. В этом разделе описаны условия для
                товаров, которые можно купить. Также некоторые товары, которые
                продаются на Маркете, доставляются непосредственно продавцамии
                имеют пометку об этом. Для таких товаров могут быть доступны не
                все возможности, описанные ниже.
              </p>
            </Panel>
            <Panel
              header="Мне нужна помощь в разгрузке товара (дополнительная услуга), что делать?"
              key="2"
            >
              <p className="delivery_answer">
                Мы редлагаем услуги профессиональных грузчиков. Все наши
                работники ответственны и пунктуальны, вежливы и доброжелательны.
                Они проходят предварительное обучение, и потому на должном
                уровне владеют приемами погрузки и разгрузки, упаковки разных
                типов вещей, разборки мебели. Кроме того, каждый из них имеет
                при себе все необходимые инструменты, упаковочные материалы и
                оборудование для транспортировки.
              </p>
            </Panel>
            <Panel header="Заказ доставили, что то от меня требуется?" key="3">
              <p className="delivery_answer">
                Вам необходимо поставить подпись в накладной. Перед тем, как
                поставить подпись в накладной, пожалуйста, внимательно проверьте
                товар по количеству и качеству.
              </p>
            </Panel>
            <Panel
              header="Что делать если товар не тот, или ненадлежащего качества?"
              key="4"
            >
              <p className="delivery_answer">
                Если обнаружены отклонения (не довезли товар, или привезли
                ненадлежащего качества) – обязательно сделайте соответствующую
                отметку в накладной. ВАЖНО, при обнаружении товара ненадлежащего
                качества или привезенного не в полном объеме – позвонить в
                компанию СтройкаСтор и сообщить об этом.
              </p>
            </Panel>
            <Panel
              header="У меня крупный заказ (5 и более тонн груза), у вас есть доставка и разгрузка манипулятором?"
              key="5"
            >
              <p className="delivery_answer">
                Услуга «Доставка манипулятором» включает только доставку и
                разгрузку товара. К сожалению, мы не осуществляем иные виды
                работ манипулятором. Разгрузка манипулятором запрещена под
                линией электропередач, над бытовыми объектами и заборами.
                Разгрузка манипулятором осуществляется на расстоянии 2-15 метров
                от кузова автомобиля в зависимости от технических характеристик
                манипулятора, т.е. в радиусе действия стрелы и в зоне прямой
                видимости места разгрузки. Также просим Вас обеспечить наличие
                стропальщика на месте разгрузки.
              </p>
            </Panel>
            <Panel
              header="Сколько времени дается на самостоятельную разгрузку товара?"
              key="6"
            >
              <p className="delivery_answer">
                до 1,5 тн - 30 минут с момента подачи <br /> от 3 тн до 5 тн – 1
                час <br /> для 10 тн – 1,5 часа <br /> для 20 тн – 2 часа
              </p>
            </Panel>
            <Panel
              header="Ваша доставка опоздала, как можно помочь вам улучшить свой уровень сервиса?"
              key="7"
            >
              <p className="delivery_answer">
                Если доставка опоздала на 1 сутки - мы компенсируем Вам 50%
                стоимости доставки, на 2 суток – мы компенсируем Вам полную
                стоимость доставки. Мы рады любой обратной связи от Вас,
                пожалуйста оставляйте отзывы на нашем сайте.
              </p>
            </Panel>
          </Collapse>
        </div>
      </section>
    </>
  );
};

export default DeliveryComponent;
