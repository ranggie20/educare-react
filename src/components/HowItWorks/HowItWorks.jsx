import React from 'react'
import how1 from '../../assets/home1/how1.png';
import how2 from '../../assets/home1/how2.png';
import how3 from '../../assets/home1/how3.png';
import how4 from '../../assets/home1/how4.png';

import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div>
      <section class="shadow_green1">
        <div class="container mb_130">
          <p class="sectionHeader text-center"><span class="txt_curve howItWorks_title">How it’s work</span>
          </p>
          <div class="howItWorks_wrapper mt_68 flex-wrap">
            <div class="">
              <div class="text-center works_wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <div class="works_img" style={{ backgroundColor: "#E1FF9E" }}>
                  <img src={how1} alt="signup" />
                </div>
                <h3>Sign up</h3>
                <p>There are numerous sections <br class="d-lg-block d-none" />
                  available in different versions, <br class="d-lg-block d-none" />
                  but the bulk have suffered</p>
              </div>
            </div>
            <div class="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div class="text-center works_wrapper wrapper_2">
                <div class="works_img" style={{ backgroundColor: "#FFEDB6" }}>
                  <img src={how2} alt="choose" />
                </div>
                <h3>Choose</h3>
                <p>Alteration in some form, <br class="d-lg-block d-none" />
                  by injected humour, or words <br class="d-lg-block d-none" />
                  which don't look even slightly.</p>
              </div>
            </div>
            <div class="">
              <div class="text-center works_wrapper" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <div class="works_img" style={{ backgroundColor: "#FFCBC4" }}>
                  <img src={how3} alt="secuirity" />
                </div>
                <h3>Pay Securely</h3>
                <p>Payment processors and <br class="d-lg-block d-none" />
                  service providers undergo <br class="d-lg-block d-none" />
                  regular security audits.</p>
              </div>
            </div>
            <div class="">
              <div class="text-center works_wrapper1" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="200">
                <div class="works_img" style={{ backgroundColor: "#C7CCFF" }}>
                  <img src={how4} alt="happy" />
                </div>
                <h3>Enjoy And Learn</h3>
                <p> It's a vibrant platform <br class="d-lg-block d-none" /> designed to engage your <br
                  class="d-lg-block d-none" /> curiosity and foster.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HowItWorks