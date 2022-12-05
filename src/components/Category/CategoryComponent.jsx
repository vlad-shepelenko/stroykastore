import "./category.scss";
import { Slider, Select, Pagination } from "antd";
import { Divider } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { productCategoryData } from "../../assets/data";

const CategoryComponent = () => {
  const data = [
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
    "Test",
  ];
  return (
    <>
      <section className="category_section">
        <div className="category_header_section">
          <span className="category_header_navigation">
            Главная → Каталог → Стройматериалы → Сухие смеси
          </span>
          <h1 className="category_header_title">Сухие смеси</h1>
        </div>
        <div className="category_products_section">
          <div className="category_products_filter">
            <label className="category_products_filter_label">Цена</label>
            <div className="category_products_filter_price_container">
              <input
                className="category_products_filter_price_input"
                type="text"
              />
              <input
                className="category_products_filter_price_input"
                type="text"
              />
            </div>
            <Slider
              range={{
                draggableTrack: true,
              }}
              defaultValue={[20, 50]}
            />
            <div className="category_products_filter_brand">
              <span className="category_products_filter_label">Бренд</span>
              <input
                className="category_products_filter_search"
                type="search"
                placeholder="Поиск"
              />
              <div>
                <div
                  id="scrollableDiv"
                  style={{
                    height: 400,
                    overflow: "auto",
                    padding: "0 16px",
                    border: "1px solid rgba(140, 140, 140, 0.35)",
                  }}
                >
                  <InfiniteScroll
                    dataLength={data.length}
                    hasMore={data.length < 50}
                    endMessage={
                      <Divider plain>It is all, nothing more 🤐</Divider>
                    }
                    scrollableTarget="scrollableDiv"
                  >
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                    <div>Jopa</div>
                  </InfiniteScroll>
                </div>
              </div>
            </div>
            <div className="category_products_filter_provider">
              <span className="category_products_filter_label">Поставщик</span>
              <Select
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Not Identified",
                  },
                  {
                    value: "2",
                    label: "Closed",
                  },
                  {
                    value: "3",
                    label: "Communicated",
                  },
                  {
                    value: "4",
                    label: "Identified",
                  },
                  {
                    value: "5",
                    label: "Resolved",
                  },
                  {
                    value: "6",
                    label: "Cancelled",
                  },
                ]}
              />
            </div>
            <hr />
            <button className="category_products_button_apply">
              Применить
            </button>
            <button className="category_products_button_clear">Сбросить</button>
          </div>
          <div className="category_products_container">
            <div className="category_products_sort">
              <span className="category_products_sort">Популярные</span>
              <span className="category_products_sort">Дешевле</span>
              <span className="category_products_sort">Дороже</span>
              <span className="category_products_sort">По алфавиту</span>
            </div>
            <div className="category_products_cart_container">
              {productCategoryData.map((el) => (
                <div className="category_product_cart" key={el.id}>
                  <img
                    className="category_product_cart_image"
                    src={el.image}
                    alt="product"
                  />
                  <div className="category_product_cart_content">
                    <div className="category_product_cart_description">
                      <span className="category_product_cart_name">
                        {el.name}
                      </span>
                      <span className="category_product_cart_price">
                        {el.price}
                      </span>
                    </div>
                    <button className="category_product_cart_button">
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryComponent;
