import yellowstart from '../../assets/home3/yellowstart.png'
import blog1 from '../../assets/home3/blog1.png'
import blog2 from '../../assets/home3/blog2.png'
import blog3 from '../../assets/home3/blog3.png'
import arrowright from '../../assets/home3/arrow-right.png'

const Home3OurLatestBlog=()=> {
  return (
    <div className='home3'>
        <section>
            <div className="container mb_130">
                <button className="home3_button mb_24 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
                    <img src={yellowstart} alt="star"/>Blog
                </button>
                <h2 className="category_title text-lg-start text-center wc  border-0 mb_48 fs_44 wow fadeInUp"
                    data-wow-duration="1.05s" data-wow-delay="200ms">
                    Our Latest <span className="yc"> Blog</span>
                </h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog_card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
                            <div className="featured_card_img">
                                <img className="img-fluid w-100 object-fit-cover" src={blog1} alt=""/>
                            </div>

                            <div className="blog_card_body">
                                <button className="blog_btn">26 Jan, 2023</button>
                                <h3 className="mb_12 mt_24">The Art Of Taking Right
                                    Decission To Success</h3>
                                <p className="grey_text_1 " style={{color: '#BCBCBC'}}>Learn how to take the right decission
                                    <br/>
                                    incritical time to get succes andhow <br/>
                                    to overcomebad times.
                                </p>
                                <div className="d-flex justify-content-end">
                                    <div className="blog_details_arrow">
                                        <a href="Blog.html">
                                          <img src={arrowright} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog_card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
                            <div className="featured_card_img">
                                <img className="img-fluid w-100 object-fit-cover" src={blog3} alt=""/>
                            </div>
                            <div className="blog_card_body">
                                <button className="blog_btn">26 Jan, 2023</button>
                                <h3 className="mb_12 mt_24">The Art Of Taking Right
                                    Decission To Success</h3>
                                <p className="grey_text_1 " style={{color: '#BCBCBC'}}>Learn how to take the right decission
                                    <br/>
                                    incritical time to get succes andhow <br/>
                                    to overcomebad times.
                                </p>
                                <div className="d-flex justify-content-end">
                                    <div className="blog_details_arrow">
                                        <a href="Blog.html"><img src={arrowright} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="blog_card wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="500ms">
                            <div className="featured_card_img">
                                <img className="img-fluid w-100 object-fit-cover" src={blog2} alt=""/>
                            </div>
                            <div className="blog_card_body">
                                <button className="blog_btn">26 Jan, 2023</button>
                                <h3 className="mb_12 mt_24">The Art Of Taking Right
                                    Decission To Success</h3>
                                <p className="grey_text_1 " style={{color: '#BCBCBC'}}>Learn how to take the right decission
                                    <br/>
                                    incritical time to get succes andhow <br/>
                                    to overcomebad times.
                                </p>
                                <div className="d-flex justify-content-end">
                                    <div className="blog_details_arrow">
                                        <a href="Blog.html"><img src={arrowright} alt=""/></a>
                                    </div>
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

export default Home3OurLatestBlog
