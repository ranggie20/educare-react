import React from 'react'
import feedback from '../../assets/home1/feedback.png'
import start from '../../assets/home1/start.png'
import st1 from '../../assets/home1/st1.png'
import greenstart from '../../assets/home1/greenstart.png'
const StudentsFeedBack1 = () => {
  return (
    <>
      <section class="community_wrapper mb_130 slider_margin1" style={{ overflow: "hidden" }}>
        <div class="container ">
          <div class="slick-slider_testimonial">
            <div class="slide">
              <div class=" row align-items-center">
                <div class="col-lg-6">
                  <div class="testimonial_wrapper">
                    <button class="about_btn mb_24 d-lg-none d-block text-center d-flex">
                      <img
                        src={greenstart} alt="" /> Testimonials</button>
                    <img class="img-fluid" src={feedback} alt="about" />
                  </div>
                </div>
                <div class="col-lg-6 flex-grow-1 text-lg-start text-center p-0">
                  <button class="about_btn mb_24 d-lg-flex justify-content-center  d-none ">
                    <img
                      src={greenstart} alt="" />
                    Testimonials</button>
                  <h1 class="mb_24">Our Students <span class="green_text">Feedback</span></h1>

                  <p class="greyText mb_32">"Educare is revolutionizing the education sector. The site is
                    creative
                    and
                    interesting, and the content is of the highest caliber. I value the convenience
                    of learning from anywhere, and the tailored learning environment has
                    kept me motivated and on task. The instructors are supportive and
                    knowledgeable.</p>
                  <div class="feedback_profile">
                    <div class="d-flex align-items-center profile_details">
                      <img src={st1} alt="" />
                      <div class="text-lg-start text-center">
                        <h4>Geraldine D. Anspach</h4>
                        <p>UI/UX Designer</p>
                        <div
                          class="d-flex alig-items-center justify-content-lg-start justify-content-center">
                          <img src={start} alt="star" />
                          <img src={start} alt="star" />
                          <img src={start} alt="star" />
                          <img src={start} alt="star" />
                          <img src={start} alt="star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default StudentsFeedBack1