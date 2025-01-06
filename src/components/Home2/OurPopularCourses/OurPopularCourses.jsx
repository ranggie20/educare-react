import React from 'react'
// import '../../Home2/Home2.css';
import f1 from '../../../assets/home1/f1.png'
import time from '../../../assets/time.png'
import blog2 from '../../../assets/home1/blog2.webp'
import blog3 from '../../../assets/home1/blog3.webp'
import blog4 from '../../../assets/home1/blog4.webp'
import blog5 from '../../../assets/home1/blog5.avif'
import star from '../../../assets/star.png'
import yellow from '../../../assets/home2/yellow.png'
const popularCoursesData = [
  {
    img: f1,
    timeImg: time,
    title: 'Web Development: The Complete Programming Course',
    duration: '20 hours',
    rating: 4.8,
    ratingsCount: 4563,
    instructor: 'Joye Boot',
    price: '$134',
    category: 'recent',
  },
  {
    img: blog2,
    timeImg: time,
    title: 'Data Science and Analytics',
    duration: '20 hours',
    rating: 4.8,
    ratingsCount: 4563,
    instructor: 'Joye Boot',
    price: '$134',
    category: 'data-science design development',
  },
  {
    img: blog3,
    timeImg: time,
    title: 'Advanced Web Development',
    duration: '20 hours',
    rating: 4.8,
    ratingsCount: 4563,
    instructor: 'Joye Boot',
    price: '$134',
    category: 'recent data-science',
  },
  {
    img: blog4,
    timeImg: time,
    title: 'Marketing Strategies for Success',
    duration: '20 hours',
    rating: 4.8,
    ratingsCount: 4563,
    instructor: 'Joye Boot',
    price: '$134',
    category: 'development marketing',
  },
  {
    img: blog5,
    timeImg: time,
    title: 'Data Science Fundamentals',
    duration: '20 hours',
    rating: 4.8,
    ratingsCount: 4563,
    instructor: 'Joye Boot',
    price: '$134',
    category: 'data-science',
  },
  {
    img: blog3,
    timeImg: time,
    title: 'Design Principles and Techniques',
    duration: '20 hours',
    rating: 4.8,
    ratingsCount: 4563,
    instructor: 'Joye Boot',
    price: '$134',
    category: 'development design',
  },
];


const OurPopularCourses = () => {
  return (
    <>
      <div class="shadow_yellow1" style={{ overflowX: "hidden" }}>
        <section class="home2Feature_course container-fluid p-0">
          <div class="featured_wrapper mb_130">
            <button class="about_btn mb_24 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
              <img src={star} alt="star" /> Popular Courses
            </button>
            <h1 class="mb_12 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms"
              style={{ color: "#131C1E" }}>
              Browse Popular
              <br class="d-lg-none d-block" />
              Category
            </h1>
            <p class="color_74 d-lg-block d-none wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
              Choose from 213,000 online video courses with
              <br />
              new additions published every month
            </p>

            <div class="featured_buttons wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
              <button data-filter="*" class="grey_btn feature_green_btn custom-button1 active">
                Feature
              </button>
              <button data-filter=".recent" class="grey_btn custom-button1">
                Recent
              </button>
              <button data-filter=".design" class="grey_btn custom-button1">
                Design
              </button>
              <button data-filter=".data-science" class="grey_btn custom-button1 d-lg-block d-none">
                Data Science
              </button>
              <button data-filter=".marketing" class="grey_btn  custom-button1 d-lg-block d-none">
                Marketing
              </button>
              <button data-filter=".development" class="grey_btn custom-button1 d-lg-block d-none">
                Development
              </button>
            </div>

            <div class="container">
              <div class="row mb_48 blogall">
                {popularCoursesData.map((data) => (
                  <>

                    <div class="col-lg-4 recent ">
                      <div class="featured_card">
                        <div class="position-relative">
                          <div class="featured_card_img mb_18">
                            <img class="w-100" src={f1} alt="" />
                          </div>

                        </div>

                        <div>
                          <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                          <a href="Course1.html">
                            <h3 class="mb_30" style={{color:"black"}}>Web Development : <br />
                              The Complete Programming
                              Course</h3>
                          </a>
                          <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                          <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center gap-2">
                              <button class="rating">
                                <img class="w-100" src={yellow} alt="" />
                                <span>4.8</span>
                              </button>
                              <p class="rating_number">(4563)</p>

                            </div>
                            <button class="price_btn">$134</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}

                {/* <div class="col-lg-4 data-science design development">
                  <div class="featured_card">
                    <div class="position-relative">
                      <div class="featured_card_img mb_18">
                        <img class="w-100" src={blog2} alt="" />

                      </div>
                      <div class="home2_course_timing">
                        <img src={time} alt="" />20 hour
                      </div>
                    </div>

                    <div>
                      <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                      <a href="Course1.html">
                        <h3 class="mb_30">Web Development : <br />
                          The Complete Programming
                          Course</h3>
                      </a>
                      <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                          <button class="rating">
                            <img class="w-100" src={star} alt="" />
                            <span>4.8</span>
                          </button>
                          <p class="rating_number">(4563)</p>

                        </div>
                        <button class="price_btn">$134</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 recent data-science ">
                  <div class="featured_card">
                    <div class="position-relative">
                      <div class="featured_card_img mb_18">
                        <img class="w-100" src={blog3} alt="" />
                      </div>
                      <div class="home2_course_timing">
                        <img src={time} alt="" />20 hour
                      </div>
                    </div>

                    <div>
                      <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                      <a href="Course1.html">
                        <h3 class="mb_30">Web Development : <br />
                          The Complete Programming
                          Course</h3>
                      </a>
                      <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                          <button class="rating">
                            <img class="w-100" src={star} alt="" />
                            <span>4.8</span>
                          </button>
                          <p class="rating_number">(4563)</p>

                        </div>
                        <button class="price_btn">$134</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4  development marketing">
                  <div class="featured_card">
                    <div class="position-relative">
                      <div class="featured_card_img mb_18">
                        <img class="w-100" src={blog4} alt="" />
                      </div>
                      <div class="home2_course_timing">
                        <img src={time} alt="time" />20 hour
                      </div>
                    </div>

                    <div>
                      <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                      <a href="Course1.html">
                        <h3 class="mb_30">Web Development : <br />
                          The Complete Programming
                          Course</h3>
                      </a>
                      <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                          <button class="rating">
                            <img class="w-100" src={star} alt="" />
                            <span>4.8</span>
                          </button>
                          <p class="rating_number">(4563)</p>

                        </div>
                        <button class="price_btn">$134</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4  data-science ">
                  <div class="featured_card">
                    <div class="position-relative">
                      <div class="featured_card_img mb_18">
                        <img class="w-100" src={blog5} alt="" />
                      </div>
                      <div class="home2_course_timing">
                        <img src={time} alt="" />20 hour
                      </div>
                    </div>

                    <div>
                      <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                      <a href="Course1.html">
                        <h3 class="mb_30">Web Development : <br />
                          The Complete Programming
                          Course</h3>
                      </a>
                      <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                          <button class="rating">
                            <img class="w-100" src={star} alt="" />
                            <span>4.8</span>
                          </button>
                          <p class="rating_number">(4563)</p>

                        </div>
                        <button class="price_btn">$134</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4  development  design ">
                  <div class="featured_card">
                    <div class="position-relative">
                      <div class="featured_card_img mb_18">
                        <img class="w-100" src={blog3} alt="" />
                      </div>
                      <div class="home2_course_timing">
                        <img src={time} alt="" />20 hour
                      </div>
                    </div>

                    <div>
                      <p class="rating_number mb_18 fs_16">23 hr 45 min</p>
                      <a href="Course1.html">
                        <h3 class="mb_30">Web Development : <br />
                          The Complete Programming
                          Course</h3>
                      </a>
                      <p class="rating_number mb_45">By <strong>Joye Boot</strong></p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                          <button class="rating">
                            <img class="w-100" src={star} alt="" />
                            <span>4.8</span>
                          </button>
                          <p class="rating_number">(4563)</p>

                        </div>
                        <button class="price_btn">$134</button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="workshop">
              <a href="Course1.html">
                <button class="explore_course_btn ">Explore All Course <img src="/assets/right.png"
                  alt="" /></button>
              </a>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default OurPopularCourses