import React from "react";
import Slider from "react-slick";
import yellowStart from "../../assets/home3/yellowstart.png";
import testi1 from "../../assets/home3/testi1.png";

const Home3Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Single slide at a time for testimonials
    slidesToScroll: 1,
    arrows: true, // Enable next/previous arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home3">
      <section
        className="testimonial2 home3_bg mb_130"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="container slick-slider_test2 home3_testimonial_slider">
          <Slider {...settings}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="slide text-center">
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <button className="home3_button mb_24">
                    <img src={yellowStart} alt="star" />
                    Testimonials
                  </button>
                  <h2 className="category_title wc border_bottom fs_44">
                    Our Students <span className="yc"> Feedback</span>
                  </h2>
                  <p className="grey_text_1 mt_61" style={{width:"700px"}}>
                    "Educare is revolutionizing the education sector. The site
                    is creative and interesting, and the content is of the
                    highest caliber. I value the convenience of learning from
                    anywhere, and the tailored learning environment has kept me
                    motivated and on task. The instructors are supportive and
                    knowledgeable."
                  </p>
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid mt_56" src={testi1} alt="testimonial" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home3Testimonial;
