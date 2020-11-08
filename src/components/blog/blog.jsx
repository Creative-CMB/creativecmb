import React from "react";
import Swiper from "react-id-swiper";
// SCSS
import "./blog.scss";
import 'swiper/swiper-bundle.css'
// Assets
import Preview01 from "../../assets/blog/IMG_2627.png";
import Preview02 from "../../assets/blog/IMG_6662.HEIC";
import Preview03 from "../../assets/blog/hika.png";
import Preview04 from "../../assets/blog/ships.png";
import Preview05 from "../../assets/blog/IMG_2619.png";

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
        title: "Music Concert",
        description: "One Galle Face staff Appreciation Night event here at The Shangri-La Colombo!",
        date:"23rd of January,2020"
      },
      {
        image: Preview02,
        id: "2",
        title: "Wedding Reception",
        description: "Creative CMB is here to Design Your Perfect Wedding Package with sound and lighting." ,
        date:"7th of September,2020"
      },
      {
        image: Preview03,
        id: "3",
        title: "LED Advertising",
        description: "The man who stop advertising to save money is the man who stops the clock to save time.",
        date:"16th of September,2020"

        
      },
      {
        image: Preview05,
        id: "4",
        title: "Cashwagon Ceremony",
        description: " Team Creative CMB is here to assist you with the best in Sound | Lighting | Audio Visual.",
        date:"21st of January,2020"

      },
      {
        image: Preview04,
        id: "5",
        title: "Get together party",
        description: "Event organized at the Sri Lankas largest floating restaurant vessel Gartons arch.",
        date:"22nd of September,2020"

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
          <Title title="Our Portfolio" />
          <p className="">
            Take a Look what we have done so far.<br></br>
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
