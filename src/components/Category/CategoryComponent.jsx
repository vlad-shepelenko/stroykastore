import "./category.scss";
import { Slider, Select, Pagination, Checkbox, message } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import useResizeObserver from "@react-hook/resize-observer";
import { useLayoutEffect, useState, useRef, useContext } from "react";
import { buttonFilters } from "../../assets/images";
import { Modal } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BrandsService from "../../service/BrandsService";
import ProductService from "../../service/ProductService";
import CartService from "../../service/CartService";
import SupplierService from "../../service/SupplierService";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
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
  const [auth, setAuth] = useState("");
  const [userId, setUserId] = useState("");
  const { store } = useContext(Context);
  const [messageApi, contextHolder] = message.useMessage();
  const subcategoryName = location.state.subs;
  const [dataProd, setDataProd] = useState(location.state.products);
  const [count, setCount] = useState(0);
  const [brands, setBrands] = useState("");
  const [supplier, setSupplier] = useState("");
  const [searchName, setSearchName] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [changedMinPrice, setChangedMinPrice] = useState(0);
  const [changedMaxPrice, setChangedMaxPrice] = useState(0);
  const [supplierId, setSupplierId] = useState("");

  let filteredBrand = [];

  console.log(subcategoryName);
  console.log(dataProd);
  console.log(dataProd.length);

  const target = useRef(null);
  const size = useSize(target);
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };

  useEffect(() => {
    setAuth(store.isAuth);
  }, []);

  useEffect(() => {
    getBrands();
    getSuppliers();
    getProducts();
  }, []);

  const getBrands = async () => {
    const brandsArray = await BrandsService.getAllBrands();
    setBrands(brandsArray.data);
  };

  const getProducts = async () => {
    const productsArray = await ProductService.getProducts();
    console.log(productsArray.data);

    setMinPrice(
      productsArray.data.sort(byFieldAsc("productPrice"))[0].productPrice
    );
    setMaxPrice(
      productsArray.data.sort(byFieldDesc("productPrice"))[0].productPrice
    );
    setChangedMinPrice(minPrice);
    setChangedMaxPrice(maxPrice);
    console.log("MAX", maxPrice);
    console.log("MIN", minPrice);
  };

  console.log("MAX", maxPrice);
  console.log("MIN", minPrice);
  const getSuppliers = async () => {
    const suppliersArray = await SupplierService.getSuppliers();
    const arrayData = suppliersArray.data;
    const suppliers = [];
    arrayData.map((el) => {
      suppliers.push({ value: el._id, label: el.supplierName });
      console.log(el);
    });
    setSupplier(suppliers);
  };

  const onChange = (e, brand) => {
    console.log(brand);
    filteredBrand.push(brand._id);
  };

  const onSliderChange = (e) => {
    setChangedMinPrice(e[0]);
    setChangedMaxPrice(e[1]);
  };

  const supplierChange = (e) => {
    setSupplierId(e);
  };

  const filterProducts = async () => {
    setShow(false)
    let test = await ProductService.getFilterProducts(
      changedMinPrice,
      changedMaxPrice,
      filteredBrand,
      supplierId
    );
    setDataProd(test.data);
  };

  const handleGoToProduct = async (id) => {
    console.log(id);
    const dataProduct = await getProductById(id);
    const { product, supplier } = dataProduct;
    navigate("/product", { state: { product, supplier } });
  };

  async function getProductById(id) {
    try {
      const response = await ProductService.getProductById(id);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  const sortByAsc = (fieldName) => {
    console.log(fieldName);
    let data = dataProd.sort(byFieldAsc(`${fieldName}`));
    setDataProd(data);
    setCount(count + 1);
    console.log(dataProd);
  };

  const sortByDesc = (fieldName) => {
    let data = dataProd.sort(byFieldDesc(`${fieldName}`));
    setDataProd(data);
    setCount(count + 1);
    console.log(dataProd);
  };

  function byFieldAsc(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }

  function byFieldDesc(field) {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }

  const handleAddToCart = async (e, product) => {
    e.stopPropagation();
    if (auth) {
      try {
        const user = toJS(store.user);
        const response = await CartService.setCart(user.id, product, 1);
        successAuthorization();
        return response.data;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("not authorized");
      errorAuthorization();
    }
    console.log("buttonClick");
  };

  const handleReset = () => {
    setChangedMinPrice(minPrice);
    setChangedMaxPrice(maxPrice);
    setCount(count + 1);
  };

  const errorAuthorization = () => {
    messageApi.open({
      type: "error",
      content:
        "Вы не авторизованы! Для добавления товара в корзину авторизуйтесь!",
    });
  };

  const marks = {
    0: `${minPrice}`,
    100: `${maxPrice}`,
  };

  const successAuthorization = () => {
    messageApi.open({
      type: "success",
      content: "Товар успешно добавлен в корзину!",
    });
  };

  const handleSearch = (event) => {
    setSearchName(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      let searchBrand = [];
      brands.map((el) => {
        console.log(el.brandName.match(`${searchName}`));
        if (el.brandName.match(searchName) !== null) {
          searchBrand.push(el);
        }
      });

      setBrands(searchBrand);
      if (searchName.length === 0) getBrands();
      console.log(brands);
    }
  };

  console.log(userId);
  console.log(auth);
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
            Главная → Каталог → {subcategoryName}
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
                    disabled="false"
                    className="category_products_filter_price_input"
                    type="number"
                    placeholder={changedMinPrice}
                  />
                  <input
                    disabled="false"
                    className="category_products_filter_price_input"
                    type="number"
                    placeholder={changedMaxPrice}
                  />
                </div>
                <Slider
                  range
                  marks={marks}
                  defaultValue={[0, 100]}
                  onAfterChange={onSliderChange}
                  min={minPrice}
                  max={maxPrice}
                />
              </section>
              <div className="category_products_filter_brand">
                <span className="category_products_filter_label">Бренд</span>
                <input
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  className="category_products_filter_search"
                  type="text"
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
                      dataLength={20}
                      hasMore={dataProd.length < 50}
                      scrollableTarget="scrollableDiv"
                    >
                      {brands
                        ? brands.map((el) => (
                            <div className="brand_name_filter">
                              <Checkbox onChange={(e) => onChange(e, el)}>
                                {el.brandName}
                              </Checkbox>
                            </div>
                          ))
                        : null}
                    </InfiniteScroll>
                  </div>
                </div>
              </div>
              <div className="category_products_filter_provider">
                <span className="category_products_filter_label">
                  Поставщик
                </span>
                <Select
                  onChange={supplierChange}
                  showSearch
                  style={{
                    width: 200,
                  }}
                  placeholder="Выберите поставщика"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={supplier}
                />
              </div>
            </section>
            <div className="category_filter_divider" />
            <section className="category_filter_buttons">
              <button
                onClick={filterProducts}
                className="category_products_button_apply"
              >
                Применить
              </button>
              <button
                onClick={handleReset}
                className="category_products_button_clear"
              >
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
            {<div style={{ display: "none" }}>count</div>}
            <div className="category_products_sort">
              <span
                onClick={() => sortByAsc("productName")}
                className="category_products_sort_item"
              >
                По алфавиту (А-Я)
              </span>
              <span
                onClick={() => sortByDesc("productName")}
                className="category_products_sort_item"
              >
                По алфавиту (Я-А)
              </span>
              <span
                onClick={() => sortByAsc("productPrice")}
                className="category_products_sort_item"
              >
                Дешевле
              </span>
              <span
                onClick={() => sortByDesc("productPrice")}
                className="category_products_sort_item"
              >
                Дороже
              </span>
            </div>
            <div className="category_products_cart_container">
              {dataProd && dataProd.length > 0 ? (
                dataProd.map((el) => (
                  <div
                    onClick={() => handleGoToProduct(el._id)}
                    className="category_product_cart"
                    key={el._id}
                  >
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
                      <button
                        onClick={(e) => handleAddToCart(e, el._id)}
                        className="category_product_cart_button"
                      >
                        В корзину
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <h1>По вашему запросу ничего не найдено</h1>
              )}
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
                    disabled="false"
                    className="category_products_filter_price_input"
                    type="number"
                    placeholder={changedMinPrice}
                  />
                  <input
                    disabled="false"
                    className="category_products_filter_price_input"
                    type="number"
                    placeholder={changedMaxPrice}
                  />
              </div>
              <Slider
                  range
                  marks={marks}
                  defaultValue={[0, 100]}
                  onAfterChange={onSliderChange}
                  min={minPrice}
                  max={maxPrice}
                />
            </section>
            <div className="category_products_filter_brand">
              <span className="category_products_filter_label">Бренд</span>
              <input
                className="category_products_filter_search"
                type="text"
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
                    dataLength={20}
                    hasMore={data.length < 50}
                    scrollableTarget="scrollableDiv"
                  >
                    {brands
                      ? brands.map((el) => (
                          <div className="brand_name_filter">
                            <Checkbox
                              onChange={(e) => onChange(e, el.brandName)}
                            >
                              {el.brandName}
                            </Checkbox>
                          </div>
                        ))
                      : null}
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
                options={supplier}
              />
            </div>
          </section>
          <div className="category_filter_divider" />
          <section className="category_filter_buttons">
            <button onClick={filterProducts} className="category_products_button_apply">
              Применить
            </button>
            <button onClick={handleReset} className="category_products_button_clear">Сбросить</button>
          </section>
        </div>
      </Modal>
    </>
  );
};

export default observer(CategoryComponent);
