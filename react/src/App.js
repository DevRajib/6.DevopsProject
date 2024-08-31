import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  HomePage,
  AboutPage,
  ContactPage,
  ShopPage,
  CartPage,
  ProductDetailsPage,
  ProfilePage,
  CheckOutPage,
  ErrorPage
} from "./Routes.js";
import "./App.css";
import LayOut from "./Pages/LayOut/LayOut.jsx";

const App = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [dropDown,setDropDown] = useState(false);
  const decrementQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementQuantity = () => {
    setCount(count + 1);
  };
  // const history = useNavigate();
  useEffect(()=>{
    if(window.location.pathname==="/"){
      setDropDown(false);
    }else if (window.location.pathname === "/shop"){
      setDropDown(false);
    }
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut dropDown={dropDown} setDropDown={setDropDown}/>}>
          <Route
            index
            element={
              <HomePage
                open={open}
                setOpen={setOpen}
                count={count}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
              />
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="signUp" element={<RegisterPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="shop"
            element={<ShopPage open={open} setOpen={setOpen} />}
          />
          <Route
            path="product/:name"
            element={
              <ProductDetailsPage
                count={count}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
              />
            }
          />

          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckOutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
