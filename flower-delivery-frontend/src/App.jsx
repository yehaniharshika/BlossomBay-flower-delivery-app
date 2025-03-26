import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopup from "./components/LoginPopup/LoginPopup";

import Footer from "./components/Footer/Footer";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import NavigationBar from "./components/NavigationBar/NavigationBar";


const App = () => {

  const [showLogin,setShowLogin] =useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavigationBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myOrder" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
