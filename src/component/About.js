import React from "react";
import "../App.css";

function About() {
  return (
    <div>
      <div className="banner-image-about">
        <div className="about-business">
          <h2 className="about-business-text">OUR MISSION</h2>
          <p>
            🌱🌱 Our mission is to nurture the essence of pure agriculture and share it
            with the world. We are dedicated to cultivating and distributing the highest
            quality rice and cereals.🌱🌱
          </p>
        </div>
      </div>
      <div className="about-business-part">
        <h2 className="about-business-heading">About Shri Ganesh Kisan Vitaran</h2>
        <p className='about-business-para'>
          Shri Ganesh Kisan Vitaran is your dedicated source for premium quality rice and cereals.
        </p>
        <p className='about-business-para'>
           Based in Mirzapur district of Uttar Pradesh, we bring the richness of our fertile fields
           straight to your table.
        </p>
        <p className='about-business-para'>
           Our commitment lies in cultivating and delivering the finest grains,
           ensuring quality, sustainability, and local community engagement.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <p className='about-business-para'>
           🌾 YOUR SATISFACTION IS OUR HARVEST! 🌾
        </p>
      </div>
    </div>
  );
}

export default About;
