
import React, { Component } from 'react';
import 'whatsapp-button/whatsapp-button.js';
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero4.png';
import HeroImage2 from '../../assets/hero/hero5.png';
import HeroImage3 from '../../assets/hero/hero6.png';
import HeroImage4 from '../../assets/hero/hero7.png';

//Components
import Button from '../ui-components/button/button';
import Caro from "./Carosal"

import Carousel from 'react-bootstrap/Carousel'

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  

      
    <div className="hero">
      
     <div className="hero-info">

     
          <Carousel >
        <Carousel.Item interval={3000}>
          <div className="hero-image">
    <img
      className="d-block w-100"
      src={HeroImage}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
    <div className="">
            
        
            
          </div>
      <p>Creativity & innovation is to events, what the heart & soul is to the living</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <div className="hero-image">
    <img
      className="d-block w-100"
      src={HeroImage2}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
    <div className="">
            
        
            
          </div>
      <p>Creating the Best. Day. Ever.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <div className="hero-image">
    <img
      className="d-block w-100"
      src={HeroImage3}
      alt="First slide"
    />
    </div>
    <Carousel.Caption>
    <div className="">
          
        
            
          </div>
      <p>Every love story is beautiful, but yours should be unique!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <div className="hero-image">
    <img
      className="d-block w-100"
      src={HeroImage4}
      alt="First slide"
      title="Google Images"
    />
    </div>
    <Carousel.Caption>
    <div className="">
           
        
            
          </div>
      <p>Exclusive Events, Priceless Memories!</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  </div>
     </div>     
 );
  }
}
 
export default Hero ;

