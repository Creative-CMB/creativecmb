import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";
import HeroImage from '../../assets/blog/LED.JPG';
import HeroImage2 from '../../assets/services/ad1.jpg';
import HeroImage3 from '../../assets/services/rent1.png';
import HeroImage4 from '../../assets/hero/hero4.png';


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <div>
             <div className="wrapper">
        <h1 style={{color:"#fff"}} className="weight800 font60">Services</h1>
        </div>
        <Slider {...settings}>
        
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={HeroImage} />
                    </div>
                    
                    <div className="details1">
                        <h2>Event Planning<span className="job-title"><h4>We are making customers satisfied by giving real experience of event</h4></span></h2>
                        
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={HeroImage2} />
                    </div>
                   
                    <div className="details">
                        <h2>Advertising<span className="job-title"><h5>Creative CMB Advertising is a leading Signage Company in Sri Lanka  and offering LED Signs
              , Neon sign, Digital Signs & Nameplates.</h5></span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={HeroImage3} />
                    </div>
                   
                    <div className="details1">
                        <h2>LED Rental <span className="job-title"><h4> We rent Sound System and Led lights for fair price</h4></span></h2>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    )
}

export default ImageSlider