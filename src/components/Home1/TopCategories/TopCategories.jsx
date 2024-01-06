import React from 'react'

import greenstart from '../../../assets/home1/greenstart.png'
import cat1 from '../../../assets/home1/cat1.png'
import cat2 from '../../../assets/home1/cat2.png'
import cat3 from '../../../assets/home1/cat3.png'
import cat4 from '../../../assets/home1/cat4.png'
import blacklink from '../../../assets/home1/black-link.png'
import link2 from '../../../assets/home1/link-2.png'

const TopCategories = () => {
  return (
    <>
      <div class="shadow_green_both">
        <section class="shadow_green1 popular_categoris">
          <div class="container mb_130">
            <div class="text-lg-start text-center">
              <a href="Course1.html"> <button class="about_btn">
                <img src={greenstart} alt="" />
                Top Categories
              </button></a>

            </div>
            <h2 class="category_title">
              Browse Popular <br /> Category
            </h2>

            <div class="row">
              <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div class="card_wrapper position-relative mb-4 mb-lg-0">
                  <div class="cat_card">
                    <div class="card_img">
                      <img class="w-100" src={cat1} alt="Category1" />
                    </div>
                    <div class="card_content">
                      <h3>UI/UX Design</h3>
                      <p>
                        In the digital realm where user interaction shapes the foundation of
                        success,
                        UI/UXdesign.
                      </p>
                    </div>
                  </div>
                  <div class="link_arrow position-absolute ">
                    <a href="/Course1.html" class="link-icon d-none">
                      <img src={blacklink} alt="icon" />
                    </a>

                    <a href="Course1.html" class="linkIconTwo">
                      <img src={link2} alt="icon" />
                    </a>

                  </div>
                </div>

              </div>

              <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div class="card_wrapper position-relative mb-4 mb-lg-0">
                  <div class="cat_card">
                    <div class="card_img">
                      <img class="w-100" src={cat2} alt="Category1" />
                    </div>

                    <div class="card_content">
                      <h3>Data Science</h3>
                      <p>
                        Data science is a multidisciplinary
                        field that combines techniques
                        from statistics, mathematics.
                      </p>
                    </div>
                  </div>
                  <div class="link_arrow position-absolute ">
                    <a href="Course1.html" class="link-icon d-none">
                      <img src={blacklink} alt="icon" />
                    </a>

                    <a href="Course1.html" class="linkIconTwo">
                      <img src={link2} alt="icon" />
                    </a>

                  </div>
                </div>

              </div>

              <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div class="card_wrapper position-relative mb-4 mb-lg-0">
                  <div class="cat_card">
                    <div class="card_img">
                      <img class="w-100" src={cat3} alt="Category1" />
                    </div>

                    <div class="card_content">
                      <h3>Web development</h3>
                      <p>
                        web development is the process of
                        creating and maintaining
                        websites or web applications.
                      </p>
                    </div>
                  </div>
                  <div class="link_arrow position-absolute ">
                    <a href="Course1.html" class="link-icon d-none">
                      <img src={blacklink} alt="icon" />
                    </a>

                    <a href="Course1.html" class="linkIconTwo">
                      <img src={link2} alt="icon" />
                    </a>

                  </div>
                </div>

              </div>

              <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div class="card_wrapper position-relative mb-4 mb-lg-0">
                  <div class="cat_card">
                    <div class="card_img">
                      <img class="w-100" src={cat4} alt="Category1" />
                    </div>

                    <div class="card_content">
                      <h3>
                        Strategy & Research
                      </h3>
                      <p>
                        Strategy is a high-level plan or
                        approach designed to achieve
                        specific goals or objectives.
                      </p>
                    </div>
                  </div>
                  <div class="link_arrow position-absolute ">
                    <a href="Course1.html" class="link-icon d-none">
                      <img src={blacklink} alt="icon" />
                    </a>

                    <a href="Course1.html" class="linkIconTwo">
                      <img src={link2} alt="icon" />
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TopCategories