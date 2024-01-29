import React from 'react'
import '../../Home2/Home2.css';
import top_categories from '../../../assets/home2/top_categories.png';
import course1 from '../../../assets/home2/course1.png';
import course2 from '../../../assets/home2/course2.png';
import course3 from '../../../assets/home2/course3.png';
import course4 from '../../../assets/home2/course4.png';
import course5 from '../../../assets/home2/course5.png';
import course6 from '../../../assets/home2/course6.png';
import arrow from '../../../assets/home2/arrow-right.svg';
import rightArrow from '../../../assets/home2/right-arrow.png';

// const coursesData = [
//   {
//     title: 'UI/UX Design',
//     description: 'How to apply design thinking to your project to generate innovative and user-centric solutions.',
//     image: '../../../assets/home2/course1.png',
//     link: 'Course1.html',
//   },
//   {
//     title: 'Data Science',
//     description: 'Learn how to apply data science techniques to analyze and interpret data.',
//     image: '../../../assets/home2/course2.png',
//     link: 'Course2.html',
//   },
//   {
//     title: 'Web Development',
//     description: 'Build responsive and interactive websites using the latest web development technologies.',
//     image: '../../../assets/home2/course3.png',
//     link: 'Course3.html',
//   },
//   {
//     title: 'Strategy & Research',
//     description: 'Develop effective strategies and conduct research for business success.',
//     image: '../../../assets/home2/course4.png',
//     link: 'Course4.html',
//   },
//   {
//     title: 'Business Analysis',
//     description: 'Learn the skills needed for effective business analysis and decision-making.',
//     image: '../../../assets/home2/course5.png',
//     link: 'Course5.html',
//   },
//   {
//     title: 'Sales & Marketing',
//     description: 'Explore strategies and techniques for successful sales and marketing.',
//     image: '../../../assets/home2/course6.png',
//     link: 'Course6.html',
//   },
//   // Add more courses as needed
// ];
const CourseCategories = () => {
  return (
    <>
      <div class="shadow_yellow" style={{ overflowX: "hidden" }}>
        <section class="top_categories">
          <div class="container">
            <div class="section_heading">
              <button class="about_btn text-white wow fadeInUp" data-wow-duration="1.05s"
                data-wow-delay="100ms">
                <img src={top_categories} alit="" />
                Top Categories
              </button>

              <h2 class="category_title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
                Course <span class="category_title_green">Categories</span>
              </h2>
            </div>

            <div class="card_wrapper">
              <div class="row">
                <div class="col-lg-4">
                  <div class="card-item mb-4 wow fadeInUp" data-wow-duration="1.05s"
                    data-wow-delay="300ms">

                    <div class="card_content text-lg-start text-center">
                      <img src={course1} alt="img" />
                      <h2>
                        UI/UX<br />
                        Design
                      </h2>
                      <p>
                        How to apply design thinking to your <br class="d-lg-block d-none" />
                        onder t generate innov the and uner-centric
                        <br class="d-lg-block d-none" />
                        solution
                      </p>
                    </div>

                    <div class="d-flex justify-content-lg-end justify-content-center">
                      <a href="Course1.html">
                        <button class="d-flex align-items-center justify-content-center">
                          <img class="arrowRight" src={arrow} alt="arrow" />
                          <img class="arrowRightTwo d-none" src={rightArrow}
                            alit="rightArrow" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-item mb-4 wow fadeInUp" data-wow-duration="1.05s"
                    data-wow-delay="400ms">

                    <div class="card_content text-lg-start text-center">
                      <img src={course2} alt="img" />
                      <h2>
                        Data<br />
                        Science
                      </h2>
                      <p>
                        How to apply design thinking to your<br />
                        onder t generate innov the and uner-centric <br class="d-lg-block d-none" />
                        solution
                      </p>
                    </div>
                    <div class="d-flex justify-content-lg-end justify-content-center">
                      <a href="Course1.html">
                        <button class="d-flex align-items-center justify-content-center">
                          <img class="arrowRight" src={arrow} alit="" />
                          <img class="arrowRightTwo d-none" src={rightArrow}
                            alit="" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-item mb-4 wow fadeInUp" data-wow-duration="1.05s"
                    data-wow-delay="500ms">

                    <div class="card_content text-lg-start text-center">
                      <img src={course3} alt="img" />
                      <h2>
                        Web<br />
                        development
                      </h2>
                      <p>
                        How to apply design thinking to your<br />
                        onder t generate innov the and uner-centric <br class="d-lg-block d-none" />
                        solution
                      </p>
                    </div>

                    <div class="d-flex justify-content-lg-end justify-content-center">
                      <a href="Course1.html">
                        <button class="d-flex align-items-center justify-content-center">
                          <img class="arrowRight" src={arrow} alit="" />
                          <img class="arrowRightTwo d-none" src={rightArrow}
                            alit="" />
                        </button>
                      </a>
                    </div>

                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-item mb-4 wow fadeInUp" data-wow-duration="1.05s"
                    data-wow-delay="600ms">

                    <div class="card_content text-lg-start text-center">
                      <img src={course4} alt="img" />
                      <h2>
                        Strategy &<br />
                        Research
                      </h2>
                      <p>
                        How to apply design thinking to your<br />
                        onder t generate innov the and uner-centric <br class="d-lg-block d-none" />
                        solution
                      </p>
                    </div>

                    <div class="d-flex justify-content-lg-end justify-content-center">
                      <a href="Course1.html">
                        <button class="d-flex align-items-center justify-content-center">
                          <img class="arrowRight" src={arrow} alit="" />
                          <img class="arrowRightTwo d-none" src={rightArrow}
                            alit="" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-item mb-4 wow fadeInUp" data-wow-duration="1.05s"
                    data-wow-delay="700ms">
                    <div class="card_content text-lg-start text-center">
                      <img src={course5} alt="img" />
                      <h2>
                        Business<br />
                        Analysis
                      </h2>
                      <p>
                        How to apply design thinking to your<br />
                        onder t generate innov the and uner-centric <br class="d-lg-block d-none" />
                        solution
                      </p>
                    </div>

                    <div class="d-flex justify-content-lg-end justify-content-center">
                      <a href="Course1.html">
                        <button class="d-flex align-items-center justify-content-center">
                          <img class="arrowRight" src={arrow} alit="" />
                          <img class="arrowRightTwo d-none" src={rightArrow}
                            alit="" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card-item mb-4 wow fadeInUp" data-wow-duration="1.05s"
                    data-wow-delay="800ms">
                    <div class="card_content text-lg-start text-center">
                      <img src={course6} alt="img" />
                      <h2>
                        Sales<br />
                        Marketing
                      </h2>
                      <p>
                        How to apply design thinking to your<br />
                        onder t generate innov the and uner-centric <br class="d-lg-block d-none" />
                        solution
                      </p>
                    </div>

                    <div class="d-flex justify-content-lg-end justify-content-center">
                      <a href="Course1.html">
                        <button class="d-flex align-items-center justify-content-center">
                          <img class="arrowRight" src={arrow} alit="" />
                          <img class="arrowRightTwo d-none" src={rightArrow}
                            alit="" />
                        </button>
                      </a>
                    </div>
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

export default CourseCategories