import React from 'react'
// import '../../Home2/Home2.css';

import top_categories from '../../../assets/home2/top_categories.png'
import whatweare from '../../../assets/home2/whatweare-img.png';
import icon1 from '../../../assets/home2/whatweare-icon1.png';
import icon2 from '../../../assets/home2/whatweare-icon2.png';
import icon3 from '../../../assets/home2/whatweare-icon3.png';

const BestCarrierOffer = () => {
  return (
    <>
       <section className="whatweare" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse align-items-center">
          <div className="col-lg-6">
            <div
              className="whatweare_img wow fadeInLeft"
              data-wow-duration="1.05s"
              data-wow-delay="100ms"
            >
              <img className="img-fluid" src={whatweare} alt="img" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="whatweare_right">
              <div className="section_heading mb_32">
                <button
                  className="about_btn text-white wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="200ms"
                >
                  <img src={top_categories} alt="" /> What we are
                </button>

                <h2
                  className="weoffer text-white wow fadeInUp"
                  style={{
                    marginBottom:"24px"
                  }}
                  data-wow-duration="1.05s"
                  data-wow-delay="300ms"
                >
                  We Offer The Best <br />
                  <span className="text-clr-primaryColor">Carrier</span>
                </h2>

                <p
                  className="fs_18 fw-normal text-clr-textColor wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="400ms"
                >
                  I'd be happy to help you write details for promoting your carrier
                  services. However, I need more specific information about your
                  carrier services, such as the industry you operate in, the types of
                  services you provide, and what sets you apart from the competition.
                </p>
              </div>

              <div
                className="d-flex flex-column"
                style={{ gap: "24px", marginBottom: "48px" }}
              >
                <div
                  className="offer_item d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center align-items-start text-lg-start text-center gap-3 wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="400ms"
                >
                  <div className="offer_item_img">
                    <img className="pt-2" src={icon1} alt="icon" />
                  </div>
                  <div className="offer_item_content">
                    <h2 className="text-white">Industry Expert Mentor</h2>

                    <p className="fs_18 text-clr-textColor">
                      Certainly! An "Industry-Proven Trainer" is a professional who has
                      demonstrated their expertise and effectiveness in training
                      individuals or teams within a specific industry.
                    </p>
                  </div>
                </div>

                <div
                  className="offer_item d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center align-items-start text-lg-start text-center gap-3 wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="500ms"
                >
                  <div className="offer_item_img">
                    <img className="pt-2" src={icon2} alt="icon" />
                  </div>
                  <div className="offer_item_content">
                    <h2 className="fs-4 text-white">Up-to-Date Course Content</h2>

                    <p className="fs_18 text-clr-textColor">
                      I'd be happy to provide you with some information on creating
                      up-to-date course content. Creating and maintaining current
                      course content is crucial for ensuring that students receive the
                      most relevant and valuable education.
                    </p>
                  </div>
                </div>

                <div
                  className="offer_item d-flex flex-lg-row flex-column justify-content-lg-start justify-content-center align-items-start text-lg-start text-center gap-3 wow fadeInUp"
                  data-wow-duration="1.05s"
                  data-wow-delay="600ms"
                >
                  <div className="offer_item_img">
                    <img className="pt-2" src={icon3} alt="icon" />
                  </div>
                  <div className="offer_item_content">
                    <h2 className="fs-4 text-white">Biggest Student Community</h2>

                    <p className="fs_18 text-clr-textColor">
                      As of my last knowledge update in September 2021, I don't have
                      access to real-time data or the ability to browse the internet,
                      so I can't provide information on the biggest student community
                      or organization that may have emerged after that date.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="d-flex justify-content-lg-start justify-content-center mt-lg-0 mt-4 mb-lg-0 mb-4 wow fadeInUp"
                data-wow-duration="1.05s"
                data-wow-delay="600ms"
              >
                <a href="About.html">
                  <button className="free_workshop_btn border_white">
                    Know more
                    <span className="d_block_nohover">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.5003 12.4998L4.50024 12.4998"
                          stroke="#131C1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5003 17.5C15.5003 17.5 20.5002 13.8176 20.5002 12.5C20.5003 11.1824 15.5002 7.5 15.5002 7.5"
                          stroke="#131C1E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <img className="d_block_hover" src="/assets/whitearrow.png" alt="" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default BestCarrierOffer