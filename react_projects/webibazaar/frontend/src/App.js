import React from 'react';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './product/productlist';
import SingleProduct from './product/singleproduct';
import Home from './comp/home'
import Signin from './comp/signin'
import Signup from './comp/signup';
import NewSubmit from './comp/NewSubmit';
import ForgetPassword from './comp/forgotpassword';
import Cart from './product/addToCart';
import Blog from './backendcomponents/blog';
import Services from './pages/services';
import Contact from './pages/contact';
import Aboutus from './pages/aboutus';
import Faq from './pages/faqpage';
import Pageerror from './pages/errorpage';
import CheckoutForm from './product/checkout';
import Shop from './pages/shop';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productlist" exact element={<ProductList />} />
        <Route path="/product/:productId" exact element={<SingleProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<NewSubmit />} />
        <Route path="/addToCart" exact element={<Cart />} />
        <Route path="/blog" exact element={<Blog />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/aboutus" exact element={<Aboutus />} />
        <Route path="/faqpage" exact element={<Faq />} />
        <Route path="/errorpage" exact element={<Pageerror />} />
        <Route path="/checkout" exact element={<CheckoutForm />} />
        <Route path="/shop" exact element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;




















