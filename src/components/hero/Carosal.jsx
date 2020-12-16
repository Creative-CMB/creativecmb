import React, { Component } from 'react';
import { Carousel } from 'antd';
import HeroImage from '../../assets/blog/LED.JPG';
import HeroImage2 from '../../assets/hero/hero5.png';
import HeroImage3 from '../../assets/hero/hero6.png';
import HeroImage4 from '../../assets/hero/hero7.png';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',

    
  };
  const contentStyle1 = {
    height: '50px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
 class Carosal extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <>
             <Carousel autoplay>
         
    <div>
      <h3 style={contentStyle}>

      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
             </>
          );
     }
 }
  
 export default Carosal;