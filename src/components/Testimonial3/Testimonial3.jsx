import React from 'react'
import greenstart from '../../assets/home1/greenstart.png'
import testP from '../../assets/home3/testi1.png'

const Testimonial3 = () => {
    return (
        <>
            <section class="testimonial2 home3_bg mb_130 pb-5" style={{ overflowX: "hidden" }}>
                <div class="container slick-slider_test2 ">
                    <div class="slide">
                        <div class="text-center">
                            <div class="testimonial_wrapper">
                                <button class="about_btn mb_24 text-center"><img src={greenstart} alt="" />
                                    Testimonials</button>
                            </div>
                            <h2 class="common_heading">
                                Our Students Feedback
                            </h2>
                            <p class="common_para mt_61">"Educare is revolutionizing the education sector. The site is
                                creative
                                and <br />
                                interesting, and the content is of the highest caliber. I value the convenience <br />
                                of learning from anywhere, and the tailored learning environment has <br />
                                kept me motivated and on task. The instructors are supportive and
                                knowledgeable.</p>
                            <div class="d-flex justify-content-center">
                                <img class="img-fluid mt_56" src={testP} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Testimonial3