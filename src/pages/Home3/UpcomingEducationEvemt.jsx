import yellowstart from '../../assets/home3/yellowstart.png'
import ebanner1 from '../../assets/home3/e-banner1.png'
import ebanner2 from '../../assets/home3/e-banner2.png'
import ebanner3 from '../../assets/home3/e-banner3.png'
import arrowright from '../../assets/home3/arrow-right.png'
import e1 from '../../assets/home3/e1.png'
import e2 from '../../assets/home3/e2.png'
import e3 from '../../assets/home3/e3.png'


const UpcomingEducationEvemt=()=> {
  return (
    <div className='home3'>
  <section>
            <div className="container mt_130 mb_130">
                <div className="upcoming_events_wrapper">
                    <div className="events_header mb_48">
                        <button className="home3_button wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                          <img src={yellowstart} alt="star"/>Event</button>
                        <h2 className="wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">Upcoming <br
                                className="d-lg-none d-block"/> Educational Events</h2>
                        <p className="grey_text_1 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">Are you
                            eager to expand your knowledge, gain new skills, and connect <br className="d-lg-block d-none"/>
                            with like-minded individuals? Look no further! We're thrilled to announce a series of <br
                                className="d-lg-block d-none"/>
                            upcoming educational events that promise to be both informative and engaging.</p>
                    </div>

                    <div className="events_card_wrapper ">
                        <div className="row events_card p-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
                            <div className="col-lg-3 ps-0">
                                <img className="img-fluid  w-100" src={ebanner1} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div>
                                        <a href="EventsDetails.html">
                                            <h2 className="events_title">Regional Chief Executive <br/> Network research
                                            </h2>
                                        </a>
                                        <div
                                            className="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center gap-4 mt_32 ">
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e1} alt=""/>
                                                <p className="grey_text_1">13th Dec 2023</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e2} alt=""/>
                                                <p className="grey_text_1">09:00 PM</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e2} alt=""/>
                                                <p className="grey_text_1">Washington DC, EK 3642</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 d-flex justify-content-lg-end justify-content-center align-items-center mt-lg-0 mt-3">
                                <button className="yellow_btn"><span>Book A Seat</span>
                                <img src={arrowright} alt=""/>
                                        </button>
                            </div>

                        </div>

                        <div className="row events_card p-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
                            <div className="col-lg-3 ps-0">
                                <img className="img-fluid w-100" src={ebanner2} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div>
                                        <a href="EventsDetails.html">

                                            <h2 className="events_title">Regional Chief Executive <br/> Network research</h2>
                                        </a>
                                        <div
                                            className="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center gap-4 mt_32 ">
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e1} alt=""/>
                                                <p className="grey_text_1">13th Dec 2023</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e2}  alt=""/>
                                                <p className="grey_text_1">09:00 PM</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e3} alt=""/>
                                                <p className="grey_text_1">Washington DC, EK 3642</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 d-flex justify-content-lg-end justify-content-center align-items-center mt-lg-0 mt-3">
                                <button className="yellow_btn"><span>Book A Seat</span> <img
                                        src={arrowright} alt=""/></button>
                            </div>

                        </div>

                        <div className="row events_card p-3 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="500ms">
                            <div className="col-lg-3 ps-0">
                                <img className="img-fluid w-100" src={ebanner3} alt=""/>
                            </div>
                            <div className="col-lg-7">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <div>
                                        <a href="EventsDetails.html">

                                            <h2 className="events_title">Regional Chief Executive <br/> Network research</h2>
                                        </a>
                                        <div
                                            className="d-flex align-items-center flex-wrap justify-content-lg-start justify-content-center gap-4 mt_32 ">
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e1} alt=""/>
                                                <p className="grey_text_1">13th Dec 2023</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e2} alt=""/>
                                                <p className="grey_text_1">09:00 PM</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <img src={e3}  alt=""/>
                                                <p className="grey_text_1">Washington DC, EK 3642</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 d-flex justify-content-lg-end justify-content-center align-items-center mt-lg-0 mt-3">
                                <button className="yellow_btn"><span>Book A Seat</span> <img
                                        src={arrowright}  alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default UpcomingEducationEvemt
