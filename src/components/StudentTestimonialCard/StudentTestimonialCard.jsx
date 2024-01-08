import React from 'react'
import star from '../../assets/blog/star.png'
import pp from '../../assets/blog/pp.png'
import greenstart from '../../assets/home1/greenstart.png'

const StudentTestimonialCard = () => {
    return (
        <>
            <section class="testimonial home3_bg  mb_130 pb-5" style={{ overflowX: "hidden" }}>
                <div class="container">
                    <div class="item">
                        <div class="text-center">
                            <div class="testimonial_wrapper">
                                <button class="about_btn mb_24 text-center"><img src={greenstart} alt="" />
                                    Testimonials</button>
                            </div>
                            <h2 class="common_heading mb-3">
                                Our Students Feedback
                            </h2>
                            <p class="common_para">87% of people learning for professional development report career
                                benefits <br /> like getting a promotion starting a new career in every world</p>
                            <div class=" slick-slider row mt_32">
                                <div class="slide col-lg-4">
                                    <div class="test_card">
                                        <div class="mb_30 d-flex">
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                        </div>
                                        <p class="common_para text-lg-start text-center">"This method is very flexible for
                                            me who works even outside the city of Bandung. I have access to interactive and
                                            flexible learning. "</p>
                                        <div class="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                                            <img src={pp} alt="pp" />
                                            <div class="profile_details_test text-lg-start text-center">
                                                <h4>Geraldine D. Anspach</h4>
                                                <p>UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide col-lg-4">
                                    <div class="test_card">
                                        <div class="mb_30 d-flex">
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                        </div>
                                        <p class="common_para text-lg-start text-center">"This method is very flexible for
                                            me who works even outside the city of Bandung. I have access to interactive and
                                            flexible learning. "</p>
                                        <div class="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                                            <img src={pp} alt="pp" />
                                            <div class="profile_details_test text-lg-start text-center">
                                                <h4>Geraldine D. Anspach</h4>
                                                <p>UI/UX Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="slide col-lg-4">
                                    <div class="test_card">
                                        <div class="mb_30 d-flex">
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                            <img src={star} alt="start" />
                                        </div>
                                        <p class="common_para text-lg-start text-center">"This method is very flexible for
                                            me who works even outside the city of Bandung. I have access to interactive and
                                            flexible learning. "</p>
                                        <div class="d-flex flex-lg-row flex-column gap_10 mt_51 align-items-center">
                                            <img src={pp} alt="pp" />
                                            <div class="profile_details_test text-lg-start text-center">
                                                <h4>Geraldine D. Anspach</h4>
                                                <p>UI/UX Designer</p>
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

export default StudentTestimonialCard