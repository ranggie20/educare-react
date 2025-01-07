import React from 'react';
import home3banner from "../../assets/home3/banner_images.png"
import home3bannermobile from "../../assets/home3/home3bannermobile.png"
import playsquare from "../../assets/home3/play-square.png"
const Home3Banner = () => {
    return (
        <div>
            {/* banner section start */}
            <section className="home3">
                <div className="banner_wrapper">
                    <div className="container mt_80">
                        <div className="row gap-lg-0 gap-5 align-items-center">
                            <div className="col-lg-7">
                                <h1
                                    className="banner_title text-lg-start text-center wow fadeInUp"
                                    data-wow-duration="1.05s"
                                    data-wow-delay="100ms"
                                >
                                    Build your <span>skills</span>
                                    <br className="d-lg-block d-none" />
                                    with our online
                                    <br className="d-lg-block d-none" />
                                    <span
                                        className="txt_curve_yellow mb_12"
                                        style={{ color: '#fff', marginBottom: '10px' }}
                                    >
                                        courses
                                    </span>
                                </h1>
                                <p
                                    className="mt_14 mb_56 fw_400 fs_18 grey2 text-lg-start text-center wow fadeInUp"
                                    data-wow-duration="1.05s"
                                    data-wow-delay="200ms"
                                >
                                    Built Wicket longer admire do barton vanity itself do in it. Preferred to
                                    <br className="d-lg-block d-none" />
                                    sportsmen it engrossed listening. Park gate soll they west hard for the.
                                </p>

                                <div
                                    className="d-flex gap-4 justify-content-lg-start justify-content-center mt-lg-0 mt-5 wow fadeInUp"
                                    data-wow-duration="1.05s"
                                    data-wow-delay="300ms"
                                >
                                    <button className="greenButton3">Get Started</button>
                                    <a href="https://youtu.be/TjPFZaMe2yw?si=5jpc0BZK8kAt9UbS">
                                        <button className="bannerWatchBtn3">
                                            <img src={playsquare} alt="" />
                                            <span>Watch Demo</span>
                                        </button>
                                    </a>
                                </div>

                                <div
                                    className="banner_images mt_80 wow fadeInUp"
                                    data-wow-duration="1.05s"
                                    data-wow-delay="400ms"
                                >
                                    <img src="/assets/home3/banner_images.png" className="" alt="" />
                                    <p>
                                        <span>99+</span> Explore Course
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="wow fadeInRight" data-wow-duration="1.05s" data-wow-delay="100ms">
                                    <img
                                        className="img-fluid d-lg-block d-none"
                                        src={home3banner}
                                        alt="banner"
                                    />
                                    <img
                                        className="img-fluid d-lg-none d-block"
                                        src={home3bannermobile}
                                        alt="banner"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}
        </div>
    );
};

export default Home3Banner;
