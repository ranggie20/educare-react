import React from 'react'
import banner from '../../../assets/home2/banner-img.png';
import link_icon from '../../../assets/home2/link_icon.png';
import tick from '../../../assets/home2/tick.png';
import line from '../../../assets/home2/line.svg';


const Home2Banner = () => {
  return (
    <>
      <section class="banner_wrapper">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-4">
              <div class="left_wrapper d-flex flex-column  h-100" data-aos="fade-right"
                data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <div class="left_content">
                  <h1 class="banner_title text-lg-start text-center">
                    Grow Your
                    <span>
                      Skill
                    </span> And <br class="d-lg-block d-none" />
                    Find the <br class="d-lg-block d-none" />
                    Best online
                    <span>
                      Course
                    </span>
                  </h1>

                  <p class="mt_14 mb_56 fw_400 fs_18 grey2 text-lg-start text-center">
                    Start with more than 5,000 courses, <br />
                    Certificates and degrees from world-class <br />
                    universities.
                  </p>
                </div>


                <div class="d-flex gap-4 justify-content-lg-start justify-content-center">
                  <button class="greenButton2 text-white">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-lg-block d-none">
              <div class="banner_img text-center" data-aos="fade-up"
                data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <img class="img-fluid" src={banner} alt="" />
              </div>
            </div>

            <div class="col-lg-2">
              <div class="right_wrapper d-flex flex-column justify-content-between h-100" data-aos="fade-left"
                data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
                data-aos-easing="ease-in-out">
                <button
                  class="d-flex align-items-center justify-content-lg-start justify-content-center gap-2 fs_18 fw-medium text-clr-neutralColor lets_talk_btns">
                  <img src={link_icon} alt="link-icon" />
                  Lets talk
                </button>

                <div class="category_items_wrapper d-flex flex-column gap-3">
                  <div
                    class="category_items d-flex align-items-center gap-3 fs-6 fw-normal text-clr-neutralColor d-flex align-items-center gap-2">
                    <img src={tick} alt="tick" />
                    Expert Mentor
                  </div>

                  <div
                    class="category_items d-flex align-items-center gap-3 fs-6 fw-normal text-clr-neutralColor d-flex align-items-center gap-2">
                    <img src={tick} alt="tick" />
                    Quality Classes
                  </div>

                  <div
                    class="category_items d-flex align-items-center gap-3 fs-6 fw-normal text-clr-neutralColor d-flex align-items-center gap-2">
                    <img src={tick} alt="tick" />
                    Best pricing
                  </div>
                </div>

                <div class="banner_message">
                  <p class="m-0 fs_18 fw-normal text-clr-neutralColor d-lg-block d-none">
                    Students success form
                  </p>
                  <p class="m-0 fs_18 fw-normal text-clr-neutralColor d-lg-block d-none">
                    <img class="d-lg-block d-none" src={line} alt="" />
                    ouronline courses.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-lg-none d-block">
              <div class="banner_img text-center wow fadeInUp" data-wow-duration="1.05s"
                data-wow-delay="100ms">
                <img class="img-fluid" src="/assets/home2/banner-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home2Banner