import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/add.png';
import ContactInfoIcon2 from "../../../assets/contact/pho.png";
import ContactInfoIcon3 from "../../../assets/contact/web.png";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="1211 Awesome Avenue,"
            textLine2="NY USD"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine1="+94 775465435"
            textLine2="+94 765565466"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="creativecmb.com"
            textLine2=""
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
