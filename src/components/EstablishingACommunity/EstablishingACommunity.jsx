import React from "react";
// import './EstablishingACommunity.css';

import greenstar from "../../assets/home1/greenstart.png";
import greenstar1 from "../../assets/home1/greenstart1.png";
import home1about from "../../assets/home1/home1about.png";
import rightArrow from "../../assets/home1/rightArrow.png";
import phone from "../../assets/home1/phone.png";
import whitearrow from "../../assets/whitearrow.png";
import callBlack from "../../assets/call-black.png";

const EstablishingACommunity = () => {
  return (
    <>
      <section className="community_wrapper mb_130">
        <div className="container">
          <div className="row align-items-center community_rows">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <div>
                <img className="img-fluid" src={home1about} alt="about" />
              </div>
            </div>
            <div
              className="col-lg-6 flex-grow-1 text-lg-start text-center"
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-delay={200}
            >
              <a href="About.html">
                <button className="about_btn mb_24">
                  <img src={greenstar} alt /> About us
                </button>
              </a>
              <h1 className="mb_24">
                Establishing a <span className="green_text">Community</span>
                <br className="d-lg-block d-none" />
                of Lifelong Learners
              </h1>
              <p className="greyText mb_32">
                Learning from an online event involves several key steps.
                Firstly, it's important to research and choose an event that
                aligns with your learning objectives and interests. Once you've
                registered for the event, make sure to review the agenda and
                schedule to plan your time effectively.
              </p>
              <div className="row mb_24">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-2 community_points">
                    <img src={greenstar1} alt />
                    <span> contact with International students</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-2 community_points">
                    <img src={greenstar1} alt />
                    <span>Learn from approved experts</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-2 community_points">
                    <img src={greenstar1} alt />
                    <span>Improve Your Learning Capabilities</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex align-items-center gap-2 community_points">
                    <img src={greenstar1} alt />
                    <span>Become like a </span>
                    <button className="pro_btn">Pro</button>
                  </div>
                </div>
              </div>
              <div className="community_btns">
                <a href="/About">
                  {" "}
                  <button className="know_more_btn fs18400">
                    <span>Know more</span>
                    <img
                      className="hover_img"
                      src={rightArrow}
                      alt="rightArrow"
                    />
                    <img
                      className="hover_img_block"
                      src={whitearrow}
                      alt="whitearrow"
                    />
                  </button>
                </a>
                <button className="phone_btn fs18400">
                  <img className="hover_img" src={phone} alt />
                  <img className="hover_img_block" src={callBlack} alt />
                  <span>+288 394 2783</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstablishingACommunity;
