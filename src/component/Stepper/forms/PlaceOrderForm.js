import React from "react";
import { useCart, useCartDispatch } from "../../../context/CartContext";
import { useShipping, useShippingDispatch, initialShippingDetails } from "../../../context/ShippingContext";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import "../../../App.css";

// AddressForm
const PlaceOrderForm = ({ handleComplete }) => {
  const cart = useCart();
  const cartDispatch = useCartDispatch();

  const shipping = useShipping();
  const shippingDispatch = useShippingDispatch();

  const {firstName, lastName} = shipping.personalInfo;
  const {address, city, country, pinCode, state} = shipping.addressInfo;

  let totalAmount = cart.reduce((totalAmount, item) => totalAmount + item.quantity*item.price, 0);

  const handleSubmit = (values) => {
    setTimeout(() => {
      handleComplete();
      shippingDispatch({
        type: 'resetShippingDetails'
      });
      cartDispatch({
          type: 'resetCart'
      });
    }, 400);
  };
  return (
    <Formik
      initialValues={{}}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="place-order-parent">
          <div className="place-order-container">
            <h1>Order Summary</h1>
            <br />

            {/* Items */}

            {cart.map((product, index) => {
              // Variables
              let id = product.id;
              let name = product.name;
              let price = product.price;
              let quantity = product.quantity;

              return (
                <div key={id} className="items-container">
                  <p className="left">
                    {index + 1}.&nbsp; {name}(
                    <span className="item-quantity">{quantity}</span>)
                  </p>

                  <p className="right">
                    <strong>₹{price}</strong>
                  </p>
                  <br />
                  <br />
                </div>
              );
            })}

            {/* Delivery */}
            <>
              <br />
              <br />
              <p className="left">Delivery</p>

              <p className="right">
                <strong>Free</strong>
              </p>
              <br />
              <br />
            </>

            {/* Total */}

            <>
              <p className="left">Total</p>

              <p className="right">
                <strong>₹{totalAmount}</strong>
              </p>
              <br />
              <br />
            </>

            {/* Shipping Details */}

            <div className="shipping-container">
              <h2>( Shipping Details )</h2>
              <br />
              <p>
                {firstName} {lastName}
              </p>
              <br />
              <p>
                {address}, {city}, {state}, {pinCode}, {country}{" "}
              </p>
              <br />
              <p>Payment: "Cash On Delivery"</p>
              <br />
            </div>

            {/* Buttons */}
            <br />
            <Form autoComplete="off">
              <Button
                variant="contained"
                className="checkout-btn"
                type="submit"
                color="primary"
              >
                Place Order
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PlaceOrderForm;
