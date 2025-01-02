import React from "react";
import test from "../../src/assets/test-start.png"
import star from "../../src/assets/blog/star.png"
import pp from "../../src/assets/blog/pp.png"

const Testimonials2 = () => {
  return (
    <div>
      <section
        className="home3_bg mt_130 mb_130"
        style={{ overflowX: "hidden" }}
      >
        <div className="container">
          <div className="item">
            <div className="text-center">
              <div
                className="testimonial_wrapper wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="100ms"
              >
                <button
                  className="greenButton2 mb_24 text-center"
                  style={{ color: "white", height: 40 }}
                >
                  <img src={test} alt />
                  Testimonials
                </button>
              </div>
              <h2
                className="common_heading mb-3 wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="200ms"
              >
                Our Students <span style={{ color: "#6663FF" }}>Feedback</span>
              </h2>
              <p
                className="common_para wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="300ms"
              >
                87% of people learning for professional development report
                career benefits <br /> like getting a promotion starting a new
                career in every world
              </p>
              <div
                className=" slick-slider row mt_32 home2_testimonial_slider"
                style={{ paddingBottom: 50 }}
              >
                <div className="slide col-lg-4">
                  <div
                    className="test_card wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay="300ms"
                  >
                    <div className="mb_30 d-flex">
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                    </div>
                    <p className="common_para text-lg-start text-center">
                      "This method is very flexible for me who works even
                      outside the city of Bandung. I have access to interactive
                      and flexible learning. "
                    </p>
                    <div className="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                      <img src={pp} alt />
                      <div className="profile_details_test text-lg-start text-center">
                        <h4 style={{ color: "#6663FF" }}>
                          Geraldine D. Anspach
                        </h4>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide col-lg-4 mb-lg-0 mb-4 mt-lg-0 mt-4">
                  <div
                    className="test_card wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay="400ms"
                  >
                    <div className="mb_30 d-flex">
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                    </div>
                    <p className="common_para text-lg-start text-center">
                      "This method is very flexible for me who works even
                      outside the city of Bandung. I have access to interactive
                      and flexible learning. "
                    </p>
                    <div className="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                      <img src={pp} alt />
                      <div className="profile_details_test text-lg-start text-center">
                        <h4 style={{ color: "#6663FF" }}>
                          Geraldine D. Anspach
                        </h4>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide col-lg-4">
                  <div
                    className="test_card wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay="500ms"
                  >
                    <div className="mb_30 d-flex">
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                    </div>
                    <p className="common_para text-lg-start text-center">
                      "This method is very flexible for me who works even
                      outside the city of Bandung. I have access to interactive
                      and flexible learning. "
                    </p>
                    <div className="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                      <img src={pp} alt />
                      <div className="profile_details_test text-lg-start text-center">
                        <h4 style={{ color: "#6663FF" }}>
                          Geraldine D. Anspach
                        </h4>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide col-lg-4">
                  <div
                    className="test_card wow fadeInUp"
                    data-wow-duration="1.05s"
                    data-wow-delay="600ms"
                  >
                    <div className="mb_30 d-flex">
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                      <img src={star} alt />
                    </div>
                    <p className="common_para text-lg-start text-center">
                      "This method is very flexible for me who works even
                      outside the city of Bandung. I have access to interactive
                      and flexible learning. "
                    </p>
                    <div className="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                      <img src={pp} alt />
                      <div className="profile_details_test text-lg-start text-center">
                        <h4 style={{ color: "#6663FF" }}>
                          Geraldine D. Anspach
                        </h4>
                        <p>UI/UX Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials2;
