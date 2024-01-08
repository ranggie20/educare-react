import React from 'react'
import greenstart from '../../../assets/home1/greenstart.png'
import blog1 from '../../../assets/home1/blog1.png'

const LatestBlog = () => {
  return (
    <>
      <div class="shadow_green_both">
        <section class="ourlatest_blog">
          <div class="container">
            <div class=" blog_wrapper mb_130">
              <div class="text-center">
                <button class="about_btn mb_24">
                  <img src={greenstart} alt="" />Blog
                </button>
                <h1 class="mb_24 blog_title">Our Latest Blog</h1>
              </div>
              <div class="slick-slider_blog row">
                <div class="slide col-lg-6">
                  <div class="blog_card">
                    <img class="img-fluid mb_24" src={blog1} alt="" />
                    <div class="blog_date">
                      <button>26 Jan, 2023</button>
                    </div>
                    <div class="">
                      <a href="BlogDetails.html">
                        <h4>The Art Of Taking Right Decission <br class="d-lg-block d-none" />
                          To Success</h4>
                      </a>
                      <p class="text-lg-start text-center">Learn how to take the right decission in
                        critical time to get succes and
                        <br class="d-lg-block d-none" />
                        how to overcome bad times.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="slide col-lg-6">
                  <div class="blog_card">
                    <img class="img-fluid mb_24" src={blog1} alt="" />
                    <div class="blog_date">
                      <button>26 Jan, 2023</button>
                    </div>
                    <div class="">
                      <a href="BlogDetails.html">
                        <h4>The Art Of Taking Right Decission <br class="d-lg-block d-none" />
                          To Success</h4>
                      </a>
                      <p class="text-lg-start text-center">Learn how to take the right decission in
                        critical time to get succes and
                        <br class="d-lg-block d-none" />
                        how to overcome bad times.
                      </p>
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

export default LatestBlog