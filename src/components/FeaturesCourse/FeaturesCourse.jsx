import React from 'react'

const FeaturesCourse = () => {
  return (
    <div>

      <section class="container-fluid p-0">
        <div class="featured_wrapper mb_130">
          <button class="about_btn mb_24"><img src="/assets/home1/greenstart.png" alt="star" /><span
            class="d-lg-block d-none">Our</span> Course</button>
          <h1 class="mb_12 text-light">Features <span class="green_text">Course</span> </h1>
          <p class="color_BC">Choose from 213,000 online video courses with <br />
            new additions published every month</p>
          <div class="featured_buttons">
            <button data-filter="*" class="grey_btn feature_green_btn custom-button active">Feature</button>
            <button data-filter=".recent" class="grey_btn custom-button">Recent</button>
            <button data-filter=".design" class="grey_btn custom-button">Design</button>
            <button data-filter=".data-science" class="grey_btn custom-button d_none_sm">Data Science</button>
            <button data-filter=".marketing" class="grey_btn  custom-button d_none_sm">Marketing</button>
            <button data-filter=".development" class="grey_btn custom-button d_none_sm">Development</button>
          </div>

          <div class="container">
            <div class=" row mb_48 blogall">
              <div class="col-lg-4 design data-science">
                <div class="featured_card">
                  <img class="w-100 mb_18" src="/assets/home1/f1.png" alt="" />
                  <div>
                    <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                    <h3 class="mb_30"> <a href="Course1.html">
                      <h3 class="mb_30">Web Development : <br />
                        The Complete Programming
                        Course</h3>
                    </a></h3>
                    <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center gap-2">
                        <button class="rating">
                          <img class="w-100" src="/assets/home1/start.png" alt="" />
                          <span>4.8</span>
                        </button>
                        <p class="rating_number">(4563)</p>

                      </div>
                      <button class="price_btn">$134</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <a href="Course1.html"> <button class="green_btn explore_courses">
            <span> Explore All Course</span>
            <img src="/assets/home1/arrowright1.png" alt="" />
          </button></a>
        </div>
      </section>

    </div>
  )
}

export default FeaturesCourse