import { arrow } from "../../assets/images";
import { actionsData } from "../../assets/data";
import "./actions.scss";

const Actions = () => {
  return (
    <>
      <section className="actions_container">
        <div className="header_actions">
          <h2 className="title_actions">Акции</h2>
          <button className="all_actions">
            <div>Все акции</div>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="content_actions">
          {actionsData.map((el) => (
            <div className="cart_action" key={el.id}>
              <div className="image_action_container">
                <div className="action_amount">-25%</div>
                <img className="image_action" src={el.image} alt={el.name} />
              </div>
              <div className="cart_action_container">
                <div className="cart_action_desccription">
                  <div className="cart_action_name">{el.name}</div>
                  <div className="cart_action_price">
                    <div className="cart_action_newprice">{el.newPrice}</div>
                    <div className="cart_action_oldprice">{el.oldPrice}</div>
                  </div>
                </div>
                <div className="cart_action_button">
                  <button className="cart_butoon">В корзину</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Actions;
