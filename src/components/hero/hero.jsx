
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
            <p className="font12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={HeroImage4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
  
          <div>
            
          </div>
        </Col>
      </Row>
    </div>
  </div>);
  }
}
 
export default Hero ;

