import React, { Component } from 'react';
import { Popover, Button } from 'antd';


import ticket from "../../assets/services/Servicetkt.png";
import event from "../../assets/services/Serviceevent.png";
import ad from "../../assets/services/Servicead.png";
import rent from "../../assets/services/Servicerent.png";
import Card from "../Services/Card";
import HeroImage from '../../assets/services/event.png';
import HeroImage2 from '../../assets/services/ad.png';
import HeroImage3 from '../../assets/services/rent1.png';
import "../Services/cardstyle.css";
import "antd/dist/antd.css";
import AOS from 'aos';
import 'aos/dist/aos.css';









class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    omponentDidMount() {
      AOS.init({
        // initialise with other settings
        duration:3000
      });
    }
   
    render() { 
        const content = (
            <div>
              <h5>We are making customers satisfied</h5>
              <h5>by giving real experience of event</h5>
            </div>
          );

          const content1 = (
            <div>
              <h5>Creative CMB Advertising is a leading Signage Company in Sri Lanka  and offering LED Signs</h5>
              <h5>, Neon sign, Digital Signs, Nameplates, 3D signs, Floor index signs, Particular signs, Metal Signs,</h5>
              <h5> and Digital LED Screens . We offer the total solution for your signage needs.</h5>
            </div>
          );

          const content2 = (
            <div>
              <h5>We rent Sound System and </h5>
              <h5>Led lights for fair price</h5>
            </div>
          );
        return ( 
            <>
            
            <div className="wrapper">
        <h1 style={{color:"#fff"}} className="weight800 font60">Services</h1>
        </div>
            
             <div className="container-fluid d-flex justify-content-center">
                <div className="card-deck">
                   
                    <div style={{color:"#fff"}} className="col-md-4 ">
                    <div data-aos="fade-right"class="container">
                    <img src={HeroImage} alt="Avatar" class="image"/>
                       <div class="overlay">
                    <div class="text">Event Planning<h4 style={{color:"#fff"}}>We are making customers satisfied by giving real experience of event</h4></div>
                   

                    </div>
                    </div>
                    </div>
                    <div className="col-md-4 ">
                    <div data-aos="fade-up" class="container">
  <img src={HeroImage2} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Advertising<h4 style={{color:"#fff"}}>Creative CMB Advertising is a leading Signage Company in Sri Lanka  and offering LED Signs, Neon sign, Digital Signs & Nameplates.</h4></div>
  </div>
</div>
                    </div>
                    <div className="col-md-4">
                    <div data-aos="fade-left" class="container">
  <img src={HeroImage3} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">LED Rental<h4 style={{color:"#fff"}}> We rent Sound System and Led lights for fair price</h4></div>
  </div>
</div>
                    </div>

                </div> 
               

               
</div>

            </>

         );
    }
}
 
export default Advertisement;