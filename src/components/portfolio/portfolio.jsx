import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
import "antd/dist/antd.css";
import {Image} from "antd";
import AOS from 'aos';
import 'aos/dist/aos.css';

//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/port3.png";
import Preview2 from "../../assets/portfolio/port5.png";
import Preview3 from "../../assets/portfolio/port10.png";
import Preview4 from "../../assets/portfolio/port4.png";
import Preview5 from "../../assets/portfolio/port8.png";
import Preview6 from "../../assets/portfolio/port2.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // PORTFOLIO PROJECTS
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "LED Signage",
          tag: "Advertising",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Prime Minister",
          tag: "Events",
        },
        {
          id: "3",
          preview: Preview3,
          title: "LED Signage",
          tag: "Advertising",
        },
        {
          id: "4",
          preview: Preview4,
          title: "Decoration",
          tag: "Wedding",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Decoration",
          tag: "Wedding",
        },
        {
          id: "6",
          preview: Preview6,
          title: "One Galle Face",
          tag: "Events",
          
        },
      
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
    AOS.init({
      // initialise with other settings
      duration:1000
    });
  }



  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div  id="portfolio">
        <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" className="wrapper">
        <h1 style={{color:"#fff"}} className="weight800 font60">Gallery</h1>

          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div  className="portfolio__nav">
                <ul>
                  <li className={this.state.pickedFilter === "all" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("all")}>
                    ALL
                  </li>
                  <li
                    className={this.state.pickedFilter === "Events" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("Events")}
                  >
                    Events
                  </li>
                  <li
                    className={this.state.pickedFilter === "Advertising" ? "portfolio__nav-active font12" : "font12"}
                    onClick={() => this.filterGallery("Advertising")}
                  >
                    Advertising
                  </li>
                  <li className={this.state.pickedFilter === "Wedding" ? "portfolio__nav-active font12" : "font12"} onClick={() => this.filterGallery("Wedding")}>
                    Wedding
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={3}>
              <div  className="portfolio__filter" onMouseEnter={() => this.filterMenuHover(true)} onMouseLeave={() => this.filterMenuHover(false)}>
                <p style={{color:"#fff"}} className="font12">{this.state.pickedFilterDropdown} FIRST</p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid" columnClassName="mint__gallery">
            {projectsRender}
          </Masonry>
          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
