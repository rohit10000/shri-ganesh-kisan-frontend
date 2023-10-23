import React from "react";
import "../App.css";
import clearCartImage from "../images/empty-cart.svg";
import crossImage from "../images/cross3.svg";
import { useCart, useCartDispatch } from "../context/CartContext";
import SummaryCard from "./SummaryCard";

function Cart() {

  const cart = useCart();
  const cartDispatch = useCartDispatch();
  let totalAmount = cart.reduce((totalAmount, item) => totalAmount + item.quantity*item.price, 0);
  let totalItems = cart.length;

  return (
    <div>
      <SummaryCard items={totalItems} amount={totalAmount} />
      {/* Get Products */}
      <div className="cart-container">
        {cart.map((product) => {
              // variables
              let id = product.id;
              let title = product.name;
              let imageUrl = product.img;
              let price = product.price;
              let quantity = product.quantity;
              return (
                <div key={id} className="cart-products">
                  <h3 className="cart-item-name">{title} </h3>
                  <button
                    className="remove-btn hvr-grow"
                    onClick={() => {
                        cartDispatch({
                            type: 'removeFromCart',
                            id: product.id
                        });
                    }}
                  >
                    {" "}
                    <img
                      src={crossImage}
                      height={30}
                      alt="Remove"
                      title="Remove"
                    />{" "}
                  </button>
                  <br />
                  <h2 className="item-price-cart"> ₹{price} </h2>
                  <label htmlFor="quantity">Items</label>{" "}
                  <button
                    className="item-button"
                    onClick={() => {
                        cartDispatch({
                            type: 'decrementItemQuantity',
                            id: product.id
                        });
                    }}
                  >
                    -
                  </button>
                  <input
                    readOnly
                    className="quantity"
                    maxLength="3"
                    type="text"
                    id={product.id}
                    value={quantity}
                  />
                  <button
                    className="item-button"
                    onClick={() => {
                        cartDispatch({
                            type: 'incrementItemQuantity',
                            id: product.id
                        });
                    }}
                  >
                    +
                  </button>
                  <br />
                  <img className="cart-item-image" alt={title} src={imageUrl} />
                  <br />
                </div>
              );
          })}
      </div>
    </div>
  );
}

export default Cart;
