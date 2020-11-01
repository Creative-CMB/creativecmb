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
              <h5>We advertise your brands all over Srilanka</h5>
              <h5>Eg:-Led boards,Banners..etc</h5>
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
                    <div className="col-md-3">

                       <Card imgsrc={ticket} title="Event Planning" para="Mega Exhibition will be held on 27th of november..."
                content={content} />
                           

                
                
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={event} title="Event planning" para="Codegen stepping up another stone in technology..."
                        content={content}
                        />
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={ad} title="Advertising" para="Music concert will be held on 10th of december..."
                        content={content1}/>
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={rent} title="System rental" para="Music concert will be held on 10th of december..."
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