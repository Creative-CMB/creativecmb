
import React, { Component } from 'react';
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero1.png';
import HeroImage2 from '../../assets/hero/hero2.png';
import HeroImage3 from '../../assets/hero/hero3.png';
import HeroImage4 from '../../assets/hero/hero4.png';

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
    return (  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Welcome!!!</h1>
            <h1 className="weight800 font60">
              We Are CreativeCMB
            </h1>
            <p className="">
            What you need, is an Event, to remember for a lifetime
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>

          <Carousel >
        <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage}
      alt="First slide"
    />
    <Carousel.Caption>
     
      <p>Creativity & innovation is to events, what the heart & soul is to the living</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage2}
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p>Creating the Best. Day. Ever.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage3}
      alt="First slide"
    />
    <Carousel.Caption>
     
      <p>Every love story is beautiful, but yours should be unique!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage4}
      alt="First slide"
    />
    <Carousel.Caption>
      <p>Exclusive Events, Priceless Memories!</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  
          
        </Col>
      </Row>
    </div>
  </div>);
  }
}
 
export default Hero ;

