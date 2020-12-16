import React from 'react';
import "./cardstyle.css";
import { Popover, Button} from 'antd';
import "antd/dist/antd.css";











const Card = props=>{
    
   

    
    return(           

        <div className="card1 text-center shadow ">

            <div className="overflow" className="center">
           
                <img src={props.imgsrc} alt="Exhibition" />
                
            </div>

            <div className="card-body text ">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}
                </p>
               
            </div>
            </div>
    );
}



export default Card;