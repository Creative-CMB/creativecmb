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
            <div className="card-body text-dark ">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.para}
                </p>
                <Popover content={props.content}>

                <Button>view Details</Button>
                </Popover>
            </div>
        </div>    
    );
}



export default Card;