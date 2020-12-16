import React from "react";
import Swiper from './swiper';
//SCSS
import "./partners.scss";

const partners = () => (
  <div id="partners">
    <div className=" d-flex justify-content-center">
    <h4 style={{color:"#fff"}} className="font20 weight600">Our Clients</h4>
</div>
    <div className="wrapper">
    
      <Swiper/>
    </div>
  </div>
);

export default partners;
