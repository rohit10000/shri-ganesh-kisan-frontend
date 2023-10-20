import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import Nav from "./Nav";
import About from "./About";
import Cart from "./Cart";
import Checkout from "./Checkout";

function RouterFunction() {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" component={() => <h2>404 Not Found </h2>} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterFunction;
