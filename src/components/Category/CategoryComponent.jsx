import "./category.scss";
import { Slider, Select, Pagination, Checkbox, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useState, useRef, useContext } from "react";
import { buttonFilters } from "../../assets/images";
import { Modal } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductService from '../../service/ProductService';
import CartService from '../../service/CartService';
import { useNavigate } from "react-router-dom";
import { Context } from "../..";
import {observer} from "mobx-react-lite";
import { toJS } from "mobx";


const useSize = (target) => {
  const [size, setSize] = useState();
  useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

const CategoryComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState('')
  const [userId, setUserId] = useState('')
  const {store} = useContext(Context)
  const [messageApi, contextHolder] = message.useMessage();
  const subcategoryName = location.state.subs;
  const dataProd = location.state.products;

  console.log(subcategoryName)
  console.log(dataProd)

  const target = useRef(null); 
  const size = useSize(target);
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };

  useEffect(() => {
    console.log("jopa")
    setAuth(store.isAuth)
  },[])

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleGoToProduct = async (id) => {
    console.log(id)
    const dataProduct = await getProductById(id)
    const {product, supplier} = dataProduct
    navigate('/product', {state: {product, supplier}})
  }

  async function getProductById(id){
    try{
      const response = await ProductService.getProductById(id);
      return(response.data)
    }catch(e){
      console.log(e)
    }
  }

  const handleAddToCart = async(e, product) => {
    e.stopPropagation();
    if(auth){
      try{
        const user = toJS(store.user)
        const response = await CartService.setCart(user.id, product, 1)
        successAuthorization()
        return response.data
      }
      catch(e){
        console.log(e)
      }
    }
    else{
      console.log("not authorized")
      errorAuthorization()
    }
    console.log("buttonClick")
  }

  const errorAuthorization = () => {
    messageApi.open({
      type: "error",
      content: 
        "Вы не авторизованы! Для добавления товара в корзину авторизуйтесь!"
    })
  }

  const successAuthorization = () => {
    messageApi.open({
      type: "success",
      content: 
        "Товар успешно добавлен в корзину!"
    })
  }
  console.log(userId)
  console.log(auth)
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
    {contextHolder}
      <section ref={target} className="category_section">
        <div className="category_header_section">
          <span className="category_header_navigation">
            Главная → Каталог → Стройматериалы → {subcategoryName}
          </span>
          <h1 className="category_header_title">{subcategoryName}</h1>
        </div>
        <div className="category_products_section">
          <div className="category_products_filter">
            <section className="category_filter_section">
              <section className="category_filter_price">
                <label className="category_products_filter_label">Цена</label>
                <div className="category_products_filter_price_container">
                  <input
                    className="category_products_filter_price_input"
                    type="text"
                    placeholder="10"
                  />
                  <input
                    className="category_products_filter_price_input"
                    type="text"
                    placeholder="1000"
                  />
                </div>
                <Slider
                  range={{
                    draggableTrack: true,
                  }}
                  defaultValue={[20, 50]}
                />
              </section>
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
                      borderTop: "1px solid rgba(140, 140, 140, 0.35)",
                      borderBottom: "1px solid rgba(140, 140, 140, 0.35)",
                    }}
                  >
                    <InfiniteScroll
                      dataLength={data.length}
                      hasMore={data.length < 50}
                      scrollableTarget="scrollableDiv"
                    >
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                      <div className="brand_name_filter">
                        <Checkbox onChange={onChange}>Jopa</Checkbox>
                      </div>
                    </InfiniteScroll>
                  </div>
                </div>
              </div>
              <div className="category_products_filter_provider">
                <span className="category_products_filter_label">
                  Поставщик
                </span>
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
            </section>
            <div className="category_filter_divider" />
            <section className="category_filter_buttons">
              <button className="category_products_button_apply">
                Применить
              </button>
              <button className="category_products_button_clear">
                Сбросить
              </button>
            </section>
          </div>
          <div className="category_products_container">
            {size !== undefined && size.width <= 1439 ? (
              <div onClick={() => setShow(true)} className="button_filter">
                <img src={buttonFilters} alt="filter" />
                <span>Фильтры</span>
              </div>
            ) : null}
            <div className="category_products_sort">
              <span className="category_products_sort_item">Популярные</span>
              <span className="category_products_sort_item">Дешевле</span>
              <span className="category_products_sort_item">Дороже</span>
              <span className="category_products_sort_item">По алфавиту</span>
            </div>
            <div className="category_products_cart_container">
              {dataProd && dataProd.length > 0 ? dataProd.map((el) => (
                <div onClick={() => handleGoToProduct(el._id)} className="category_product_cart" key={el._id}>
                  <img
                    className="category_product_cart_image"
                    src={el.productImage}
                    alt="product"
                  />
                  <div className="category_product_cart_content">
                    <div className="category_product_cart_description">
                      <span className="category_product_cart_name">
                        {el.productName}
                      </span>
                      <span className="category_product_cart_price">
                        {el.productPrice}
                      </span>
                    </div>
                    <button onClick={(e) => handleAddToCart(e, el._id)} className="category_product_cart_button">
                      В корзину
                    </button>
                  </div>
                </div>
              )):<h1>По вашему запросу ничего не найдено</h1>}
            </div>
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </section>
      <Modal centered open={show} onCancel={handleCancel} width={370}>
        <div className="category_products_filter_modal">
          <section className="category_filter_section">
            <section className="category_filter_price">
              <label className="category_products_filter_label">Цена</label>
              <div className="category_products_filter_price_container">
                <input
                  className="category_products_filter_price_input"
                  type="text"
                  placeholder="10"
                />
                <input
                  className="category_products_filter_price_input"
                  type="text"
                  placeholder="1000"
                />
              </div>
              <Slider
                range={{
                  draggableTrack: true,
                }}
                defaultValue={[20, 50]}
              />
            </section>
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
                    borderTop: "1px solid rgba(140, 140, 140, 0.35)",
                    borderBottom: "1px solid rgba(140, 140, 140, 0.35)",
                  }}
                >
                  <InfiniteScroll
                    dataLength={data.length}
                    hasMore={data.length < 50}
                    scrollableTarget="scrollableDiv"
                  >
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
                    <div className="brand_name_filter">
                      <Checkbox onChange={onChange}>Jopa</Checkbox>
                    </div>
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
          </section>
          <div className="category_filter_divider" />
          <section className="category_filter_buttons">
            <button className="category_products_button_apply">
              Применить
            </button>
            <button className="category_products_button_clear">Сбросить</button>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default observer(CategoryComponent);
