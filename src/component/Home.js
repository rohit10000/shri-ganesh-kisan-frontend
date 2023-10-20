import React from "react";
import LatestProducts from "../store/latestProducts.json";

function Home() {
  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">Welcome to Shri Ganesh Kisan Vitaran!</span>
        <br />
        <div className="tagline-para">
          We take immense pride in being your trusted source for premium quality rice and cereals.
          As a dedicated farmer with a passion for agriculture, we bring the bounty of our fertile
          fields straight to your table.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Latest Yield</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
            {Object.keys(LatestProducts).map((keyName) => {
              const product = LatestProducts[keyName];
              return (
                <div className="home-products" key={product.key}>
                  <img
                    className="products-latest-image"
                    alt={product.name}
                    src={product.img}
                  />
                  <h3 className="item-name">{product.name}</h3>
                  <h3 className="item-price">₹{product.price}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
