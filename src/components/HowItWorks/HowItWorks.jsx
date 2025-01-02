import React from 'react'
import how1 from '../../assets/home1/how1.png';
import how2 from '../../assets/home1/how2.png';
import how3 from '../../assets/home1/how3.png';
import how4 from '../../assets/home1/how4.png';

// import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div>
    <section className="shadow_green1">
      <div className="container mb_130">
        <p className="sectionHeader text-center">
          <span className="txt_curve howItWorks_title">How it’s work</span>
        </p>
        <div className="howItWorks_wrapper mt_68 flex-wrap">
          {/* Sign Up */}
          <div>
            <div
              className="text-center works_wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className="works_img"
                style={{ backgroundColor: "#E1FF9E" }}
              >
                <img src={how1} alt="signup" />
              </div>
              <h3>Sign up</h3>
              <p>
                There are numerous sections <br className="d-lg-block d-none" />
                available in different versions, <br className="d-lg-block d-none" />
                but the bulk have suffered
              </p>
            </div>
          </div>

          {/* Choose */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div className="text-center works_wrapper wrapper_2">
              <div
                className="works_img"
                style={{ backgroundColor: "#FFEDB6" }}
              >
                <img src={how2} alt="choose" />
              </div>
              <h3>Choose</h3>
              <p>
                Alteration in some form, <br className="d-lg-block d-none" />
                by injected humour, or words <br className="d-lg-block d-none" />
                which don't look even slightly.
              </p>
            </div>
          </div>

          {/* Pay Securely */}
          <div>
            <div
              className="text-center works_wrapper"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className="works_img"
                style={{ backgroundColor: "#FFCBC4" }}
              >
                <img src={how3} alt="secuirity" />
              </div>
              <h3>Pay Securely</h3>
              <p>
                Payment processors and <br className="d-lg-block d-none" />
                service providers undergo <br className="d-lg-block d-none" />
                regular security audits.
              </p>
            </div>
          </div>

          {/* Enjoy And Learn */}
          <div>
            <div
              className="text-center works_wrapper1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className="works_img"
                style={{ backgroundColor: "#C7CCFF" }}
              >
                <img src={how4} alt="happy" />
              </div>
              <h3>Enjoy And Learn</h3>
              <p>
                It's a vibrant platform <br className="d-lg-block d-none" /> 
                designed to engage your <br className="d-lg-block d-none" /> 
                curiosity and foster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default HowItWorks