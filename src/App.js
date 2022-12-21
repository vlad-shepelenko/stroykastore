import { Home, Brands, Delivery, Refunds, Documentation, Contacts, Profile, Catalog, Category, Product, Orders, Cart, NotFound, Thanks } from './pages/index'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/styles/global_style.scss'
import {observer} from "mobx-react-lite";
import { createContext, useContext, useEffect} from 'react';
import { Context } from './index';

export const SubContext = createContext();

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} errorElement={<NotFound />} />
            <Route path='/home' element={<Home />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/delivery' element={<Delivery />} />
            <Route path='/refunds' element={<Refunds />} />
            <Route path='/documentation' element={<Documentation />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/category' element={<Category />} />
            <Route path='/product' element={<Product />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/thanks' element={<Thanks />} />
            <Route path='*' element={<NotFound />} />
            {/*<NotFound />*/}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default observer(App);
