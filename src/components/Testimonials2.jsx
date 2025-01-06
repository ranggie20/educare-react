import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test from "../../src/assets/test-start.png";
import star from "../../src/assets/blog/star.png";
import pp from "../../src/assets/blog/pp.png";

const Testimonials2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section
        className="home3_bg mt_130 mb_130"
        // style={{ overflowX: "hidden" }}
      >
        <div className="container">
          <div className="text-center">
            <div className="testimonial_wrapper">
              <button
                className="greenButton2 mb_24 text-center"
                style={{ color: "white", height: 40 }}
              >
                <img src={test} alt="Testimonials" />
                Testimonials
              </button>
            </div>
            <h2 className="common_heading mb-3">
              Our Students <span style={{ color: "#6663FF" }}>Feedback</span>
            </h2>
            <p className="common_para">
              87% of people learning for professional development report career
              benefits <br /> like getting a promotion starting a new career in
              every world
            </p>
            <Slider {...settings} className="mt_32 home2_testimonial_slider">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="slide">
                  <div className="test_card">
                    <div className="mb_30 d-flex">
                      {[...Array(5)].map((_, starIndex) => (
                        <img key={starIndex} src={star} alt="Star" />
                      ))}
                    </div>
                    <p className="common_para text-lg-start text-center">
                      "This method is very flexible for me who works even
                      outside the city of Bandung. I have access to interactive
                      and flexible learning."
                    </p>
                    <div className="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                      <img src={pp} alt="Profile" />
                      <div className="profile_details_test text-lg-start text-center">
                        <h4 style={{ color: "#6663FF" }}>
                          Geraldine D. Anspach
                        </h4>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials2;
