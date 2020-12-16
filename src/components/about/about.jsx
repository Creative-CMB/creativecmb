import React, {useEffect} from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
import AOS from "aos";
import 'aos/dist/aos.css';

// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/team.JPG";
import Person02 from "../../assets/about/naweed.png";



const About = () => {
  useEffect(() => {
    AOS.init({
      duration : 3000
    });
  }, []);
  return(
  <div id="about">
    <div data-aos="fade-up" className="wrapper">
    <h1 style={{color:"#fff"}} className="weight800 font60">About US</h1>
      <p className="font12">
        
      </p>
      <Row>
        <Col md={12} lg={6}>
          <TeamBox avatar={Person01} />
        </Col>
       
        <Col md={12} lg={6}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);
  };

export default About;
