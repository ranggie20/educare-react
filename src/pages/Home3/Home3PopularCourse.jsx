import yellowstart from '../../assets/home3/yellowstart.png'
import arrowright from '../../assets/home3/arrow-right.png'
import yellowarrowright from '../../assets/home3/yellowarrow-right.png'
import f1 from '../../assets/home1/f1.png'
import start from '../../assets/home1/start.png'

const Home3PopularCourse=()=> {
  return (
    <div className='home3'>
    <section className=" home3_bg">
            <div className="container p-0">
                <div className="text-lg-start text-center">
                    <button className="home3_button mb_24 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                        <img src={yellowstart} alt="star"/>
                        Popular Course
                    </button>
                    <h2 className="category_title wc  border-0 mb_12 fs_44 wow fadeInUp" data-wow-duration="1.05s"
                        data-wow-delay="200ms">
                        Our Popular <span className="yc"> Courses</span>
                    </h2>
                    <div className="d-flex justify-content-lg-between justify-content-center align-items-start">
                        <p className="grey_text_1 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">Choose from
                            213,000 online video courses with <br/>
                            new additions published every month</p>
                        <div className="d-lg-flex d-none justify-content-lg-start justify-content-center mb-lg-0 mb_48 wow fadeInUp"
                            data-wow-duration="1.05s" data-wow-delay="400ms">
                            <a href="Course1.html">
                                <button className="yellow_btn "><span>Explore All Course</span>
                                    <img className="d_block_hover" src={arrowright} alt=""/>
                                    <img className="d_block_nohover" src={yellowarrowright} alt=""/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mb_48">
                        <div className="col-lg-4">
                            <div className="featured_card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
                                <div className="featured_card_im/g mb_18">

                                    <img className="w-100" src={f1} alt=""/>
                                </div>
                                <div>
                                    <p className="rating_number mb_18 fs_16">23 hr 45 min</p>
                                    <a href="Course1.html">

                                        <h3 className="mb_30">Web Development : <br/>
                                            The Complete Programming
                                            Course</h3>
                                    </a>
                                    <p className="rating_number mb_45">By <strong>Joye Boot</strong></p>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="rating">
                                                <img className="w-100" src={start} alt=""/>
                                                <span>4.8</span>
                                            </button>
                                            <p className="rating_number">(4563)</p>

                                        </div>
                                        <button className="price_btn price_btn1">$134</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="featured_card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
                                <div className="featured_card_im/g mb_18">

                                    <img className="w-100" src={f1} alt=""/>
                                </div>
                                <div>
                                    <p className="rating_number mb_18 fs_16">23 hr 45 min</p>
                                    <a href="Course1.html">

                                        <h3 className="mb_30">Web Development : <br/>
                                            The Complete Programming
                                            Course</h3>
                                    </a>
                                    <p className="rating_number mb_45">By <strong>Joye Boot</strong></p>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="rating">
                                                <img className="w-100" src={start} alt=""/>
                                                <span>4.8</span>
                                            </button>
                                            <p className="rating_number">(4563)</p>

                                        </div>
                                        <button className="price_btn price_btn1">$134</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="featured_card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
                                <div className="featured_card_im/g mb_18">

                                    <img className="w-100" src={f1} alt=""/>
                                </div>
                                <div>
                                    <p className="rating_number mb_18 fs_16">23 hr 45 min</p>
                                    <a href="Course1.html">

                                        <h3 className="mb_30">Web Development : <br/>
                                            The Complete Programming
                                            Course</h3>
                                    </a>
                                    <p className="rating_number mb_45">By <strong>Joye Boot</strong></p>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center gap-2">
                                            <button className="rating">
                                                <img className="w-100" src={start} alt=""/>
                                                <span>4.8</span>
                                            </button>
                                            <p className="rating_number">(4563)</p>

                                        </div>
                                        <button className="price_btn price_btn1">$134</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="yellow_btn d-lg-none d-block"><span>Explore All Course</span> <img
                            src={arrowright} alt=""/></button>
                </div>

            </div>
        </section>
    </div>
  )
}
export default Home3PopularCourse
