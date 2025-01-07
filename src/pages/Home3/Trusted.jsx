import React from 'react'
import slider1 from '../../assets/home1/slider1.png'
import slider2 from '../../assets/home1/slider2.png'
import slider3 from '../../assets/home1/slider3.png'
import slider4 from '../../assets/home1/slider4.png'
import slider5 from '../../assets/home1/slider5.png'
import slider6 from '../../assets/home1/slider6.png'
import yellowstart from '../../assets/home3/yellowstart.png'
import cat1 from '../../assets/home3/cat1.png'
import cat2 from '../../assets/home3/cat2.png'
import cat3 from '../../assets/home3/cat3.png'
import cat4 from '../../assets/home3/cat4.png'
import arrowrigh from '../../assets/home3/arrow-right.png'
const Trusted=()=> {
  return (
    <div className='home3'>
        <section className="mt_92 mb_130">
            <div className="container">
                <p className="sectionHeader text-center text-md-start wc">
                    <span className="wc txt_curve_yellow ">
                        Trusted by big brands</span>
                </p>
                <div className="marqueeContainer company_slider">
                    <div className="marquee d-flex flex-nowrap gap-5">
                        <div className="marque_items d-flex flex-shrink-0 justify-content-between gap-5">
                            <div className="d-flex align-items-center gap-2">
                                <img src={slider1} alt="Star"/>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <img src="./assets/home1/slider2.png" alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider2} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider3} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider5} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider6} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider1} alt="Star"/>

                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <img src={slider2} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider3} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider4} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider5} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider5} alt="Star"/>
                            </div>

                        </div>
                        <div className="marque_items d-flex flex-shrink-0 justify-content-between gap-5">
                            <div className="d-flex align-items-center gap-2">
                                <img src={slider1} alt="Star"/>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <img src={slider2} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider5} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider4} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider5} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider6} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider1} alt="Star"/>

                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <img src={slider2} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider3} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider4} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider5} alt="Star"/>
                            </div>

                            <div className="d-flex align-items-center gap-2">
                                <img src={slider6} alt="Star"/>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </section>

         <section className="popular_categoris mb_130">
            <div className="container mb_130">
                <div className="text-lg-start text-center">
                    <button className="home3_button wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                        <img src={yellowstart} alt=""/>
                        Top Categories
                    </button>

                    <h2 className="category_title wc wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
                        Course <span className="yc"> Category</span>
                    </h2>
                </div>

                <div className="row">
                    <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="category_course wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                            <img src={cat1} alt=""/>
                            <p>UI/UX <br/>
                                Design</p>
                            <div
                                className=" w-100 d-flex flex-lg-row flex-column  justify-content-between align-items-center ">
                                <button><span className="fw_800 fs_18">3 </span>Course</button>
                                <div className="course_links mt-lg-0 mt-3">
                                    <a href="/Course1" className="">
                                      <img src={arrowrigh} alt=""/>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="category_course wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
                            <img src={cat2} alt="cat2"/>
                            <p>Data <br/>
                                Science</p>
                            <div
                                className=" w-100 d-flex  flex-lg-row flex-column  justify-content-between align-items-center ">
                                <button><span className="fw_800 fs_18">3 </span>Course</button>
                                <div className="course_links mt-lg-0 mt-3">
                                    <a href="/Course1" className=""><img src={arrowrigh}
                                            alt=""/></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-lg-0 mb-5">
                        <div className="category_course wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
                            <img src={cat3} alt=""/>
                            <p>Web <br/>
                                development</p>
                            <div
                                className=" w-100 d-flex  flex-lg-row flex-column  justify-content-between align-items-center ">
                                <button><span className="fw_800 fs_18">3 </span>Course</button>
                                <div className="course_links mt-lg-0 mt-3">
                                    <a href="/Course1" className=""><img src={arrowrigh}
                                            alt=""/></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-lg-0">
                        <div className="category_course wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
                            <img src={cat4} alt=""/>
                            <p>Strategy & <br/>
                                Research</p>
                            <div
                                className=" w-100 d-flex  flex-lg-row flex-column  justify-content-between align-items-center ">
                                <button><span className="fw_800 fs_18">3 </span>Course</button>
                                <div className="course_links mt-lg-0 mt-3">
                                    <a href="/Course1" className=""><img src={arrowrigh}
                                            alt=""/></a>

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
export default Trusted