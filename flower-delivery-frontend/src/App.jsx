import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./comoponents/Footer/Footer";
import LoginPopup from "./comoponents/LoginPopup/LoginPopup";
import NavigationBar from "./comoponents/Navigationbar/Navigationbar";

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
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
