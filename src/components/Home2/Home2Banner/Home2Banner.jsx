import React from 'react'
import banner from '../../../assets/home2/banner-img.png';
import link_icon from '../../../assets/home2/link_icon.png';
import tick from '../../../assets/home2/tick.png';
import line from '../../../assets/home2/line.svg';
import yellow from '../../../assets/home2/yellow.png'
const Home2Banner = () => {

  return (
    <>
 <section className="banner_wrapper">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      {/* Left Section */}
      <div className="col-lg-4">
        <div
          className="left_wrapper d-flex flex-column h-100"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="left_content">
            <h1 className="banner_title2 text-lg-start text-center">
              Grow Your <span>Skill</span> And <br className="d-lg-block d-none" />
              Find the <br className="d-lg-block d-none" />
              Best online <span>Course</span>
            </h1>
            <p className="mt_14 mb_56 fw_400 fs_18 grey2 text-lg-start text-center">
              Start with more than 5,000 courses, <br />
              Certificates and degrees from world-class <br />
              universities.
            </p>
          </div>
          <div className="d-flex gap-4 justify-content-lg-start justify-content-center">
            <button className="greenButton2 text-white" style={{ width: '219px' }}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Center Section with Image */}
      <div className="col-lg-6 d-lg-block d-none">
        <div
          className="text-center position-relative"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            className="img-fluid"
            src={banner}
            style={{ marginTop: '-116px' }}
            alt=""
          />
          <div className="position-absolute banner_img" style={{ top: '62px' }}>
            <img src="/assets/home2/b1.png" alt="" />
          </div>
          <div className="position-absolute banner_img" style={{ bottom: '0px', right: '0' }}>
            <img src="/assets/home2/b2.png" alt="" />
          </div>
          <div className="position-absolute" style={{ top: '-49px', right: '65px' }}>
            <img src="/assets/home2/highlight.png" alt="" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-lg-2">
        <div
          className="right_wrapper d-flex flex-column justify-content-around h-100"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <button
            style={{ marginBottom: '76px' }}
            className="highlight d-flex align-items-center justify-content-lg-start justify-content-center gap-2 fs_18 fw-medium text-clr-neutralColor lets_talk_btns"
          >
            <img src={link_icon} alt="link-icon" />
            Lets talk
          </button>
          <div className="category_items_wrapper d-flex flex-column gap-3" style={{ marginBottom: '56px' }}>
            <div className="category_items d-flex align-items-center gap-3 fs-6 fw-normal text-clr-neutralColor">
              <img src={tick} alt="tick" />
              Expert Mentor
            </div>
            <div className="category_items d-flex align-items-center gap-3 fs-6 fw-normal text-clr-neutralColor">
              <img src={tick} alt="tick" />
              Quality Classes
            </div>
            <div className="category_items d-flex align-items-center gap-3 fs-6 fw-normal text-clr-neutralColor">
              <img src={tick} alt="tick" />
              Best pricing
            </div>
          </div>
          <div className="text-center rotate_animated_element" style={{ marginBottom: '65px' }}>
            <img style={{ width: '38px', height: '38px', marginRight: '20px' }} src={yellow} alt="" />
          </div>
          <div className="banner_message">
            <p className="m-0 fs_18 fw-normal text-clr-neutralColor d-lg-block d-none">
              Students success form
            </p>
            <p className="m-0 fs_18 fw-normal text-clr-neutralColor d-lg-block d-none">
              <img className="d-lg-block d-none" src={line} alt="" />
              our online courses.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Image Section */}
      <div className="col-lg-6 d-lg-none d-block">
        <div className="banner_img text-center wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
          <img className="img-fluid" src="/assets/home2/banner-img.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Home2Banner