import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import 'swiper/swiper-bundle.css'
// Assets
import Preview01 from "../../assets/blog/concert1.png";
import Preview02 from "../../assets/blog/event3 1.png";
import Preview03 from "../../assets/blog/ad1 1.png";
import Preview04 from "../../assets/blog/event5 2.png";
import Preview05 from "../../assets/blog/pepsi 1.png";

// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "Music Concert!",
        description: "Lorem ipsum dolor sit amet, consectetur undo thes tabore et dolore magna aliqua.",
        date: "21 November 2020",
      },
      {
        image: Preview02,
        id: "2",
        title: "Birthday Party",
        description: "Lorem ipsum dolor undo thes tabore et dolore magna aliqua.",
        date: "27 November 2020",
      },
      {
        image: Preview03,
        id: "3",
        title: "LED Advertising",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "03 December 2020",
      },
      {
        image: Preview04,
        id: "4",
        title: "Office Party",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "15 December 2020",
      },
      {
        image: Preview05,
        id: "5",
        title: "Pepsi Led ",
        description: "Lorem tabore et dolore magna aliqua ipsum dolor undo thes.",
        date: "20 December 2020",
      },
      
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <div key={story.id}>
          <BlogBox article={story} />
        </div>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog" id="blog">
        <div className="wrapper">
          <Title title="Upcoming Projects" />
          <p className="font12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
          </p>
          <div className="padding30">
            <Swiper {...params}>{storiesRender}</Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
