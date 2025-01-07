import provide1 from '../../assets/home3/provide1.png'
import provide2 from '../../assets/home3/provide2.png'
import provide3 from '../../assets/home3/provide3.png'
import provide4 from '../../assets/home3/provide4.png'
import yellowstart from '../../assets/home3/yellowstart.png'
import arrowright from '../../assets/home3/arrow-right.png'
import yellowarrowright from '../../assets/home3/yellowarrow-right.png'

 const Home3AbousUs=()=> {
  return (
    <div className='home3'>
       <section className="provide_best_wrapper mb_130">
            <div className="container">
                <div className="row flex-lg-row flex-column-reverse  align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={provide1} alt=""/>
                    </div>
                    <div className="col-lg-6 text-lg-start text-center">
                        <button className="home3_button wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                      <img src={yellowstart} alt=""/>
                            About us
                        </button>

                        <h2 className="category_title wc wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
                            We Provide Best <br/> <span className="yc"> Online classNamees</span>
                        </h2>
                        <p className="wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">Learning from an online
                            event involves several key steps. Firstly, it's important to research
                            and choose an event that aligns with your learning objectives and interests. Once you've
                            registered for the event, make sure to review the
                            agenda and schedule to plan your time effectively.</p>

                        <div>
                            <div className="d-flex flex-lg-row flex-column  align-items-center mt_37 wow fadeInUp"
                                data-wow-duration="1.05s" data-wow-delay="300ms" style={{
                                  gap: '12px'
                                }}>
                                <div>
                                    <img src={provide2} alt="provide2"/>
                                </div>
                                <div>
                                    <h3>150+</h3>
                                    <p>from the world's best areas</p>
                                </div>
                            </div>
                            <div className="d-flex  flex-lg-row flex-column align-items-center mt_37 wow fadeInUp"
                                data-wow-duration="1.05s" data-wow-delay="400ms" style={{
                                  gap: '12px'
                                }}>
                                <div>
                                    <img src={provide3} alt="provide3"/>
                                </div>
                                <div>
                                    <h3>20+</h3>
                                    <p>Master lessons avg per className</p>
                                </div>
                            </div>
                            <div className="d-flex flex-lg-row flex-column  align-items-center mt_37 wow fadeInUp"
                                data-wow-duration="1.05s" data-wow-delay="500ms" style={{
                                  gap: '12px'
                                }}>
                                <div>
                                    <img src={provide4} alt=""/>
                                </div>
                                <div>
                                    <h3>10</h3>
                                    <p>Minutes average per lesson</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-lg-start justify-content-center mb-lg-0 mb_48">
                            <a href="/About">
                                <button className="yellow_btn mt_45 wow fadeInUp" data-wow-duration="1.05s"
                                    data-wow-delay="600ms"><span>Know more</span>
                                    <img className="d_block_hover" src={arrowright} alt="fdf"/>
                                    <img className="d_block_nohover" src={yellowarrowright} alt=""/>
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}
export default Home3AbousUs