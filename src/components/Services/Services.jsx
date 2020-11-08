import React, { Component } from 'react';
import { Popover, Button } from 'antd';


import ticket from "../../assets/services/Servicetkt.png";
import event from "../../assets/services/Serviceevent.png";
import ad from "../../assets/services/Servicead.png";
import rent from "../../assets/services/Servicerent.png";
import Card from "../Services/Card";
import "../Services/cardstyle.css";
import "antd/dist/antd.css";









class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
            <div className="container-fluid d-flex justify-content-center">
            <h4 className="font20 weight800">Our Services</h4>
            </div>
             <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                   
                    <div className="col-md-4">
                        <Card imgsrc={event} title="Event planning" 
                        content={content}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={ad} title="Advertising" 
                        content={content1}/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={rent} title="LED rental" 
                        content={content2}
                        />
                    </div>

                </div> 
               

               
</div>

            </>

         );
    }
}
 
export default Advertisement;