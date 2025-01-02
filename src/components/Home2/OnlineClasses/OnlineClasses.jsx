import React from 'react'
import banner from '../../../assets/providebest-banner.png'
import whitearrow from '../../../assets/whitearrow.png'
import top from '../../../assets/home2/top_categories.png'
import whatweare from '../../../assets/home2/whatweare-icon1.png'
import whatweare2 from '../../../assets/home2/whatweare-icon2.png'
import whatweare3 from '../../../assets/home2/whatweare-icon3.png'

const OnlineClasses = () => {
  return (
    <div>
   <section className="mt_130 we_provide" style={{overflowX: 'hidden'}}>
  <div className="container">
    <div className="row align-items-center  flex-lg-row flex-column-reverse">
      <div className="col-lg-6">
        <div className="whatweare_img wow fadeInLeft" data-wow-duration="1.05s" data-wow-delay="100ms">
          <img className="img-fluid" src={banner} alt="img" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="whatweare_right">
          <div className="section_heading mb-5">
            <button className="greenButton2 text-white wow fadeInUp" style={{height: 40}} data-wow-duration="1.05s" data-wow-delay="100ms">
              <img src={top} alt />
              About us
            </button>
            <h2 className="category_title text_dark wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
              We Provide Best <br />
              <span className="text-clr-primaryColor">
                Online Classes
              </span>
            </h2>
            <p className="fs_18 fw-normal text-clr-textColor wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
              Learning from an online event involves several key steps. Firstly, it's important to
              research and choose an event that aligns with your learning objectives and
              interests. Once you've registered for the event, make sure to review the agenda and
              schedule to plan your time effectively.
            </p>
          </div>
          <div className="offer_item d-flex align-items-center gap-3 mb-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
            <div className="offer_item_img">
              <img className="pt-2" src={whatweare} alt="icon" />
            </div>
            <div className="offer_item_content">
              <h2 className="fs-4 text_dark">
                Learning
              </h2>
              <p className="fs_18 text-clr-textColor">
                Learning is a lifelong journey that empowers individuals to
                acquire new knowledge, develop skills, and grow personally.
              </p>
            </div>
          </div>
          <div className="offer_item d-flex gap-3 mb-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="500ms">
            <div className="offer_item_img">
              <img className="pt-2" src={whatweare2} alt="icon" />
            </div>
            <div className="offer_item_content">
              <h2 className="fs-4 text_dark ">
                Instruction
              </h2>
              <p className="fs_18 text-clr-textColor">
                Learning is a lifelong journey that empowers individuals to
                acquire new knowledge, develop skills, and grow personally.
              </p>
            </div>
          </div>
          <div className="offer_item d-flex gap-3 mb-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="600ms">
            <div className="offer_item_img">
              <img className="pt-2" src={whatweare3} alt="icon" />
            </div>
            <div className="offer_item_content">
              <h2 className="fs-4 text_dark">
                Progress
              </h2>
              <p className="fs_18 text-clr-textColor">
                Learning is a lifelong journey that empowers individuals to
                acquire new knowledge, develop skills, and grow personally.
              </p>
            </div>
          </div>
          <div className="centerd mt-lg-5 mt-5 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="700ms">
            <a href="About.html">
              <button className="greenButton2 mb_24 py-4" style={{color: 'white', height: 40}}>
                Know more
                <img src={whitearrow} alt />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default OnlineClasses