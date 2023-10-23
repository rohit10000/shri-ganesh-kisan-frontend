import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../App.css";
import Button from "@mui/material/Button";
import { useShippingDispatch, useShipping } from "../../../context/ShippingContext";


// AddressForm
const AddressForm = ({ handleComplete}) => {

  const shippingDispatch = useShippingDispatch();
  const shipping = useShipping();

  const handleSubmit = (values) => {
    shippingDispatch({
      type: 'updateAddressInfo',
      country: values.country,
      city: values.city,
      state: values.state,
      pinCode: values.pinCode,
      address: values.address
    });
    setTimeout(() => {
      handleComplete();
      console.log(JSON.stringify(shipping, null, 2));
    }, 400);
  };

  const countryList = ["India"];

  return (
    <Formik
      initialValues={{
        address: shipping.addressInfo.address,
        city: shipping.addressInfo.city,
        state: shipping.addressInfo.state,
        pinCode: shipping.addressInfo.pinCode,
        country: shipping.addressInfo.country,
      }}
      validationSchema={Yup.object({
        //
        // Validate address
        address: Yup.string()
          .max(60, "Must be 60 characters or less")
          .required("required"),

        // Validate city
        city: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("required"),

        // Validate state
        state: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("required"),

        // Validate zipCode
        pinCode: Yup.string()
          .length(6)
          .required("required"),

        // Validate country
        country: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("required"),

        // //
      })}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched }) => (
        <div className="checkout-parent ">
          <div className="checkout-container">
            <h2>Address Info</h2>

            <Form className="checkout-form">
              <label htmlFor="address">HNo / Street / Area </label>
              <Field name="address" type="text" />
              <ErrorMessage name="address">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />

              <label htmlFor="city">City </label>
              <Field name="city" type="text" />
              <ErrorMessage name="city">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />

              <label htmlFor="state">State </label>
              <Field name="state" type="text" />
              <ErrorMessage name="state">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="pinCode">Pin Code </label>
              <Field name="pinCode" type="number" />
              <ErrorMessage name="pinCode">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />
              <label htmlFor="country">Country </label>
              <Field name="country" component="select" className="custom-select">
                <option value="">Select Country{" "}</option>
                {countryList.map((country) => {
                  return (
                    <option value={country}>{country}</option>
                  );
                })}
              </Field>
              <ErrorMessage name="country">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
              <br />

              <Button
                variant="contained"
                className="checkout-btn"
                type="submit"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default AddressForm;
