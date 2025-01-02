import React from 'react'
import greenstar from '../../assets/home1/greenstart.png'
import start from '../../assets/home1/start.png'
import f1 from '../../assets/home1/f1.png';
import buttonImg from "../../assets/home1/arrowright1.png"
// import './FeaturesCourse.css';
const FeaturesCourse = () => {
  
  return (
    <div>
  <section className="container-fluid p-0">
    <div className="featured_wrapper mb_130">
      <button className="about_btn mb_24"><img src={greenstar} alt="star" /><span className="d-lg-block d-none">Our</span> Course</button>
      <h1 className="mb_12 text-light">Features <span className="green_text">Course</span> </h1>
      <p className="color_BC">Choose from 213,000 online video courses with <br />
        new additions published every month</p>
      <div className="featured_buttons">
        <button data-filter="*" className="grey_btn feature_green_btn custom-button active">Feature</button>
        <button data-filter=".recent" className="grey_btn custom-button">Recent</button>
        <button data-filter=".design" className="grey_btn custom-button">Design</button>
        <button data-filter=".data-science" className="grey_btn custom-button d_none_sm">Data Science</button>
        <button data-filter=".marketing" className="grey_btn  custom-button d_none_sm">Marketing</button>
        <button data-filter=".development" className="grey_btn custom-button d_none_sm">Development</button>
      </div>
      <div className="container">
        <div className=" row mb_48 blogall">
          <div className="col-lg-4 design data-science">
            <div className="featured_card">
              <img className="w-100 mb_18" src={f1} alt />
              <div>
                <p className="rating_number mb_18 fs_16">23 hr 45 min</p>
                <h3 className="mb_30"> <a href="Course1.html">
                    <h3 className="mb_30">Web Development : <br />
                      The Complete Programming
                      Course</h3>
                  </a></h3>
                <p className="rating_number mb_45">By <strong>Joye Boot</strong></p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <button className="rating">
                      <img className="w-100" src={start} alt />
                      <span>4.8</span>
                    </button>
                    <p className="rating_number">(4563)</p>
                  </div>
                  <button className="price_btn">$134</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 design data-science">
            <div className="featured_card">
              <img className="w-100 mb_18" src={f1} alt />
              <div>
                <p className="rating_number mb_18 fs_16">23 hr 45 min</p>
                <h3 className="mb_30"> <a href="Course1.html">
                    <h3 className="mb_30">Web Development : <br />
                      The Complete Programming
                      Course</h3>
                  </a></h3>
                <p className="rating_number mb_45">By <strong>Joye Boot</strong></p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <button className="rating">
                      <img className="w-100" src={start} alt />
                      <span>4.8</span>
                    </button>
                    <p className="rating_number">(4563)</p>
                  </div>
                  <button className="price_btn">$134</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 design data-science">
            <div className="featured_card">
              <img className="w-100 mb_18" src={f1} alt />
              <div>
                <p className="rating_number mb_18 fs_16">23 hr 45 min</p>
                <h3 className="mb_30"> <a href="Course1.html">
                    <h3 className="mb_30">Web Development : <br />
                      The Complete Programming
                      Course</h3>
                  </a></h3>
                <p className="rating_number mb_45">By <strong>Joye Boot</strong></p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <button className="rating">
                      <img className="w-100" src={start} alt />
                      <span>4.8</span>
                    </button>
                    <p className="rating_number">(4563)</p>
                  </div>
                  <button className="price_btn">$134</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="Course1.html"> <button className="green_btn explore_courses">
          <span> Explore All Course</span>
          <img src={buttonImg} alt />
        </button></a>
    </div>
  </section>
</div>

  )
}

export default FeaturesCourse