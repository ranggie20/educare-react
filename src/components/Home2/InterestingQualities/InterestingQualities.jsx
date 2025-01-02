import React from 'react'
import line from '../../../assets/home2/line.svg';
// import '../../Home2/Home2.css';

const InterestingQualities = () => {
  return (
    <div>
      <section class="qualites">
        <div class="container">
          <div class="qualites_wrapper">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="qualites_content wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                  <h3 class="m-0">
                    Interesting <br />
                    Qualities
                  </h3>
                  <div class="text-lg-start text-center">
                    <img class="" src={line} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="row justify-content-between h-100">
                  <div class="col-lg-6">
                    <div class="qualites_items d-flex align-items-center gap-3 pb_80 wow fadeInUp"
                      data-wow-duration="1.05s" data-wow-delay="200ms">
                      <span class="fs_32 fw-semibold text-clr-secondary">
                        01
                      </span>
                      <p class="fs-4 fw-normal text-clr-neutralColor2">
                        20k+ Online Course
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="qualites_items d-flex align-items-center gap-3 wow fadeInUp"
                      data-wow-duration="1.05s" data-wow-delay="300ms">
                      <span class="fs_32 fw-semibold text-clr-secondary">
                        02
                      </span>
                      <p class="fs-4 fw-normal text-clr-neutralColor2">
                        Experts Mentor
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="qualites_items d-flex align-items-center gap-3 pb-0 wow fadeInUp"
                      data-wow-duration="1.05s" data-wow-delay="400ms">
                      <span class="fs_32 fw-semibold text-clr-secondary">
                        03
                      </span>
                      <p class="fs-4 fw-normal text-clr-neutralColor2 pb-0">
                        Lifetime access
                      </p>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="qualites_items d-flex align-items-center gap-3 wow fadeInUp"
                      data-wow-duration="1.05s" data-wow-delay="500ms">
                      <span class="fs_32 fw-semibold text-clr-secondary">
                        04
                      </span>
                      <p class="fs-4 fw-normal text-clr-neutralColor2">
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