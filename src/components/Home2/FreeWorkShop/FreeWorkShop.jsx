import React from 'react'
// import '../../Home2/Home2.css';
import workShop from '../../../assets/star-workshop.png'
import right from '../../../assets/right.png'
import I from '../../../assets/workshop.png'

const FreeWorkShop = () => {
  return (
    <div>   <section className="bg_primary workshop_wrapper" style={{overflowX: 'hidden'}}>
  <div className="container">
    <div className="row alig-items-center">
      <div className="col-lg-6">
        <div className="workshop">
          <div className="centerd wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="100ms">
            <button className="free_workshop_btn"><img src={workShop} alt="star" />
              Workshop for free
            </button>
          </div>
          <h2 className="wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="200ms">
            Participate in Our
            <br className="d-lg-block d-none" />
            Free
            <span>Workshops</span>
          </h2>
          <p className="wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
            Come to our "Free Workshop" event to learn more, obtain
            <br className="d-lg-block d-none" />
            fresh perspectives, and meet others who share your interests.
            <br className="d-lg-block d-none" />
            Our knowledgeable speakers will offer insightful commentary
            <br className="d-lg-block d-none" />
            on a variety of subjects.
          </p>
          <div className="centerd mb-lg-0 mb-4 wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="400ms">
            <a href="Course1.html">
              <button className="explore_course_btn ">Explore All Course <img src={right} alt /></button>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="500ms" src={I} alt />
      </div>
    </div>
  </div>
</section>

</div>
  )
}

export default FreeWorkShop