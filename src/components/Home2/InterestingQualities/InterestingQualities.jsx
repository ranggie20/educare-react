import React from 'react'
import line from '../../../assets/home2/line.svg';
// import '../../Home2/Home2.css';

const InterestingQualities = () => {
  return (
    <div>
  <section className="qualites">
    <div className="container">
      <div className="qualites_wrapper">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="qualites_content wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
              <h3 className="m-0">
                Interesting <br />
                Qualities
              </h3>
              <div className="text-lg-start text-center">
                <img className src={line} alt />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row justify-content-between h-100">
              <div className="col-lg-6">
                <div className="qualites_items d-flex align-items-center gap-3 pb_80 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
                  <span className="fs_32 fw-semibold text-clr-secondary">
                    01
                  </span>
                  <p className="fs-4 fw-normal text-clr-neutralColor2">
                    20k+ Online Course
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="qualites_items d-flex align-items-center gap-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
                  <span className="fs_32 fw-semibold text-clr-secondary">
                    02
                  </span>
                  <p className="fs-4 fw-normal text-clr-neutralColor2">
                    Experts Mentor
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="qualites_items d-flex align-items-center gap-3 pb-0 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
                  <span className="fs_32 fw-semibold text-clr-secondary">
                    03
                  </span>
                  <p className="fs-4 fw-normal text-clr-neutralColor2 pb-0">
                    Lifetime access
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="qualites_items d-flex align-items-center gap-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="500ms">
                  <span className="fs_32 fw-semibold text-clr-secondary">
                    04
                  </span>
                  <p className="fs-4 fw-normal text-clr-neutralColor2">
                    Experts Mentor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default InterestingQualities