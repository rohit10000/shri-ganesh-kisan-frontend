import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Products from "../store/products.json";
import cartImage from "../images/cart1.svg";
import { useCartDispatch } from "../context/CartContext";

function Product() {

  const cartDispatch = useCartDispatch();

  return (
    <div>
      <div className="product-container">
        {Object.keys(Products).map((keyName) => {
          let product = Products[keyName];
          let id = product.id;
          let title = product.title;
          let imageUrl = product.img;
          let price = product.price;

          return (
            <div key={id} className="hvr-grow products">
              <h3 className="item-name">{title} </h3>
              <h2 className="item-price">₹{price} </h2>
              <Link key={id} to={`/product/${id}`}>
                <img
                  className="products-latest-image"
                  title={title}
                  alt={title}
                  src={imageUrl}
                />
              </Link>
              <br />
              <Tooltip title="Add to cart" aria-label="add to cart">
                <button
                  onClick={() => {
                    cartDispatch({
                        type: 'addToCart',
                        ...product
                    });
                  }}
                  className="cart-button"
                >
                  <img
                    className="cart-image"
                    src={cartImage}
                    alt="add to cart"
                  />
                </button>
              </Tooltip>
            </div>
          );
        })}
      </div>
      <div className="page-wrapper"></div>
    </div>
  );
}

export default Product;
