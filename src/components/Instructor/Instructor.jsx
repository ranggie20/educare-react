import React from 'react'
import greenstar from '../../assets/home1/greenstart.png'
import i3 from '../../assets/home1/i3.png'
import dribble from '../../assets/home1/dribble.png'
import insta from '../../assets/home1/insta.png'
import twitter from '../../assets/home1/twitter.png'
import './Instructor.css';

const Instructor = () => {
  return (
    <div>
      <div class="shadow_green_both">
        <section class="container p-0 ">
          <div class="instructor_wrapper mb_130">
            <div class="text-lg-start text-center">
              <a href="instructor.html">
                <button class="about_btn mb_24"><img src={greenstar} alt="star" />Skill
                  Instructor</button>
              </a>
              <h2>Introduce Our <br class="d-lg-none d-block" /> Life Instructor</h2>
            </div>
            <div>
              <div class="slick-slider row mb_48 m-0">
                <div class="slide col-lg-4">
                  <div class="">
                    <img class="img-fluid img_hover" src={i3} alt="" />
                    <div class="position-relative">
                      <div class="info_links">
                        <a href="https://dribbble.com">
                          <img class="img-fluid" src={dribble} alt="" />
                        </a>
                        <a href="https://www.instagram.com/">
                          <img class="img-fluid" src={insta} alt="" />
                        </a>
                        <a href="https://twitter.com/">
                          <img class="img-fluid" src={twitter} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="instructor_wrapper">
                    <a href="instructor.html">
                      <h3>Jimmy Sullivan</h3>
                    </a>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
                <div class="slide col-lg-4">
                  <div class="">
                    <img class="img-fluid img_hover" src={i3} alt="" />
                    <div class="position-relative">
                      <div class="info_links">
                        <a href="https://dribbble.com">
                          <img class="img-fluid" src={dribble} alt="" />
                        </a>
                        <a href="https://www.instagram.com/">
                          <img class="img-fluid" src={insta} alt="" />
                        </a>
                        <a href="https://twitter.com/">
                          <img class="img-fluid" src={twitter} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="instructor_wrapper">
                    <a href="instructor.html">
                      <h3>Jimmy Sullivan</h3>
                    </a>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
                <div class="slide col-lg-4">
                  <div class="">
                    <img class="img-fluid img_hover" src={i3} alt="" />
                    <div class="position-relative">
                      <div class="info_links">
                        <a href="https://dribbble.com">
                          <img class="img-fluid" src={dribble} alt="" />
                        </a>
                        <a href="https://www.instagram.com/">
                          <img class="img-fluid" src={insta} alt="" />
                        </a>
                        <a href="https://twitter.com/">
                          <img class="img-fluid" src={twitter} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="instructor_wrapper">
                    <a href="instructor.html">
                      <h3>Jimmy Sullivan</h3>
                    </a>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Instructor