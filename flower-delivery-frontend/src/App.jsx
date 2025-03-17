import { useState } from "react";
import "./App.css";
import Navigationbar from "./comoponents/Navigationbar/Navigationbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./comoponents/Footer/Footer";
import LoginPopup from "./comoponents/LoginPopup/LoginPopup";

const App = () => {

  const [showLogin,setShowLogin] =useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navigationbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
